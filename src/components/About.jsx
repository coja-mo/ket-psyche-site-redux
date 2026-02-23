import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './About.css';

const About = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-content > *', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="about-section" ref={containerRef}>
            <div className="container about-container">
                <div className="about-visual glow-wrapper">
                    {/* Abstract representation of the 'Lived Experience' */}
                    <div className="glass-panel about-image-placeholder">
                        <div className="inner-glow"></div>
                        <div className="text-overlay">
                            <span className="badge">Lived Experience</span>
                            <span className="badge badge-clinical">Clinical Efficacy</span>
                        </div>
                    </div>
                </div>

                <div className="about-content">
                    <h2 className="gradient-text gradient-accent-cool">The Sacred Psyche Difference</h2>
                    <p className="about-lead">
                        We don't just understand the clinical protocols; we know the territory.
                    </p>
                    <div className="about-text-blocks">
                        <p>
                            Sacred Psyche was founded on a delicate balance: rigorous, evidence-based psychiatric care
                            combined with the profound, empathetic understanding that only comes from deep lived experience.
                        </p>
                        <p>
                            Many practices lean too far into clinical sterility, making you feel like a patient rather than a person.
                            Others lean too heavily into unstructured spiritual concepts, lacking the safety and rigor necessary for sustainable healing.
                            We bridge that gap. We offer the structure of a premier medical clinic and the heart of a grounded,
                            community-centered healing space.
                        </p>
                    </div>
                    <button className="btn-secondary mt-2">Hear Our Story</button>
                </div>
            </div>
        </section>
    );
};

export default About;
