import { useNavigate, Link } from 'react-router-dom';
import useTypingEffect from '../hooks/useTypingEffect';
import Footer from '../components/Footer';

export default function HomePage() {
  const typedText = useTypingEffect(["Data.", "Models.", "Intelligence.", "Systems."]);

  return (
    <div className="page active" id="page-home">

      {/* 1. HERO SECTION */}
      <div className="hp-hero">
        <div className="hp-hero-glow"></div>
        <h1 className="hp-hero-title">
          <span className="grad">aicore.lab</span>
        </h1>
        <div className="hp-hero-tag">
          <span id="typing-text">{typedText}</span>
          <span className="cursor"></span>
        </div>
        <div className="hp-hero-ctas">
          <Link to="/ai-lab" className="btn btn-c hp-hero-btn">Explore Lab</Link>
          <Link to="/projects" className="hp-hero-btn-alt">View Projects</Link>
        </div>
      </div>

      {/* 2. FEATURE STRIP */}
      <div className="hp-strip">
        <div className="hp-strip-item">
          <i className="fas fa-layer-group"></i> <span>10+ AI Projects</span>
        </div>
        <div className="hp-strip-item">
          <i className="fas fa-microscope"></i> <span>Research Driven</span>
        </div>
        <div className="hp-strip-item">
          <i className="fas fa-server"></i> <span>Production Ready Systems</span>
        </div>
        <div className="hp-strip-item">
          <i className="fas fa-network-wired"></i> <span>Multi-Modal AI</span>
        </div>
      </div>
      <div className="hp-divider"></div>

      {/* 3. WORKFLOW SECTION */}
      <div className="hp-section hp-workflow-section">
        <h2 className="hp-sec-title">How I Build AI Systems</h2>
        <div className="hp-workflow">
          <div className="hp-flow-step">
            <i className="fas fa-database"></i><span>Data</span>
          </div>
          <i className="fas fa-long-arrow-alt-right hp-flow-arrow"></i>
          <div className="hp-flow-step">
            <i className="fas fa-brain"></i><span>Models</span>
          </div>
          <i className="fas fa-long-arrow-alt-right hp-flow-arrow"></i>
          <div className="hp-flow-step">
            <i className="fas fa-laptop-code"></i><span>Training</span>
          </div>
          <i className="fas fa-long-arrow-alt-right hp-flow-arrow"></i>
          <div className="hp-flow-step">
            <i className="fas fa-rocket"></i><span>Deployment</span>
          </div>
          <i className="fas fa-long-arrow-alt-right hp-flow-arrow"></i>
          <div className="hp-flow-step hp-flow-impact">
            <i className="fas fa-bolt"></i><span>Impact</span>
          </div>
        </div>
      </div>
      <div className="hp-divider"></div>

      {/* 4. FLOW SECTIONS */}
      {/* AI LAB */}
      <div className="hp-section hp-split hp-lab">
        <div className="hp-split-left">
          <h2 className="hp-sec-title">AI Lab</h2>
          <p className="hp-sec-desc">
            A digital workbench for testing Agents, RAG pipelines, and generative setups. Bringing research ideas into functional code and deployment-ready architecture.
          </p>
          <div className="hp-inline-links">
            <Link to="/ai-lab">Experiments →</Link>
            <Link to="/ai-lab">Agents →</Link>
            <Link to="/ai-lab">RAG →</Link>
          </div>
        </div>
        <div className="hp-split-right">
          <div className="hp-visual-block hp-visual-lab">
             <div className="hp-visual-glow"></div>
             <div className="hp-visual-line"></div>
             <div className="hp-visual-line short"></div>
             <div className="hp-visual-line"></div>
          </div>
        </div>
      </div>
      <div className="hp-divider"></div>

      {/* RESEARCH */}
      <div className="hp-section hp-split hp-research hp-reverse">
        <div className="hp-split-left">
          <div className="hp-visual-block hp-visual-res">
             <div className="hp-visual-graph">
               <div className="hp-vg-bar h1"></div>
               <div className="hp-vg-bar h2"></div>
               <div className="hp-vg-bar h3"></div>
               <div className="hp-vg-bar h4"></div>
               <div className="hp-vg-bar h5"></div>
             </div>
          </div>
        </div>
        <div className="hp-split-right">
          <h2 className="hp-sec-title">Research</h2>
          <p className="hp-sec-desc">
            Peer-reviewed publications, IEEE journal submissions, and systematic explorations in deep learning and vision transformers.
          </p>
          <div className="hp-timeline-preview">
            <div className="hp-tl-item">
              <span className="hp-tl-year">2024</span>
              <span className="hp-tl-text">Medical Image Classification</span>
            </div>
            <div className="hp-tl-item">
              <span className="hp-tl-year">2023</span>
              <span className="hp-tl-text">Brain Disorder Vision Transformers</span>
            </div>
          </div>
          <Link className="hp-link-arrow" to="/research">View Publications →</Link>
        </div>
      </div>
      <div className="hp-divider"></div>

      {/* 5. FEATURED WORK (Projects) */}
      <div className="hp-section hp-featured">
        <h2 className="hp-sec-title">Featured Work</h2>
        <div className="hp-feat-block">
          <div className="hp-feat-content">
            <h3>Brain Disorder Classification Platform</h3>
            <p>End-to-end multi-modal architecture using state-of-the-art vision transformers to analyze and classify complex neural imaging datasets.</p>
            <div className="hp-feat-tags">
              <span>Transformers</span>
              <span>PyTorch</span>
              <span>Computer Vision</span>
            </div>
            <Link className="hp-link-arrow" to="/projects">View Project Details →</Link>
          </div>
        </div>
      </div>
      <div className="hp-divider"></div>

      {/* 6. RESOURCES (Docs, Datasets, Blogs) - ONE section */}
      <div className="hp-section hp-resources">
         <h2 className="hp-sec-title">Resources</h2>
         <div className="hp-res-list">
           <Link to="/docs" className="hp-res-item">
              <div className="hp-res-text">
                <span className="hp-res-name">Docs</span>
                <span className="hp-res-desc">Curated data science and SQL mastery guides.</span>
              </div>
              <i className="fas fa-arrow-right hp-res-icon"></i>
           </Link>
           <Link to="/datasets" className="hp-res-item">
              <div className="hp-res-text">
                <span className="hp-res-name">Datasets</span>
                <span className="hp-res-desc">Real-world data for ML experiments and tuning.</span>
              </div>
              <i className="fas fa-arrow-right hp-res-icon"></i>
           </Link>
           <Link to="/blogs" className="hp-res-item">
              <div className="hp-res-text">
                <span className="hp-res-name">Blogs</span>
                <span className="hp-res-desc">Deep-dives into AI engineering and insights.</span>
              </div>
              <i className="fas fa-arrow-right hp-res-icon"></i>
           </Link>
         </div>
      </div>

      {/* 7. CTA SECTION */}
      <div className="hp-cta-bottom">
        <div className="hp-cta-glow"></div>
        <h2>Let's build intelligent systems together.</h2>
        <div className="hp-hero-ctas">
          <Link to="/contact" className="btn btn-c hp-hero-btn">Get in Touch</Link>
          <Link to="/services" className="hp-hero-btn-alt">View Work</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
