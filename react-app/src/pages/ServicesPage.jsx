import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const SERVICES = [
  {
    id: 'svc-architecture',
    title: 'Project Architecture',
    icon: 'fas fa-sitemap',
    desc: 'End-to-end planning and structuring of technical and research-based projects — from ideation to deployment-ready roadmaps.',
    hero: false,
  },
  {
    id: 'svc-mentorship',
    title: 'Project Mentorship',
    icon: 'fas fa-user-graduate',
    desc: 'Step-by-step guidance through your project lifecycle, helping you navigate challenges, tools, and methodologies with clarity.',
    hero: false,
  },
  {
    id: 'svc-research',
    title: 'Research Paper Development',
    icon: 'fas fa-file-alt',
    desc: 'Assistance in structuring, writing, and refining academic or technical research papers aligned with publication standards.',
    hero: false,
  },
  {
    id: 'svc-solutions',
    title: 'Solution Engineering',
    icon: 'fas fa-cogs',
    desc: 'Diagnosing problems in existing systems or workflows and delivering optimized, scalable solutions tailored to your needs.',
    hero: false,
  },
  {
    id: 'svc-ai',
    title: 'AI & Intelligent Systems',
    icon: 'fas fa-brain',
    badge: 'Core Specialization',
    desc: 'The core of the lab. Building and deploying AI Agents, Generative AI applications, and Retrieval-Augmented Generation (RAG) pipelines — turning cutting-edge research into real, working intelligent systems.',
    hero: true,
  },
];

function ServiceCard({ svc }) {
  return (
    <div
      id={svc.id}
      className={`svc-card${svc.hero ? ' svc-hero-card' : ''}`}
      role="article"
    >
      {svc.badge && (
        <span className="svc-badge">
          <i className="fas fa-star" /> {svc.badge}
        </span>
      )}
      <div className="svc-icon-wrap">
        <i className={svc.icon} />
      </div>
      <h3 className="svc-title">{svc.title}</h3>
      <p className="svc-desc">{svc.desc}</p>
      <Link className="btn btn-c svc-btn" to="/contact" id={`${svc.id}-btn`}>
        Know More <span className="svc-arrow">→</span>
      </Link>
    </div>
  );
}

export default function ServicesPage() {
  const regular = SERVICES.filter((s) => !s.hero);
  const hero    = SERVICES.find((s) => s.hero);

  return (
    <div className="page active" id="page-services">

      {/* ── Header ── */}
      <div className="section svc-header-section">
        <div className="sec-head">
          <h1 className="sec-title grad">Services</h1>
          <p className="sec-sub">Select a service to learn more or get in touch.</p>
        </div>
      </div>

      {/* ── Card grid ── */}
      <div className="svc-grid-wrap">
        <div className="svc-grid">
          {regular.map((svc) => (
            <ServiceCard key={svc.id} svc={svc} />
          ))}
        </div>

        {/* Hero card — full width */}
        {hero && (
          <div className="svc-hero-row">
            <ServiceCard svc={hero} />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
