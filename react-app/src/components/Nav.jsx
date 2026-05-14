import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const allItems = [
    { id: '', label: 'HOME' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'research', label: 'RESEARCH' },
    { id: 'cortexzen', label: 'CORTEXZEN AI' },
    { id: 'contact', label: 'CONTACT' },
  ];

  function isActive(id) {
    if (id === '') return pathname === '/';
    return pathname === `/${id}`;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav>
        <div className="nav-container">
          <Link className="logo" to="/">
            Valmiki Sarath Kumar
          </Link>

          {/* Desktop + Tablet: horizontal links */}
          <div className="nav-links">
            {allItems.map((item) => (
              <Link
                key={item.id}
                id={`nav-${item.id.replace('#', '')}`}
                className={isActive(item.id) ? 'active' : ''}
                to={`/${item.id}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile: hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            &#8801;
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="mobile-menu-overlay">
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &#10005;
          </button>
          <div className="mobile-menu-links">
            {allItems.map((item, idx) => (
              <div key={item.id} className="mobile-menu-item-wrap">
                <Link
                  className={`mobile-menu-link${isActive(item.id) ? ' active' : ''}`}
                  onClick={closeMenu}
                  to={`/${item.id}`}
                >
                  {item.label}
                </Link>
                {idx < allItems.length - 1 && (
                  <div className="mobile-menu-divider" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
