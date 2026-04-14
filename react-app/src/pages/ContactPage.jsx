import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', github: '', msg: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Something went wrong.');

      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  }

  function resetForm() {
    setForm({ name: '', email: '', subject: '', github: '', msg: '' });
    setSubmitted(false);
    setError('');
  }

  return (
    <div className="page active" id="page-contact">
      <div className="page-hero">
        <div className="page-hero-left">
          <h1><span className="grad">Get In Touch</span></h1>
          <p>Have a project or research idea? Let's talk.</p>
        </div>
        <Link className="back-btn" to="/">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>
      <div className="divider"></div>

      <div className="contact-wrap">
        {/* LEFT — contact info */}
        <div className="contact-info">
          <div>
            <h2>Let's <span>Collaborate</span></h2>
            <p style={{ marginTop: '.8rem' }}>
              Open to research collaborations, freelance data science projects, and internship opportunities.
              Drop a message and I'll get back within 24 hours.
            </p>
          </div>

          <div>
            <p style={{ fontSize: '.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '.8rem' }}>
              Find me on
            </p>
            <div className="info-social">
              <a href="#" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://instagram.com/aicore.lab" target="_blank" rel="noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="form-card">
          <div className="contact-personal-details">
            <div className="contact-detail-row">
              <span className="contact-detail-label">CONTACT EMAIL</span>
              <a className="contact-detail-value" href="mailto:aicorelab2@gmail.com">
                aicorelab2@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-details-separator"></div>

          <p style={{
            fontSize: '0.72rem',
            fontFamily: "'JetBrains Mono', monospace",
            color: 'rgba(34,197,94,0.6)',
            marginBottom: '0.6rem',
            letterSpacing: '0.02em',
          }}>
            For repo access requests, include your GitHub username and specify the project in your message.
          </p>
          <h3>
            <i className="fas fa-paper-plane" style={{ color: 'var(--cyan)', marginRight: '.6rem' }}></i>
            Send a Message
          </h3>

          <div id="contact-form-wrap" style={{ display: submitted ? 'none' : 'block' }}>
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cf-name">Your Name</label>
                  <input type="text" id="cf-name" name="name" placeholder="Enter your name" required value={form.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-email">Email Address</label>
                  <input type="email" id="cf-email" name="email" placeholder="Enter your email" required value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cf-subject">Subject</label>
                <input type="text" id="cf-subject" name="subject" placeholder="Research collaboration / Project inquiry..." required value={form.subject} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="cf-github">GitHub Username <span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.78em' }}>(optional)</span></label>
                <input type="text" id="cf-github" name="github" placeholder="github.com/yourusername" value={form.github} onChange={handleChange} />
                <small style={{ display: 'block', marginTop: '0.35rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', fontFamily: "'JetBrains Mono', monospace" }}>
                  Add your GitHub username if you're requesting repository access.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="cf-msg">Message</label>
                <textarea id="cf-msg" name="msg" rows="5" placeholder="Tell me about your project, idea, or question... You can also mention which project repo you need access to..." required value={form.msg} onChange={handleChange}></textarea>
              </div>

              {/* Error message */}
              {error && (
                <div style={{
                  background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.4)',
                  borderRadius: '6px',
                  padding: '10px 14px',
                  marginBottom: '12px',
                  fontSize: '0.82rem',
                  color: '#f87171',
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  <i className="fas fa-exclamation-circle" style={{ marginRight: '8px' }}></i>
                  {error}
                </div>
              )}

              <button type="submit" className="btn-submit" disabled={sending}>
                {sending
                  ? <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                  : <><i className="fas fa-paper-plane"></i> Send Message</>}
              </button>
            </form>
          </div>

          <div className={`success-msg ${submitted ? 'show' : ''}`} id="success-msg">
            <div className="success-icon"><i className="fas fa-check"></i></div>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
            <button className="btn btn-c" style={{ marginTop: '.5rem' }} onClick={resetForm}>
              <i className="fas fa-redo"></i> Send Another
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}