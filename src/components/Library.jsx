import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Library.css';

gsap.registerPlugin(ScrollTrigger);

const Library = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.lib-card', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.library-grid',
                    start: 'top 80%',
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const resources = [
        {
            category: "Integration Guide",
            title: "Navigating the Return: Somatic Practices for Post-Session Grounding",
            desc: "Learn how to anchor profound psychedelic insights into your daily rhythm through gentle body-based tracking.",
            readTime: "5 min read",
        },
        {
            category: "Community Story",
            title: "Reclaiming the Nervous System: L's Journey from Freeze to Flow",
            desc: "An anonymized account of moving through complex trauma using functional psychiatry and deep relational support.",
            readTime: "8 min read",
        },
        {
            category: "Educational",
            title: "The Intersection of Mysticism and Modern Science",
            desc: "Understanding how ancient ritual informs cutting-edge somatic and psychedelic-assisted therapies.",
            readTime: "12 min read",
        }
    ];

    return (
        <section id="library" className="library-section" ref={containerRef}>
            <div className="container">
                <div className="library-header">
                    <h2 className="gradient-text">The Library</h2>
                    <p className="library-lead">A curated collection of integration practices, clinical insights, and shared community journeys. Because the work continues outside the room.</p>
                </div>

                <div className="library-grid">
                    {resources.map((res, index) => (
                        <div key={index} className="lib-card glass-panel">
                            <span className="lib-category">{res.category}</span>
                            <h3 className="lib-title">{res.title}</h3>
                            <p className="lib-desc">{res.desc}</p>
                            <div className="lib-footer">
                                <span className="read-time">{res.readTime}</span>
                                <button className="read-more-btn">Read →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle eye motif separator */}
            <div className="library-bottom-motif">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            </div>
        </section>
    );
};

export default Library;
