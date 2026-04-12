import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import { ProjectsPage, DatasetsPage, AiLabPage, DocsPage, BlogsPage, ResearchPage } from './pages/ContentPages';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash === '#about' && pathname === '/') {
      setTimeout(() => {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/datasets" element={<DatasetsPage />} />
        <Route path="/ai-lab" element={<AiLabPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/research" element={<ResearchPage />} />
      </Routes>
    </>
  );
}
