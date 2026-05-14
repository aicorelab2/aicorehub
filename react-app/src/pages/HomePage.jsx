import { useNavigate, Link } from 'react-router-dom';
import useTypingEffect from '../hooks/useTypingEffect';
import Footer from '../components/Footer';

export default function HomePage() {
  const typedText = useTypingEffect([
    "RAG Systems • AI Agents • LLM Applications",
    "Data Pipelines • Neural Networks • Scalable AI",
    "Business Intelligence • Predictive Analytics"
  ]);

  return (
    <div className="page active" id="page-home">
      {/* 1. HERO SECTION */}
      <div className="hp-hero">
        <div className="hp-hero-glow"></div>
        <div className="hp-hero-split">
          <div className="hp-hero-left">
            <h1 className="hp-hero-title">
              <span className="grad">Valmiki Sarath<br />Kumar</span>
            </h1>

            <div className="hp-hero-badges">
              <div className="hp-hero-badge">Junior Data Scientist @ Document IT LLC</div>
              <div className="hp-hero-badge">Member of Cortexzenai.com</div>
            </div>

            <p className="hp-hero-headline">
              Junior Data Scientist building production-ready AI systems using GenAI, RAG, and Machine Learning.
            </p>

            <p className="hp-hero-subtext">
              Currently developing scalable AI pipelines, intelligent agents, and real-world data solutions.
            </p>

            <div className="hp-hero-tag">
              <span id="typing-text">{typedText}</span>
              <span className="cursor"></span>
            </div>
            <div className="hp-hero-ctas">
              <Link to="/projects" className="btn btn-c hp-hero-btn transition-all hover-scale">View Projects</Link>
              <Link to="/contact" className="hp-hero-btn-alt transition-all hover-scale">Contact Me</Link>
            </div>
          </div>
          <div className="hp-hero-right">
            <div className="hp-profile-container relative group !w-72 !h-72 !rounded-3xl border-2 border-green-500/30 bg-[#061413] shadow-2xl overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative w-full h-full p-3">
                <img
                  src="/profile.jpg"
                  alt="Valmiki Sarath Kumar"
                  className="w-full h-full object-cover object-[50%_35%] rounded-2xl shadow-inner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. AI ENGINEERING DOMAINS SECTION (What you work on) */}
      <div className="hp-section hp-minimal-section mt-24 mx-auto max-w-4xl">
        <h2 className="hp-sec-title">AI ENGINEERING DOMAINS</h2>
        <div className="hp-minimal-list flex flex-col gap-3 max-w-2xl">
          <div className="hp-minimal-item">Generative AI Systems</div>
          <div className="hp-minimal-item">Intelligent AI Agents</div>
          <div className="hp-minimal-item">RAG & Knowledge Systems</div>
        </div>
        <Link to="/projects" className="hp-minimal-cta block">
          View All Domains →
        </Link>
      </div>

      <div className="hp-divider"></div>

      {/* 3. HOW I BUILD & DEPLOY AI SYSTEMS (How you work - process) */}
      <div className="hp-section hp-workflow-section mt-24 text-center">
        <h2 className="hp-sec-title">HOW I BUILD & DEPLOY AI SYSTEMS</h2>
        <p className="hp-workflow-subtitle">From raw data to production-ready intelligence</p>

        <div className="hp-workflow-container mt-12">
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
      </div>

      <div className="hp-divider"></div>

      {/* 4. AI PROJECTS & CASE STUDIES SECTION (Proof of work - Preview Only) */}
      <div className="hp-section hp-minimal-section mt-24 mx-auto max-w-4xl">
        <h2 className="hp-sec-title">AI PROJECTS & CASE STUDIES</h2>
        <div className="hp-minimal-list flex flex-col gap-3 max-w-2xl">
          <Link to="/projects" className="hp-minimal-project-item">
            <span>Brain Tumor Image Classification</span>
            <span className="arrow">→</span>
          </Link>
          <Link to="/projects" className="hp-minimal-project-item">
            <span>Cancer Classification System</span>
            <span className="arrow">→</span>
          </Link>
          <Link to="/projects" className="hp-minimal-project-item">
            <span>Cardiovascular Risk Prediction</span>
            <span className="arrow">→</span>
          </Link>
          <Link to="/projects" className="hp-minimal-project-item">
            <span>NLP Sentiment Analysis System</span>
            <span className="arrow">→</span>
          </Link>
        </div>
        <Link to="/projects" className="hp-minimal-cta block">
          View All Projects →
        </Link>
      </div>

      {/* 5. CORTEXZEN AI PREVIEW (Credibility + Ecosystem) */}
      <div className="hp-section hp-minimal-section mt-24 mx-auto max-w-4xl">
        <div className="text-xs text-green-400 mb-2 uppercase tracking-widest font-semibold">Member of CortexZenAI</div>
        <h2 className="hp-sec-title">CORTEXZEN AI</h2>
        <p className="text-gray-400 mb-6 max-w-2xl leading-relaxed">
          An AI learning and innovation community focused on building real-world AI systems and accelerating AI careers.
        </p>

        <div className="max-w-3xl space-y-3">
          {[
            'Structured AI learning paths covering ML, DL, and Generative AI',
            'Hands-on projects focused on real-world AI system development',
            'Mentorship, technical training, and guided learning for students',
            'Collaborative community for building and scaling AI solutions'
          ].map((bullet) => (
            <div key={bullet} className="flex items-start gap-3 text-gray-300 leading-relaxed">
              <span className="text-green-400 mt-1">•</span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        <Link to="/cortexzen" className="hp-minimal-cta block mt-6">
          Explore CortexZenAI →
        </Link>
      </div>

      <div className="hp-divider"></div>

      {/* 6. RESEARCH PREVIEW (Refined Visualization) */}
      <div className="hp-section border-t border-gray-800 pt-16 mt-24 mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Context */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/5 text-green-400 text-[10px] px-3 py-1.5 rounded-full border border-green-500/10 uppercase tracking-[0.2em] font-bold mb-6">
                <i className="fas fa-microscope text-[8px]"></i>
                Research & Publications
              </div>
              <h2 className="hp-sec-title !text-left !mb-4 leading-tight">ACADEMIC<br /><span className="text-green-400">CONTRIBUTIONS</span></h2>
              <div className="w-20 h-1 bg-green-500/20 rounded-full mb-8"></div>
            </div>

            <p className="max-w-md text-gray-400 leading-relaxed text-lg">
              I contribute to the AI community through <span className="text-white font-semibold">peer-reviewed IEEE publications</span> and provide structured guidance for academic research and technical documentation.
            </p>

            <div className="pt-4 space-y-4">
              <Link to="/research" className="group text-green-400 font-bold inline-flex items-center gap-3 text-lg transition-all hover:gap-5">
                View Research Portfolio
                <span className="w-8 h-8 rounded-full border border-green-500/30 flex items-center justify-center group-hover:bg-green-500 group-hover:text-black transition-all">
                  <i className="fas fa-arrow-right text-xs"></i>
                </span>
              </Link>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                Interactive demo available in Research section
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas (Premium Card) */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl border border-gray-800 bg-[#061413]/80 backdrop-blur-sm shadow-2xl border-l-4 border-l-green-500/50">
              <div className="space-y-6">
                {[
                  { icon: 'fa-pen-nib', text: 'Guidance on writing high-quality research papers for journals' },
                  { icon: 'fa-shield-alt', text: 'Support in reducing plagiarism and technical documentation' },
                  { icon: 'fa-layer-group', text: 'Assistance with structuring and formatting manuscripts' },
                  { icon: 'fa-chalkboard-teacher', text: 'Step-by-step support via CortexZenAI ecosystem' }
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-5 group/item">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-xl bg-gray-900 border border-gray-800 text-green-400 group-hover/item:border-green-500/30 group-hover/item:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all">
                      <i className={`fas ${item.icon} text-sm`}></i>
                    </div>
                    <div className="pt-1">
                      <span className="text-gray-300 leading-relaxed text-[15px] group-hover/item:text-white transition-colors">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-800/50 flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-500">
                <span>IEEE Publications</span>
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span>Technical Writing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hp-divider"></div>

      {/* 6. CTA SECTION (Collaboration) */}
      <div className="hp-cta-bottom mt-24 text-center">
        <div className="hp-cta-glow"></div>
        <h2 className="hp-sec-title">LET’S COLLABORATE</h2>
        <p className="hp-cta-text mb-8">Ready to build something impactful or discuss research opportunities?</p>
        <div className="hp-hero-ctas mt-6 flex justify-center">
          <Link to="/contact" className="btn btn-c hp-hero-btn px-10 py-4 transition-all hover-scale">Get In Touch</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

