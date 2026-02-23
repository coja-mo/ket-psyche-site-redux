import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Basic GSAP animation for the hero content
        const ctx = gsap.context(() => {
            gsap.from('.hero-badge', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });

            gsap.from('.hero-title-line', {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2
            });

            gsap.from('.hero-subtitle', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.6
            });

            gsap.from('.hero-cta', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.8
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero-section" ref={containerRef}>
            {/* Background glow elements */}
            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>

            <div className="container hero-container">
                <div className="hero-eye-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                </div>

                <div className="hero-badge">Storytelling. Myth-Making. Soul-Tending.</div>

                <h1 className="hero-title">
                    <div className="hero-title-line gradient-text">A Place Beyond</div>
                    <div className="hero-title-line">The Surface.</div>
                </h1>

                <p className="hero-subtitle">
                    Sacred Psyche honors the wisdom of both ancient ritual and modern science. We offer a haven for seekers—a space where your narrative is not pathologized, but sacredly witnessed.
                </p>

                <div className="hero-cta-group hero-cta">
                    <button className="btn-primary subtle-glow">Explore Programs</button>
                    <button className="btn-secondary">Meet The Founder</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
