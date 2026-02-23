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
                <div className="hero-badge">Clinical Depth. Holistic Insight.</div>

                <h1 className="hero-title">
                    <div className="hero-title-line gradient-text">Profound Care.</div>
                    <div className="hero-title-line">Transformative Path.</div>
                </h1>

                <p className="hero-subtitle">
                    Sacred Psyche balances evidence-based clinical structure with intentional healing practices.
                    A space for authentic, sustainable growth.
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
