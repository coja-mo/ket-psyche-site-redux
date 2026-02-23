import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Introduction.css';

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.intro-image-wrapper',
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.intro-container',
                        start: 'top 80%',
                    }
                }
            );

            gsap.fromTo('.intro-content > *',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.intro-container',
                        start: 'top 80%',
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="intro-section" ref={containerRef}>
            <div className="container">
                <div className="section-title">
                    <div className="glow-wrapper mini">
                        <div className="badge badge-clinical">Beyond The Surface</div>
                    </div>
                    <h2 className="gradient-text">A Haven for Seekers</h2>
                </div>

                <div className="intro-container">
                    <div className="intro-content">
                        <div className="intro-text-blocks">
                            <p className="intro-text">
                                Welcome to a sanctuary where traditional models of healing are elevated. Often, the psychiatric system pathologizes our most profound struggles. At Sacred Psyche, we offer a quiet rebellion against mere symptom-management—a space where your inner world is met with deep reverence and clinical rigor.
                            </p>
                            <p className="intro-text">
                                We guide you beyond the surface, blending evidence-based therapies with the soulful art of meaning-making. This is an immersive journey into the somatic and the spiritual, where every treatment plan is meticulously designed to honor the complexity and sacredness of your unique story.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="glow-orb intro-glow"></div>
        </section>
    );
};

export default Introduction;
