import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../experience-linear.css';

export default function WorkExperiencePage() {
  return (
    <div className="exp-page" id="page-experience">
      <div className="exp-container">

        {/* HERO SECTION */}
        <section className="exp-hero">
          <h1>Sarath Kumar</h1>
          <h2>AI Engineer & Junior Data Scientist</h2>
          <p>
            Architecting end-to-end AI systems, scalable RAG pipelines, and intelligent enterprise automation. Focused on building robust, production-ready solutions using LangGraph, Vector Databases, and Full-Stack integrations.
          </p>
          <div className="exp-hero-btns">
            <a href="#experience" className="exp-btn-primary">
              <i className="fas fa-arrow-down"></i> View Experience
            </a>
            <Link to="/contact" className="exp-btn-secondary">
              <i className="fas fa-envelope"></i> Contact Me
            </Link>
          </div>
        </section>

        <section id="experience">
          <h3 className="exp-section-title">
            <i className="fas fa-briefcase" style={{ color: 'var(--cyan)' }}></i> Experience
          </h3>

          {/* ROLE: JUNIOR DATA SCIENTIST */}
          <div className="exp-role-card">
            <div className="exp-role-header">
              <div>
                <h2 className="exp-role-title">Junior Data Scientist</h2>
                <div className="exp-role-company">Document-IT, Bangalore</div>
              </div>
              <div className="exp-role-date">Nov 2024 — Present</div>
            </div>

            <ul className="exp-list">
              <li>
                <strong>Architected Production RAG & Agentic Systems:</strong> Designed end-to-end pipelines (LangGraph, LangChain, Vector DBs) leveraging advanced NLP and Chain-of-Thought reasoning to improve classification accuracy by ~30% and drastically reduce hallucinations.
              </li>
              <li>
                <strong>Engineered Scalable Data Pipelines:</strong> Built high-throughput web scraping architectures (Playwright, Scrapy) and custom JSON chunking strategies to bypass LLM context limits and process massive, unstructured enterprise datasets.
              </li>
              <li>
                <strong>Delivered Full-Stack AI Solutions:</strong> Deployed intelligent, role-aware enterprise assistants via FastAPI and Streamlit, seamlessly orchestrating complex REST/SOAP APIs to automate critical manual workflows.
              </li>
            </ul>

            <div className="exp-projects-header">
              <i className="fas fa-layer-group"></i> Featured Projects & Contributions
            </div>

            {/* PROJECT 01: AIBER */}
            <div className="exp-project">
              <h3 className="exp-project-title">AIBER | Pharmaceutical Intelligence Database</h3>
              <div className="exp-project-subtitle">End-to-End Automated Data Pipeline Extracting and Categorizing Intelligence</div>

              <div className="exp-pills">
                {['Playwright', 'Selenium', 'RAG', 'Vector Embeddings', 'NLP Filtering', 'LLM'].map(t => (
                  <span key={t} className="exp-pill">{t}</span>
                ))}
              </div>

              <div className="exp-metrics">
                <div className="exp-metric-card">
                  <div className="exp-metric-val">60-70%</div>
                  <div className="exp-metric-label">Manual Processing Reduced</div>
                </div>
                <div className="exp-metric-card">
                  <div className="exp-metric-val">10-15</div>
                  <div className="exp-metric-label">Chunking Strategies Tested</div>
                </div>
              </div>

              <div className="exp-grid-2" style={{ marginTop: '2rem' }}>
                <div className="exp-col">
                  <h4><i className="fas fa-crosshairs" style={{ color: 'var(--cyan)' }}></i> Situation</h4>
                  <p>The organization needed to build a structured intelligence database for pharmaceutical companies by extracting business info from thousands of noisy websites, making manual collection infeasible.</p>
                </div>
                <div className="exp-col">
                  <h4><i className="fas fa-bullseye" style={{ color: 'var(--cyan)' }}></i> Task</h4>
                  <p>Design and deliver an automated data pipeline—from web scraping through intelligent categorization—that extracts, cleans, and categorizes content accurately.</p>
                </div>
              </div>

              <div className="exp-arch">
                <div className="exp-arch-header">
                  <i className="fas fa-rocket"></i> Pipeline Architecture
                </div>
                <div className="exp-arch-grid">
                  <div className="exp-arch-col">
                    <div className="exp-arch-col-title">Web Scraping</div>
                    <div className="exp-arch-col-body">• Playwright<br />• Selenium<br />• BeautifulSoup<br />• Scrapy</div>
                  </div>
                  <div className="exp-arch-col">
                    <div className="exp-arch-col-title">Preprocessing</div>
                    <div className="exp-arch-col-body">• Noise Removal<br />• Data Cleaning<br />• Normalization</div>
                  </div>
                  <div className="exp-arch-col">
                    <div className="exp-arch-col-title">NLP Filter Layer</div>
                    <div className="exp-arch-col-body">• Link Filtering<br />• Business Relevance<br />• Page Reduction</div>
                  </div>
                  <div className="exp-arch-col">
                    <div className="exp-arch-col-title">RAG Pipeline</div>
                    <div className="exp-arch-col-body">• Chunking<br />• Embeddings<br />• Vector Search</div>
                  </div>
                  <div className="exp-arch-col">
                    <div className="exp-arch-col-title">Categorization</div>
                    <div className="exp-arch-col-body">• LLM Output<br />• Business Categories<br />• Structured DB</div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT 02: SYNTRA */}
            <div className="exp-project">
              <h3 className="exp-project-title">SYNTRA | Role-Based AI Chatbot for Manufacturing</h3>
              <div className="exp-project-subtitle">Orchestrating Manufacturing and Delivery Workflows via Conversational AI</div>

              <div className="exp-pills">
                {['LangGraph', 'LangChain', 'RAG', 'Intent ID', 'RBAC Auth', 'FastAPI'].map(t => (
                  <span key={t} className="exp-pill">{t}</span>
                ))}
              </div>

              <div className="exp-grid-2">
                <div className="exp-col">
                  <h4><i className="fas fa-star" style={{ color: 'var(--cyan)' }}></i> Challenge</h4>
                  <p>SYNTRA's manufacturing-to-delivery management platform suffered from high operational overhead. The goal was to build an intelligent, role-aware chatbot (CEO, Manager, Worker) to automate operations securely.</p>
                </div>
                <div className="exp-col">
                  <h4><i className="fas fa-exchange-alt" style={{ color: 'var(--cyan)' }}></i> Tech Migration</h4>
                  <p>Migrated from <strong>LangChain Agents</strong> to <strong>LangGraph</strong> to achieve better, more stable orchestration across 100+ APIs managing multi-category manufacturing workflows.</p>
                </div>
              </div>

              <div className="exp-arch">
                <div className="exp-arch-header">
                  <i className="fas fa-project-diagram"></i> System Architecture
                </div>
                <div className="exp-arch-flow">
                  <div className="exp-arch-box">
                    <div className="exp-arch-box-title">USER ROLES</div>
                    <div className="exp-arch-box-body">CEO Level<br />Manager Level<br />Worker Level<br />(RBAC Auth)</div>
                  </div>
                  <i className="fas fa-arrow-right exp-arch-arrow"></i>
                  <div className="exp-arch-box">
                    <div className="exp-arch-box-title">AI CHATBOT</div>
                    <div className="exp-arch-box-body">Intent ID<br />Confirmation Engine<br />File Upload Support<br />Chat History</div>
                  </div>
                  <i className="fas fa-arrow-right exp-arch-arrow"></i>
                  <div className="exp-arch-box">
                    <div className="exp-arch-box-title">LANGGRAPH</div>
                    <div className="exp-arch-box-body">Graph Orchestration<br />RAG Pipeline<br />Tool Assignment<br />100+ APIs Managed</div>
                  </div>
                  <i className="fas fa-arrow-right exp-arch-arrow"></i>
                  <div className="exp-arch-box">
                    <div className="exp-arch-box-title">PLATFORM APIs</div>
                    <div className="exp-arch-box-body">Manufacturing<br />Delivery Tracking<br />Inventory Mgmt<br />Order Processing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT 03: SKILL GAP */}
            <div className="exp-project">
              <h3 className="exp-project-title">Skill Gap Analysis & Training Automation</h3>
              <div className="exp-project-subtitle">End-to-End Platform Integrating Workday and Coursera via Semantic Search</div>

              <div className="exp-pills">
                {['FastAPI', 'SOAP', 'Coursera Scraping', 'Embeddings', 'Semantic Ranking'].map(t => (
                  <span key={t} className="exp-pill">{t}</span>
                ))}
              </div>

              <div className="exp-grid-2">
                <div className="exp-col">
                  <h4><i className="fas fa-bullseye" style={{ color: 'var(--cyan)' }}></i> Objective</h4>
                  <p>The manual process of identifying employee skill gaps, assigning courses, and tracking learning progress was slow. Built an automated platform integrating Workday and Coursera with semantic course matching.</p>
                </div>
                <div className="exp-col">
                  <h4><i className="fas fa-chart-line" style={{ color: 'var(--cyan)' }}></i> Benchmarked Against</h4>
                  <div className="exp-pills" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                    {['Degreed', 'SAP SuccessFactors', 'Viva Learning', 'Lightcast', 'Workday'].map(c => (
                      <span key={c} className="exp-pill" style={{ background: 'transparent' }}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="exp-arch">
                <div className="exp-arch-header">
                  <i className="fas fa-sitemap"></i> End-to-End Platform Flow
                </div>
                <div className="exp-arch-grid">
                  <div className="exp-arch-col">
                    <div className="exp-arch-col-title">Employee Profile</div>
                    <div className="exp-arch-col-body">• Workday API<br />• FastAPI + SOAP<br />• Existing Skills</div>
                  </div>
                  <div className="exp-arch-col">
                    <div className="exp-arch-col-title">Skill Gap Engine</div>
                    <div className="exp-arch-col-body">• Required Skills<br />• vs Existing Skills<br />• Gap Mapping</div>
                  </div>
                  <div className="exp-arch-col">
                    <div className="exp-arch-col-title">Course Recommender</div>
                    <div className="exp-arch-col-body">• Coursera Scraping<br />• Embeddings<br />• Semantic Ranking</div>
                  </div>
                  <div className="exp-arch-col">
                    <div className="exp-arch-col-title">Dashboards & Chat</div>
                    <div className="exp-arch-col-body">• Individual Dashboards<br />• HR Admin Panel<br />• AI Chatbot</div>
                  </div>
                </div>
              </div>
            </div>

            {/* OPTIMIZATIONS */}
            <div className="exp-project" style={{ borderColor: 'rgba(34, 197, 94, 0.2)', background: 'rgba(34, 197, 94, 0.02)' }}>
              <h3 className="exp-project-title" style={{ color: 'var(--cyan)' }}>JSON Chunking & LLM Cost Optimization</h3>
              <div className="exp-project-subtitle" style={{ marginBottom: '1rem' }}>Architectural improvements preventing context window overflow and API cost bloat.</div>

              <div className="exp-grid-2" style={{ marginBottom: 0 }}>
                <div className="exp-col">
                  <h4 style={{ color: '#ef4444' }}><i className="fas fa-times-circle"></i> The Problem</h4>
                  <p style={{ fontSize: '0.85rem' }}>Processing 2,000+ lines of JSON per employee sent every query caused massive context window overflow, token overload, high hallucination rates, and excessive API costs.</p>
                </div>
                <div className="exp-col">
                  <h4 style={{ color: 'var(--cyan)' }}><i className="fas fa-check-circle"></i> The Solution</h4>
                  <p style={{ fontSize: '0.85rem' }}>Implemented a custom JSON Chunking Strategy for nested structures, combined with query-aware selective retrieval and LLM Agent Tool Assignment to minimize token feeds.</p>
                </div>
              </div>

              <div className="exp-metrics" style={{ marginTop: '1.5rem' }}>
                <div className="exp-metric-card" style={{ borderColor: 'rgba(34, 197, 94, 0.15)' }}>
                  <div className="exp-metric-val">↓ 70%</div>
                  <div className="exp-metric-label">Token Usage</div>
                </div>
                <div className="exp-metric-card" style={{ borderColor: 'rgba(34, 197, 94, 0.15)' }}>
                  <div className="exp-metric-val">↓ 60%</div>
                  <div className="exp-metric-label">Hallucinations</div>
                </div>
              </div>
            </div>

            {/* ADDITIONAL TECH */}
            <div className="exp-projects-header" style={{ marginTop: '3rem' }}>
              <i className="fas fa-code"></i> Technical Expertise
            </div>

            <div className="exp-tech-grid">
              <div className="exp-tech-item">
                <div className="exp-tech-item-title"><i className="fas fa-database" style={{ color: 'var(--cyan)' }}></i> MongoDB</div>
                <div className="exp-tech-item-desc">Data modeling, storage, and retrieval for large-scale AI pipelines handling high-volume unstructured data.</div>
              </div>
              <div className="exp-tech-item">
                <div className="exp-tech-item-title"><i className="fas fa-language" style={{ color: 'var(--cyan)' }}></i> NL-TO-SQL</div>
                <div className="exp-tech-item-desc">Natural language to SQL query generation enabling non-technical users to extract data insights.</div>
              </div>
              <div className="exp-tech-item">
                <div className="exp-tech-item-title"><i className="fas fa-laptop-code" style={{ color: 'var(--cyan)' }}></i> Python Code Gen</div>
                <div className="exp-tech-item-desc">LLM-based Python code generation for automated, on-demand code outputs within AI platforms.</div>
              </div>
              <div className="exp-tech-item">
                <div className="exp-tech-item-title"><i className="fas fa-code-branch" style={{ color: 'var(--cyan)' }}></i> CI/CD & Git</div>
                <div className="exp-tech-item-desc">Version control, automated build pipelines, and continuous deployment workflows.</div>
              </div>
            </div>
          </div>

          {/* ROLE: DATA ANALYST INTERN */}
          <div className="exp-role-card">
            <div className="exp-role-header">
              <div>
                <h2 className="exp-role-title">Data Analyst Intern</h2>
                <div className="exp-role-company">TEMS Tech Solutions, Bangalore</div>
              </div>
              <div className="exp-role-date">Aug 2024 — Oct 2024</div>
            </div>

            <ul className="exp-list" style={{ marginBottom: 0 }}>
              <li>
                <strong>Exploratory Data Analysis:</strong> Conducted comprehensive EDA using Python and Power BI across 3+ departments, surfacing key trends and KPIs that directly informed business decisions.
              </li>
              <li>
                <strong>Interactive Dashboards:</strong> Designed and delivered self-serve analytics dashboards for non-technical teams, reducing stakeholder reporting turnaround by ~25%.
              </li>
              <li>
                <strong>Workflow Automation:</strong> Automated repetitive reporting workflows using custom Python scripts, saving several hours of manual effort per week.
              </li>
            </ul>
          </div>

        </section>
      </div>
      <Footer />
    </div>
  );
}
