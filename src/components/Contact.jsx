import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Contact.css';

const Contact = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-box', {
                scale: 0.95,
                opacity: 0,
                duration: 0.8,
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
        <section className="contact-section" ref={containerRef}>
            <div className="container">
                <div className="contact-box glass-panel subtle-glow">
                    <div className="contact-content">
                        <h2 className="gradient-text gradient-accent-warm">Ready to Transform?</h2>
                        <p>
                            Whether you need intensive stabilization or flexible support, we're here to help you navigate
                            the path forward. Let's find the right structure for your healing.
                        </p>
                        <div className="contact-actions">
                            <button className="btn-primary">Schedule a Consultation</button>
                            <div className="contact-info">
                                <span>Call Us:</span>
                                <a href="tel:617-419-0011" className="phone-link">(617) 419-0011</a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-decoration">
                        <div className="glow-orb"></div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-logo">
                        <span style={{ color: 'var(--accent-glow)' }}>✧</span> Sacred Psyche
                    </div>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Client Portal</a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
