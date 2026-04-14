import { google } from "googleapis";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
    // Allow CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const { name, email, subject, githubUsername, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required." });
    }

    try {
        // ─── 1. SAVE TO GOOGLE SHEETS ───────────────────────────────────────────
        const auth = new google.auth.GoogleAuth({
            credentials: {
                //client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "Sheet1!A:F",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[timestamp, name, email, subject || "", githubUsername || "", message]],
            },
        });

        // ─── 2. SEND EMAIL NOTIFICATION ─────────────────────────────────────────
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not your real password)
            },
        });

        await transporter.sendMail({
            from: `"AI Core Hub Contact" <${process.env.GMAIL_USER}>`,
            to: process.env.NOTIFY_EMAIL, // your email to receive notifications
            subject: `📬 New Contact: ${subject || "No subject"} — from ${name}`,
            html: `
        <div style="font-family: monospace; background: #0d1117; color: #c9d1d9; padding: 24px; border-radius: 8px; max-width: 600px;">
          <h2 style="color: #3fb950; margin-top: 0;">New message on AI Core Hub</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="color: #8b949e; padding: 6px 0; width: 140px;">Name</td><td style="color: #e6edf3;">${name}</td></tr>
            <tr><td style="color: #8b949e; padding: 6px 0;">Email</td><td style="color: #58a6ff;"><a href="mailto:${email}" style="color: #58a6ff;">${email}</a></td></tr>
            <tr><td style="color: #8b949e; padding: 6px 0;">Subject</td><td style="color: #e6edf3;">${subject || "—"}</td></tr>
            <tr><td style="color: #8b949e; padding: 6px 0;">GitHub</td><td style="color: #e6edf3;">${githubUsername ? `<a href="https://github.com/${githubUsername}" style="color: #58a6ff;">${githubUsername}</a>` : "—"}</td></tr>
            <tr><td style="color: #8b949e; padding: 6px 0;">Time</td><td style="color: #e6edf3;">${timestamp}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #161b22; border-radius: 6px; border-left: 3px solid #3fb950;">
            <p style="color: #8b949e; margin: 0 0 8px 0; font-size: 12px;">MESSAGE</p>
            <p style="color: #e6edf3; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
        });

        return res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Contact form error:", error);
        return res.status(500).json({ error: "Something went wrong. Please try again." });
    }
}