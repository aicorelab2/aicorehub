import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="hp-footer pt-16 pb-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 items-start">
          {/* Brand Section */}
          <div className="hp-footer-brand space-y-4 max-w-xs text-left">
            <Link to="/" className="text-lg font-semibold text-green-400 block no-underline">
              Valmiki Sarath Kumar
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Junior Data Scientist specializing in Generative AI, RAG systems, and machine learning.
              Focused on building scalable AI solutions, intelligent agents, and production-ready data systems.
            </p>
          </div>

          {/* Navigation */}
          <div className="hp-footer-links space-y-3 text-left">
            <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-3">
              <Link to="/projects" className="text-gray-400 hover:text-green-400 transition duration-300 no-underline">Projects</Link>
              <Link to="/research" className="text-gray-400 hover:text-green-400 transition duration-300 no-underline">Research</Link>
              <Link to="/cortexzen" className="text-gray-400 hover:text-green-400 transition duration-300 no-underline">CortexZen AI</Link>
              <Link to="/contact" className="text-gray-400 hover:text-green-400 transition duration-300 no-underline">Contact</Link>
            </div>
          </div>

          {/* Connect */}
          <div className="hp-footer-social space-y-3 text-left">
            <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-4">Connect</h4>
            <div className="flex items-center gap-4 mt-3">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" className="text-gray-400 hover:text-green-400 transition duration-300 text-lg"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub" className="text-gray-400 hover:text-green-400 transition duration-300 text-lg"><i className="fab fa-github"></i></a>
              <a href="#" title="Portfolio" className="text-gray-400 hover:text-green-400 transition duration-300 text-lg"><i className="fas fa-briefcase"></i></a>
              <a href="mailto:aicorelab2@gmail.com" title="Email" className="text-gray-400 hover:text-green-400 transition duration-300 text-lg"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 pt-8 border-t border-gray-800 text-xs text-gray-500">
          © 2026 Valmiki Sarath Kumar | Built with precision and code.
        </div>
      </div>
    </footer>
  );
}


