import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import introImage from '../assets/intro_silhouettes.png';
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
            <div className="intro-container">

                <div className="intro-image-wrapper">
                    <img src={introImage} alt="Ethereal glowing silhouettes representing the psyche" className="intro-image" />
                </div>

                <div className="intro-content">
                    <p className="intro-text">
                        At Sacred Psyche, we invite you to step into a world where the mind is not just understood — it is revered. This is a haven for seekers, a quiet rebellion against the noise of the everyday. Here, we explore the untold depths of the psyche with intention, beauty, and care.
                    </p>
                    <p className="intro-text">
                        We offer an experience that moves beyond traditional therapy — an immersive journey into the symbolic, the spiritual, and the unseen. Each session, each space, each story we hold is designed to reflect the sacredness of the human experience.
                    </p>
                    <Link to="/#programs" className="intro-btn">View Details</Link>
                </div>

            </div>
        </section>
    );
};

export default Introduction;
