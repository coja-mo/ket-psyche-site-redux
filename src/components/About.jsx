import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const [activeTab, setActiveTab] = useState('who');

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in the initial section
            gsap.from('.about-intro > *', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.about-intro',
                    start: 'top 75%',
                }
            });

            // Simple fade for content switching
            gsap.fromTo('.tab-content-panel',
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', clearProps: 'all' }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [activeTab]); // Re-run simple animation on tab change

    const renderContent = () => {
        switch (activeTab) {
            case 'who':
                return (
                    <div className="tab-content-panel">
                        <h3 className="gradient-text gradient-accent-cool">Who We Treat</h3>
                        <p className="tab-lead">We welcome those who feel misunderstood by traditional models and are looking for something more integrative, relational, and real.</p>
                        <ul className="about-list">
                            <li>
                                <strong>Complex Trauma & PTSD:</strong> Healing deep emotional dysregulation and relational wounds.
                            </li>
                            <li>
                                <strong>Mood & Anxiety Disorders:</strong> Navigating depression, anxiety, and finding sustained balance.
                            </li>
                            <li>
                                <strong>Neurodivergence:</strong> Exploring ADHD and rejection sensitivity in an affirming space.
                            </li>
                            <li>
                                <strong>Treatment Transitions:</strong> Support for tapering psychiatric medications and navigating life changes.
                            </li>
                        </ul>
                    </div>
                );
            case 'how':
                return (
                    <div className="tab-content-panel">
                        <h3 className="gradient-text gradient-accent-warm">How We Work</h3>
                        <p className="tab-lead">Our approach weaves evidence-based therapy with holistic practices, honoring the intricate relationship between body, psyche, and spirit.</p>
                        <ul className="about-list">
                            <li>
                                <strong>Relational Healing:</strong> Trauma-informed care rooted in deep empathy and safe, attuned connection.
                            </li>
                            <li>
                                <strong>Whole-Person Care:</strong> You are not a diagnosis. We treat the integrated whole.
                            </li>
                            <li>
                                <strong>Functional Psychiatry:</strong> Personalized care including hormonal/genetic testing and nutritional therapy alongside traditional medication management.
                            </li>
                            <li>
                                <strong>Restorative Practices:</strong> Somatic regulation, mindfulness, and sound healing to nurture the nervous system.
                            </li>
                        </ul>
                    </div>
                );
            case 'what':
                return (
                    <div className="tab-content-panel">
                        <h3 className="gradient-text gradient-accent-glow">What We Offer</h3>
                        <p className="tab-lead">A sanctuary for healing offering structured Partial Hospitalization (PHP) and Intensive Outpatient (IOP) programs.</p>
                        <div className="offerings-grid">
                            <div className="offering-badge">Group Therapy</div>
                            <div className="offering-badge">Individual Psychotherapy</div>
                            <div className="offering-badge">Medication Tapering</div>
                            <div className="offering-badge">Somatic & Energy Healing</div>
                            <div className="offering-badge">Psychedelic Integration</div>
                            <div className="offering-badge">Functional Nutrition</div>
                        </div>
                        <p className="mt-2 text-small">Every care plan is thoughtfully tailored to support your unique nervous system, story, and goals.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="about" className="about-section expanded" ref={containerRef}>
            <div className="container">

                {/* Intro Section (Original "Difference" concept) */}
                <div className="about-intro">
                    <div className="glow-wrapper mini">
                        <div className="badge badge-clinical">Clinical Efficacy</div>
                        <span className="plus">+</span>
                        <div className="badge">Grounded Expertise</div>
                    </div>
                    <h2 className="gradient-text">The Sacred Psyche Difference</h2>
                    <p className="about-lead-large">
                        Because healing is sacred. Your psyche is not a problem to be fixed—it’s a story to be honored, integrated, and reclaimed.
                    </p>
                </div>

                {/* Interactive Deep Dive */}
                <div className="about-interactive">
                    <nav className="about-tabs">
                        <button
                            className={`tab-btn ${activeTab === 'who' ? 'active' : ''}`}
                            onClick={() => setActiveTab('who')}
                        >
                            Who We Treat
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'how' ? 'active' : ''}`}
                            onClick={() => setActiveTab('how')}
                        >
                            How We Work
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'what' ? 'active' : ''}`}
                            onClick={() => setActiveTab('what')}
                        >
                            What We Offer
                        </button>
                    </nav>

                    <div className="about-content-area glass-panel">
                        {renderContent()}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
