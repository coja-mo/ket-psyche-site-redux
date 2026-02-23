import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Programs.css';

const Programs = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.program-card', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="programs" className="programs-section" ref={containerRef}>
            <div className="container">
                <div className="programs-header">
                    <h2 className="gradient-text gradient-accent-warm">Paths to Healing</h2>
                    <p className="programs-subtitle">Comprehensive care structures tailored to the depth of your journey.</p>
                </div>

                <div className="programs-grid">
                    {/* Full Day Treatment */}
                    <div className="program-card glass-panel subtle-glow">
                        <div className="card-indicator indicator-intensive"></div>
                        <h3>Full Day Treatment</h3>
                        <p className="card-summary">
                            Immersive, intensive stabilization and care. An environment combining evidence-based clinical therapy with intentional holistic practices.
                        </p>
                        <ul className="card-details">
                            <li>5-6 days per week</li>
                            <li>Somatic & group therapy</li>
                            <li>High-touch support system</li>
                        </ul>
                        <button className="btn-link">Learn More →</button>
                    </div>

                    {/* Partial Day Treatment */}
                    <div className="program-card glass-panel subtle-glow">
                        <div className="card-indicator indicator-steady"></div>
                        <h3>Partial Day Treatment</h3>
                        <p className="card-summary">
                            Structured integration and continued growth. Ideal for maintaining daily responsibilities while actively doing deep healing work.
                        </p>
                        <ul className="card-details">
                            <li>3-5 days per week</li>
                            <li>Tools for ongoing recovery</li>
                            <li>Emotional integration space</li>
                        </ul>
                        <button className="btn-link">Learn More →</button>
                    </div>

                    {/* Outpatient Day Treatment */}
                    <div className="program-card glass-panel subtle-glow">
                        <div className="card-indicator indicator-flexible"></div>
                        <h3>Outpatient Treatment</h3>
                        <p className="card-summary">
                            Flexible, ongoing support woven into daily life. Consistent connection to healing rhythms tailored to your specific schedule.
                        </p>
                        <ul className="card-details">
                            <li>1-2 days per week</li>
                            <li>Sustains long-term progress</li>
                            <li>Support during life transitions</li>
                        </ul>
                        <button className="btn-link">Learn More →</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
