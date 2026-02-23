import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const insuranceLogos = [
    { name: 'Aetna', src: '/assets/insurance/aetna-300x120.png' },
    { name: 'Anthem', src: '/assets/insurance/anthem-300x120.png' },
    { name: 'BlueCross BlueShield', src: '/assets/insurance/bcbs-300x120.png' },
    { name: 'Beacon Health', src: '/assets/insurance/beacon-300x120.png' },
    { name: 'Cigna', src: '/assets/insurance/cigna-300x120.png' },
    { name: 'ComPsych', src: '/assets/insurance/compsych-300x120.png' },
    { name: 'Harvard Pilgrim', src: '/assets/insurance/harvard-pilgrim-300x120.png' },
    { name: 'Highmark', src: '/assets/insurance/highmark-300x120.png' },
    { name: 'Magellan Health', src: '/assets/insurance/magellan-300x120.png' },
    { name: 'Meritain Health', src: '/assets/insurance/meritain-300x120.png' },
    { name: 'MultiPlan', src: '/assets/insurance/multiplan-300x120.png' },
    { name: 'UMR', src: '/assets/insurance/UMR-300x120.png' }
];

const Contact = () => {
    const containerRef = useRef(null);
    const [formStatus, setFormStatus] = useState('idle');
    const [insuranceStatus, setInsuranceStatus] = useState('idle');

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-box', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.contact-section',
                    start: 'top 80%',
                }
            });

            gsap.from('.map-container', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.contact-section',
                    start: 'top 60%',
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => setFormStatus('success'), 1500);
    };

    const handleInsuranceSubmit = (e) => {
        e.preventDefault();
        setInsuranceStatus('submitting');
        setTimeout(() => setInsuranceStatus('success'), 1500);
    };

    return (
        <section id="contact" className="contact-section" ref={containerRef}>
            <div className="container">
                <div className="contact-wrapper">
                    {/* Contact Info & Form */}
                    <div className="contact-box glass-panel subtle-glow">
                        <div className="contact-info-side">
                            <h2 className="gradient-text gradient-accent-warm">Ready to Transform?</h2>
                            <p className="contact-lead">
                                Whether you need intensive stabilization or flexible support, we're here to hold space for your healing journey. Reach out to schedule a consultation.
                            </p>

                            <div className="contact-details">
                                <div className="detail-item">
                                    <span className="detail-label">Call Us</span>
                                    <a href="tel:617-419-0011" className="detail-value phone-link">(617) 419-0011</a>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Location</span>
                                    <span className="detail-value">60 Leo M Birmingham Parkway<br />Suite 102<br />Brighton, MA</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-side">
                            {formStatus === 'success' ? (
                                <div className="form-success">
                                    <h3 className="gradient-text gradient-accent-cool">Message Received</h3>
                                    <p>Thank you for reaching out. A member of our care team will connect with you shortly.</p>
                                    <button className="btn-secondary" onClick={() => setFormStatus('idle')}>Send Another Message</button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <div className="input-wrap">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" id="name" required placeholder="Your full name" />
                                        </div>
                                        <div className="input-wrap">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="tel" id="phone" placeholder="(Optional) Best number to reach you" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" required placeholder="Your email address" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" required rows="4" placeholder="How can we support you?"></textarea>
                                    </div>
                                    <button type="submit" className="btn-primary submit-btn" disabled={formStatus === 'submitting'}>
                                        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Insurance Verification Section */}
                    <div className="insurance-section glass-panel subtle-glow">
                        <div className="insurance-info">
                            <h3 className="gradient-text gradient-accent-cool">Insurance & Coverage</h3>
                            <p className="insurance-lead">We accept most major insurance plans and are committed to making care accessible. We will work with you to navigate your coverage and benefits.</p>

                            <div className="insurance-providers">
                                <h4>Accepted Providers</h4>
                                <div className="provider-logo-grid">
                                    {insuranceLogos.map((provider, idx) => (
                                        <div key={idx} className="provider-logo-wrap">
                                            <img src={provider.src} alt={`${provider.name} logo`} className="provider-logo" />
                                        </div>
                                    ))}
                                </div>
                                <p className="insurance-note">Don't see your provider? Contact us — we may still be able to help through out-of-network benefits.</p>
                            </div>
                        </div>

                        <div className="insurance-form-side">
                            <h4>Verify Your Coverage</h4>
                            {insuranceStatus === 'success' ? (
                                <div className="form-success">
                                    <h3 className="gradient-text gradient-accent-cool">Verification Submitted</h3>
                                    <p>Thank you! Our team will verify your benefits and contact you within 1-2 business days.</p>
                                    <button className="btn-secondary" onClick={() => setInsuranceStatus('idle')}>Submit Another</button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleInsuranceSubmit}>
                                    <div className="form-group row">
                                        <div className="input-wrap">
                                            <label htmlFor="ins-first">First Name</label>
                                            <input type="text" id="ins-first" required placeholder="First name" />
                                        </div>
                                        <div className="input-wrap">
                                            <label htmlFor="ins-last">Last Name</label>
                                            <input type="text" id="ins-last" required placeholder="Last name" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="input-wrap">
                                            <label htmlFor="ins-dob">Date of Birth</label>
                                            <input type="date" id="ins-dob" required />
                                        </div>
                                        <div className="input-wrap">
                                            <label htmlFor="ins-phone">Phone Number</label>
                                            <input type="tel" id="ins-phone" required placeholder="(555) 123-4567" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ins-email">Email Address</label>
                                        <input type="email" id="ins-email" required placeholder="Your email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ins-member">Member ID</label>
                                        <input type="text" id="ins-member" required placeholder="Insurance member ID" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ins-notes">Additional Notes</label>
                                        <textarea id="ins-notes" rows="3" placeholder="Any additional information about your coverage"></textarea>
                                    </div>
                                    <button type="submit" className="btn-primary submit-btn" disabled={insuranceStatus === 'submitting'}>
                                        {insuranceStatus === 'submitting' ? 'Submitting...' : 'Verify My Coverage'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Simple Google Map Embed */}
                    <div className="map-container glass-panel">
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=60%20Leo%20M%20Birmingham%20Parkway,+Suite%20102+Brighton,+MA+(Sacred%20Psyche)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Sacred Psyche Location"
                        ></iframe>
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
