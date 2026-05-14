import { Link, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { DATA } from '../data';

export function ProjectsPage() {
  const items = DATA.projects;

  const labCards = [
    {
      accent: 'cyan',
      title: 'GENERATIVE AI',
      description:
        'Building production-grade GenAI applications — from prompt engineering to full-stack LLM-powered pipelines. Currently in active development.',
    },
    {
      accent: 'purple',
      title: 'AI AGENTS',
      description:
        'Designing and deploying autonomous AI agents capable of reasoning, planning, and executing multi-step tasks with minimal human intervention.',
    },
    {
      accent: 'cyan',
      title: 'RAG SYSTEMS',
      description:
        'Architecting Retrieval-Augmented Generation pipelines that ground LLM responses in real, structured knowledge bases for accurate, context-aware outputs.',
    },
    {
      accent: 'purple',
      title: 'LLM FINE-TUNING',
      description:
        'Experimenting with fine-tuning open-source Large Language Models on domain-specific datasets for specialized, high-performance applications.',
    },
  ];

  return (
    <div className="page-wrapper page-wrapper--dark">
      <Nav />

      {/* 1. EXPERTISE SECTION (formerly About) */}
      <div className="section-container" style={{ paddingTop: '8rem' }}>
        <div className="page-hero-simple mt-12 mb-6">
          <h1 className="text-green-400 uppercase tracking-widest text-xl md:text-2xl mb-4 border-l-2 border-green-400 pl-3">AI Engineering Domains</h1>
          <p className="section-subheading">
            Designing and building production-grade AI systems across Generative AI, RAG pipelines, and intelligent agents.
          </p>
        </div>

        <div className="ailab-grid">
          {labCards.map((card) => (
            <div
              key={card.title}
              className={`ailab-card ailab-card--${card.accent}`}
            >
              <h2 className="ailab-card-title">{card.title}</h2>
              <p className="ailab-card-desc">{card.description}</p>
              <span className="ailab-badge">⚙ In Development</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. PROJECTS SECTION */}
      <div className="section-container" style={{ marginTop: '5rem' }}>
        <div className="page-hero-simple mt-12 mb-6">
          <h1 className="text-green-400 uppercase tracking-widest text-xl md:text-2xl mb-4 border-l-2 border-green-400 pl-3">AI Projects & Case Studies</h1>
          <p className="section-subheading">
            End-to-end AI projects demonstrating real-world problem solving, model development, and system deployment.
          </p>
        </div>

        <div className="projects-grid-layout">
          {items.map((item) => (
            <ProjectCard
              key={item.title}
              project={item}
            />
          ))}
        </div>

        {/* 3. FINAL CALL-TO-ACTION */}
        <div className="ailab-banner-compact" style={{ marginTop: '4rem' }}>
          <p className="ailab-banner-text">
            These projects showcase my expertise across the full AI lifecycle—from
            architecting production-ready LLM pipelines and autonomous agents to
            deploying high-precision deep learning systems. I am committed to building
            intelligent solutions that bridge the gap between complex research and
            real-world impact.
          </p>
          <Link className="ailab-banner-link" to="/contact">
            Interested in collaborating or engineering the next generation of AI? →
            Contact Me
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}





export function DocsPage() {
  const coreValues = [
    {
      title: 'AI Learning Paths',
      desc: 'Structured curriculum covering Data Science, Machine Learning, and AI systems Design.',
      icon: 'fas fa-graduation-cap'
    },
    {
      title: 'Real-World Projects',
      desc: 'Hands-on programs focused on building production-ready AI solutions and industrial systems.',
      icon: 'fas fa-code-branch'
    },
    {
      title: 'Mentorship & Community',
      desc: 'Collaborate with peers, mentors, and AI engineers in a growth-focused environment.',
      icon: 'fas fa-users'
    },
    {
      title: 'Career Acceleration',
      desc: 'Guidance, resources, and support to transition into specialized AI/ML roles.',
      icon: 'fas fa-rocket'
    }
  ];

  const programs = [
    'Core AI & LLM',
    'Applied Machine Learning',
    'Deep Learning & Vision',
    'AI Agents & Systems'
  ];

  const skills = [
    'Data Science Foundations',
    'Machine Learning',
    'Deep Learning',
    'NLP & LLMs',
    'AI Systems Design',
    'Deployment & MLOps'
  ];

  return (
    <div className="page active" id="page-cortexzen">
      {/* 1. HERO SECTION */}
      <div className="page-hero">
        <div className="page-hero-left">
          <div className="research-paper-badge research-badge-cyan mb-4" style={{ display: 'inline-block' }}>
            Member of CortexZenAI
          </div>
          <h1 style={{
            fontSize: '2.4rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#22C55E',
          }}>
            CORTEXZEN AI
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1rem',
            marginTop: '0.8rem',
            maxWidth: '700px',
            lineHeight: '1.6'
          }}>
            An AI learning and innovation community focused on building real-world AI systems, 
            structured learning paths, and collaborative growth.
          </p>
        </div>
        <Link className="back-btn" to="/">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>

      <div className="divider"></div>

      {/* 2. CORE VALUES GRID */}
      <div className="section" style={{ paddingTop: '4rem' }}>
        <div className="docs-cards-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', display: 'grid', gap: '2rem' }}>
          {coreValues.map((val) => (
            <div key={val.title} className="docs-card" style={{ height: '100%' }}>
              <div style={{ color: '#22C55E', fontSize: '1.5rem', marginBottom: '1rem' }}>
                <i className={val.icon}></i>
              </div>
              <h2 className="docs-card-title">{val.title}</h2>
              <p className="docs-card-body">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. PROGRAMS & SKILLS SPLIT */}
      <div className="section" style={{ paddingTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        <div>
          <h2 className="text-green-400 uppercase tracking-widest text-sm mb-6">FEATURED PROGRAMS</h2>
          <div className="flex flex-col gap-3">
            {programs.map((p) => (
              <div key={p} className="hp-minimal-item" style={{ fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                {p}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-green-400 uppercase tracking-widest text-sm mb-6">CURRICULUM & SKILLS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {skills.map((s) => (
              <div key={s} className="tag" style={{ padding: '0.6rem', textAlign: 'center', fontSize: '0.75rem' }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. MY INVOLVEMENT */}
      <div className="section" style={{ paddingTop: '6rem' }}>
        <div className="research-banner" style={{ borderLeftColor: '#4ADE80', background: 'rgba(74, 222, 128, 0.03)' }}>
          <h3 className="research-banner-title" style={{ color: '#4ADE80' }}>MY INVOLVEMENT</h3>
          <div className="research-banner-body" style={{ marginTop: '1.5rem' }}>
            <p className="text-gray-300 leading-relaxed mb-4" style={{ fontSize: '1.1rem' }}>
              As a member of CortexZenAI, I actively contribute to building AI systems and exploring advanced concepts in Generative AI and machine learning.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="space-y-2 mt-3">
              {[
                'Build and experiment with real-world AI systems and GenAI pipelines',
                'Mentor students and guide them in project development and learning paths',
                'Conduct technical training on AI, ML, and system design',
                'Support hands-on learning and career transition into AI roles'
              ].map((item) => (
                <li key={item} style={{ display: 'flex', gap: '1rem', color: '#d1d5db', fontSize: '1.05rem', marginBottom: '0.8rem' }}>
                  <span style={{ color: '#4ADE80' }}>▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4" style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
              My focus is on bridging the gap between theoretical knowledge and production-ready AI system development through collaboration and hands-on learning.
            </p>
          </div>
        </div>
      </div>

      {/* 5. CTA SECTION */}
      <div className="section" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <a 
          href="https://nex-mind-ai-9cae.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-c"
          style={{ padding: '1rem 3rem', fontSize: '1rem', textDecoration: 'none' }}
        >
          Explore CortexZenAI →
        </a>
      </div>

      <Footer />
    </div>
  );
}


export function ResearchPage() {
  return (
    <div className="page active" id="page-research">
      {/* PAGE HEADER */}
      <div className="page-hero">
        <div className="page-hero-left">
          <h1 style={{
            fontSize: '2.4rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#22C55E',
          }}>
            RESEARCH & PUBLICATIONS
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.88rem',
            marginTop: '0.5rem',
            lineHeight: '1.7',
            maxWidth: '680px',
          }}>
            Peer-reviewed publications, academic contributions, and domain research across AI, Deep Learning, and Scientific Exploration.
          </p>
        </div>
        <Link className="back-btn" to="/">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>

      <div className="divider"></div>

      <div className="section" style={{ paddingTop: '3rem' }}>

        {/* ── STATS BAR ── */}
        <div className="research-stats-bar">
          {[
            { value: '2+', label: 'Published Papers' },
            { value: '93.43%', label: 'Peak Model Accuracy' },
            { value: 'IEEE', label: 'Journal Published' },
          ].map((s) => (
            <div key={s.label} className="research-stat-card">
              <span className="research-stat-value">{s.value}</span>
              <span className="research-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── PAPER CARD 1 ── */}
        <div className="research-paper-card">
          <div className="research-paper-badge research-badge-cyan">IEEE SENSORS JOURNAL · 2024</div>

          <h2 className="research-paper-title">
            DEEP LEARNING ARCHITECTURE FOR BRAIN DISEASE CLASSIFICATION
          </h2>
          <p className="research-paper-subtitle">
            Shifted Patch Tokenization &amp; Vision Transformers for Accurate Brain MRI Analysis
          </p>
          <p className="research-paper-desc">
            I developed and published a novel deep learning pipeline that benchmarks EfficientNetB3, VGG16, and a custom Vision Transformer (ViT) with Shifted Patch Tokenization (SPT) and Locality Self-Attention (LSA) for classifying brain MRI scans into 4 neurological disorder categories. The ViT model achieved 93.43% test accuracy over 60 epochs — outperforming all CNN-based baselines.
          </p>

          <div className="research-metrics-row">
            {['93.43% Accuracy', '95.60% Precision', '4-Class Classification', '150 Epochs', 'Vision Transformer'].map(m => (
              <span key={m} className="research-metric-tag">{m}</span>
            ))}
          </div>

          <div className="research-tech-row">
            {['Vision Transformer', 'EfficientNetB3', 'VGG16', 'TensorFlow', 'Medical AI', 'MRI Analysis'].map(t => (
              <span key={t} className="research-tech-tag">{t}</span>
            ))}
          </div>

          <div className="research-img-grid research-img-grid--3">
            <figure className="research-figure">
              <img src="/graphical_abstract.png" alt="SPT-Based Vision Transformer Architecture" className="research-img" />
              <figcaption className="research-caption">SPT-Based Vision Transformer Architecture</figcaption>
            </figure>
            <figure className="research-figure">
              <img src="/fig4_comparison.png" alt="Model Accuracy Comparison" className="research-img" />
              <figcaption className="research-caption">Model Accuracy Comparison — ViT vs CNN vs VGG</figcaption>
            </figure>
            <figure className="research-figure">
              <img src="/fig6_accuracy.png" alt="Epoch vs Training Accuracy Curve" className="research-img" />
              <figcaption className="research-caption">Epoch vs Training Accuracy Curve</figcaption>
            </figure>
          </div>
        </div>

        {/* ── PAPER CARD 2 ── */}
        <div className="research-paper-card">
          <div className="research-paper-badge research-badge-amber">CONFERENCE PAPER · 2024</div>

          <h2 className="research-paper-title">
            BRAIN TUMOR CLASSIFICATION USING CONVOLUTIONAL NEURAL NETWORKS
          </h2>
          <p className="research-paper-subtitle">
            Automated MRI-Based Detection of Glioma, Meningioma &amp; Pituitary Tumors
          </p>
          <p className="research-paper-desc">
            I designed and implemented a fully automated CNN-based brain tumor classification system capable of identifying Glioma, Meningioma, and Pituitary tumor types directly from MRI images — without requiring prior tumor segmentation. The model leverages deep transfer learning, hyperparameter tuning via the Adam optimizer, and achieves classification accuracy comparable to state-of-the-art architectures including VGG16 and ResNet.
          </p>

          <div className="research-metrics-row">
            {['98% Benchmark Accuracy', '3-Class Tumor Detection', 'No Pre-Segmentation Required', 'CNN'].map(m => (
              <span key={m} className="research-metric-tag">{m}</span>
            ))}
          </div>

          <div className="research-tech-row">
            {['CNN', 'Transfer Learning', 'MRI Analysis', 'Adam Optimizer', 'Medical AI', 'PyTorch'].map(t => (
              <span key={t} className="research-tech-tag">{t}</span>
            ))}
          </div>

          <div className="research-img-grid research-img-grid--2">
            <figure className="research-figure">
              <img src="/fig1_mri_samples.png" alt="MRI Sample Dataset" className="research-img" />
              <figcaption className="research-caption">MRI Sample Dataset — Atrophy, Ischemia, WMI, Normal</figcaption>
            </figure>
            <figure className="research-figure">
              <img src="/fig2_vit_arch.png" alt="Vision Transformer Model Architecture" className="research-img" />
              <figcaption className="research-caption">Vision Transformer Model Architecture</figcaption>
            </figure>
          </div>
        </div>

        {/* ── FULL-WIDTH BANNER ── */}
        <div className="research-banner">
          <h3 className="research-banner-title">RESEARCH ASSISTANCE</h3>
          <p className="research-banner-body">
            From ideation to submission-ready manuscripts — I provide end-to-end research paper writing assistance across AI, Machine Learning, Deep Learning, Data Science, and interdisciplinary domains. My work has been reviewed and submitted to IEEE-level journals, demonstrating the depth and quality of my research capabilities.
          </p>

          <div className="research-banner-grid">
            {[
              { title: 'Literature Review & Gap Analysis', body: 'Comprehensive survey of existing work with clear identification of research gaps.' },
              { title: 'Methodology & Model Design', body: 'Statistical frameworks, algorithm selection, and experimental design tailored to your domain.' },
              { title: 'Results, Analysis & Visualization', body: 'Data interpretation, graph generation, metric reporting, and comparative analysis.' },
              { title: 'Journal Formatting & Submission', body: 'IEEE, Springer, Elsevier, and conference-ready formatting with abstract and keyword optimization.' },
            ].map((point) => (
              <div key={point.title} className="research-banner-point">
                <span className="research-banner-bullet">▸</span>
                <div>
                  <span className="research-banner-point-title">{point.title}</span>
                  {' — '}
                  <span className="research-banner-point-body">{point.body}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="research-banner-cta-row">
            <Link
              className="btn btn-c research-banner-cta-btn"
              to="/contact"
            >
              Discuss Your Research →
            </Link>
          </div>
          <p className="research-banner-disclaimer">
            Every research engagement is handled with full confidentiality and academic integrity.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
}
