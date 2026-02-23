import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Programs from './components/Programs';
import About from './components/About';
import Library from './components/Library';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <a href="#" className="nav-logo">
            <span style={{ color: 'var(--accent-glow)' }}>✧</span> Sacred Psyche
          </a>
          <div className="nav-links">
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#about" className="nav-link">Our Approach</a>
            <a href="#library" className="nav-link">Library</a>
            <button className="nav-cta">Reach Out</button>
          </div>
        </div>
      </nav>

      <main style={{ flex: 1 }}>
        <Hero />
        <Programs />
        <About />
        <Library />
        <Contact />
      </main>
    </div>
  );
}

export default App;
