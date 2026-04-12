import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { DATA } from '../data';

export function ProjectsPage() {
  const items = DATA.projects;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="page active" id="page-projects">
      <div className="page-hero">
        <div className="page-hero-left">
          <h1 style={{
            fontSize: '2.4rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#22C55E',
          }}>
            PROJECTS
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.92rem',
            marginTop: '0.4rem',
          }}>
            High-impact ML, NLP, and Deep Learning showcases.
          </p>
        </div>
        <Link className="back-btn" to="/">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>
      <div className="divider"></div>
      <div className="section" style={{ paddingTop: '3rem' }}>
        <div className="projects-vertical-list">
          {items.map((item, i) => (
            <ProjectCard
              key={item.title}
              project={item}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>
      <Footer />

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export function DatasetsPage() {
  return (
    <div className="page active" id="page-datasets">
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
            DATASETS
          </h1>
        </div>
        <Link className="back-btn" to="/">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>

      <div className="divider"></div>

      {/* MAIN CONTENT */}
      <div className="section" style={{ paddingTop: '3rem', maxWidth: '860px' }}>

        {/* INFO BOX — styled like about-wrap */}
        <div className="datasets-info-box">
          <ol className="datasets-list">
            <li>
              A curated collection of real-world datasets spanning domains like cybersecurity,
              healthcare, retail, finance, and more — ideal for building foundational Machine
              Learning models.
            </li>
            <li>
              Each dataset is pre-selected to support hands-on NLP and ML projects, giving you
              clean, structured data to start experimenting immediately.
            </li>
            <li>
              These datasets have been personally analyzed and used to build end-to-end projects
              — so you're working with data that's already been validated in real workflows.
            </li>
            <li>
              Suitable for beginners exploring data science as well as intermediate practitioners
              looking for diverse, multi-domain datasets to expand their project portfolio.
            </li>
            <li>
              Regularly updated and sourced from reliable platforms — ensuring the data remains
              relevant for current trends in AI, ML, and research.
            </li>
            <li className="datasets-link-item">
              <a
                href="https://drive.google.com/drive/folders/1335wW2jiWEnBy4ld5smhO01QmtKGJbCa?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="datasets-drive-link"
              >
                View the complete dataset collection
                <i className="fas fa-external-link-alt" style={{ marginLeft: '0.5rem', fontSize: '0.82rem' }}></i>
                <span style={{ marginLeft: '0.3rem' }}>→</span>
              </a>
            </li>
          </ol>
        </div>

        {/* MUTED TAGLINE */}
        <p className="datasets-tagline">
          We also help you search for the right datasets tailored to your project needs.
        </p>

        {/* CTA BUTTON */}
        <div className="datasets-cta-row">
          <Link
            className="btn btn-c datasets-cta-btn"
            to="/contact"
          >
            Contact Us <span style={{ marginLeft: '0.3rem' }}>→</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export function AiLabPage() {
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
    <div className="page active" id="page-ai-lab">
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
            AI LAB
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.88rem',
            marginTop: '0.5rem',
            lineHeight: '1.7',
            maxWidth: '640px',
          }}>
            Exploring the frontier of Generative AI, Autonomous Agents, Retrieval-Augmented
            Generation, and Large Language Models.
          </p>
        </div>
        <Link className="back-btn" to="/">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>

      <div className="divider"></div>

      {/* 2×2 CARD GRID */}
      <div className="section" style={{ paddingTop: '3rem' }}>
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

        {/* FULL-WIDTH BANNER */}
        <div className="ailab-banner">
          <p className="ailab-banner-text">
            These systems are actively being researched, built, and tested in the lab. Follow
            the journey as experiments become deployable solutions.
          </p>
          <Link
            className="ailab-banner-link"
            to="/contact"
          >
            Interested in collaborating or building together? → Contact Us
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export function DocsPage() {
  return (
    <div className="page active" id="page-docs">
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
            DOCS
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.92rem',
            marginTop: '0.4rem',
          }}>
            Curated resources to accelerate your learning journey.
          </p>
        </div>
        <Link className="back-btn" to="/">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>

      <div className="divider"></div>

      {/* MAIN CONTENT */}
      <div className="section" style={{ paddingTop: '3rem' }}>

        {/* TWO-CARD ROW */}
        <div className="docs-cards-row">

          {/* CARD 1: DATA SCIENCE */}
          <div className="docs-card">
            <h2 className="docs-card-title">DATA SCIENCE</h2>
            <p className="docs-card-body">
              A collection of handpicked Data Science resources including Python project ideas,
              roadmaps, cheat sheets, data wrangling tasks, and foundational guides — everything
              you need to go from beginner to job-ready.
            </p>
            <Link
              to="/contact"
              className="docs-card-link"
            >
              Explore Data Science Docs →
            </Link>
          </div>

          {/* CARD 2: SQL */}
          <div className="docs-card">
            <h2 className="docs-card-title">SQL</h2>
            <p className="docs-card-body">
              From basics to advanced — this SQL collection covers core concepts, handwritten notes,
              interview preparation questions with answers, and zero-to-hero guides. Perfect for
              data roles and backend development.
            </p>
            <Link
              to="/contact"
              className="docs-card-link"
            >
              Explore SQL Docs →
            </Link>
          </div>
        </div>

        {/* MUTED TAGLINE */}
        <p className="docs-coming-soon">
          More resources across AI, ML, and Research coming soon.
        </p>

        {/* CTA BUTTON */}
        <div className="datasets-cta-row">
          <Link
            className="btn btn-c datasets-cta-btn"
            to="/contact"
          >
            Request a Resource →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export function BlogsPage() {
  return (
    <div className="page active" id="page-blogs">
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
            BLOGS
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.88rem',
            marginTop: '0.5rem',
            lineHeight: '1.7',
            maxWidth: '600px',
          }}>
            Thoughts, breakdowns, and deep-dives on AI, ML, Research, and everything in between.
          </p>
        </div>
        <Link className="back-btn" to="/">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>

      <div className="divider"></div>

      {/* MAIN CONTENT */}
      <div className="section" style={{ paddingTop: '3rem' }}>
        <div className="blogs-coming-card">
          <p className="blogs-coming-text">
            We are currently crafting in-depth articles, tutorials, and research breakdowns.
            Check back soon — the lab notes are coming.
          </p>
          <p className="blogs-coming-topics">
            Topics will cover: Generative AI &middot; RAG &middot; LLM Fine-Tuning &middot; AI Agents &middot; Data Science &middot; Research Paper Walkthroughs
          </p>
        </div>
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
            RESEARCH
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
            Developed and published a novel deep learning pipeline that benchmarks EfficientNetB3, VGG16, and a custom Vision Transformer (ViT) with Shifted Patch Tokenization (SPT) and Locality Self-Attention (LSA) for classifying brain MRI scans into 4 neurological disorder categories. The ViT model achieved 93.43% test accuracy over 60 epochs — outperforming all CNN-based baselines.
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
            Designed and implemented a fully automated CNN-based brain tumor classification system capable of identifying Glioma, Meningioma, and Pituitary tumor types directly from MRI images — without requiring prior tumor segmentation. The model leverages deep transfer learning, hyperparameter tuning via the Adam optimizer, and achieves classification accuracy comparable to state-of-the-art architectures including VGG16 and ResNet.
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
          <h3 className="research-banner-title">WE WRITE RESEARCH PAPERS</h3>
          <p className="research-banner-body">
            From ideation to submission-ready manuscripts — we provide end-to-end research paper writing assistance across AI, Machine Learning, Deep Learning, Data Science, and interdisciplinary domains. Our work has been reviewed and submitted to IEEE-level journals, demonstrating the depth and quality of our research capabilities.
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
