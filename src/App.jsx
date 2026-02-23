import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Therapies from './components/Therapies';
import About from './components/About';
import Library from './components/Library';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('sp-theme') || 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sp-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <a href="#" className="nav-logo">
            <span style={{ color: 'var(--accent-glow)' }}>✧</span> Sacred Psyche
          </a>

          {/* Desktop Nav */}
          <div className="nav-links nav-links-desktop">
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#therapies" className="nav-link">Therapies</a>
            <a href="#about" className="nav-link">Our Approach</a>
            <a href="#library" className="nav-link">Library</a>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light/dark mode" title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              )}
            </button>
            <button className="nav-cta">Reach Out</button>
          </div>

          {/* Mobile Menu Toggle (Eye Icon) */}
          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg viewBox="0 0 64 32" width="32" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                className="eye-outline"
                d="M32 4C18 4 6 16 2 16s16 12 30 12 28-12 30-12S46 4 32 4z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                className="eye-pupil"
                cx="32"
                cy="16"
                r="6"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <a href="#programs" className="mobile-nav-link" onClick={handleNavClick}>Programs</a>
          <a href="#therapies" className="mobile-nav-link" onClick={handleNavClick}>Therapies</a>
          <a href="#about" className="mobile-nav-link" onClick={handleNavClick}>Our Approach</a>
          <a href="#library" className="mobile-nav-link" onClick={handleNavClick}>Library</a>
          <a href="#contact" className="mobile-nav-link cta" onClick={handleNavClick}>Reach Out</a>
        </div>
        <div className="mobile-nav-footer">
          <span className="mobile-nav-motif">✧</span>
          <p>Sacred Psyche</p>
        </div>
      </div>

      <main style={{ flex: 1 }}>
        <Hero />
        <Programs />
        <Therapies />
        <About />
        <Library />
        <Contact />
      </main>
    </div>
  );
}

export default App;
