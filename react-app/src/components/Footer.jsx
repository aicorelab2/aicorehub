import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="hp-footer">
      <div className="hp-footer-content">
        <div className="hp-footer-brand">
          <Link to="/" className="logo">aicore.lab</Link>
          <p>Data. Models. Intelligence. Systems. Building intelligent generative systems and robust data pipelines for tomorrow's research.</p>
        </div>
        
        <div className="hp-footer-links">
          <h4>Navigation</h4>
          <Link to="/ai-lab">AI Lab</Link>
          <Link to="/research">Research</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
        </div>

        <div className="hp-footer-links">
          <h4>Resources</h4>
          <Link to="/docs">Docs</Link>
          <Link to="/datasets">Datasets</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="hp-footer-social">
          <h4>Connect</h4>
          <div className="hp-footer-social-icons">
            <a href="#" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://instagram.com/aicore.lab" target="_blank" rel="noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="mailto:aicorelab2@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
      
      <div className="hp-footer-bottom">
        &copy; {new Date().getFullYear()} aicore.lab &nbsp;|&nbsp; Built with precision and code.
      </div>
    </footer>
  );
}
