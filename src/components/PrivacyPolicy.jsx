import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page pt-32 pb-20">
            <div className="container max-w-4xl mx-auto px-4">
                <Link to="/" className="back-link mb-8 inline-flex items-center text-accent-cool hover:text-accent-glow transition-colors">
                    ← Back to Home
                </Link>

                <h1 className="gradient-text text-4xl md:text-5xl font-heading mb-6">Privacy Policy</h1>

                <div className="privacy-content glass-panel p-8 md:p-12 rounded-3xl">
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-text-primary">NOTICE OF PRIVACY PRACTICES</h2>
                        <p className="mb-4 text-text-secondary">THIS NOTICE DESCRIBES HOW INFORMATION ABOUT YOU AND YOUR CARE MAY BE USED AND DISCLOSED—AND HOW YOU CAN ACCESS THIS INFORMATION. PLEASE REVIEW IT WITH CARE AND CURIOSITY.</p>
                        <p className="text-text-secondary">Your healing is personal—and your privacy matters. We are entrusted with sensitive information about your life, and we hold that responsibility with care. This notice outlines how your health information may be used, how it is protected, and the rights you have under the Health Insurance Portability and Accountability Act (HIPAA) and 42 CFR Part 2, which provides additional protections for care involving substance use.</p>
                        <p className="text-text-secondary mt-2">Please also honor the privacy of others you may encounter through our offerings.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-accent-cool">HOW YOUR INFORMATION IS HELD AND PROTECTED</h2>
                        <p className="mb-4 text-text-secondary">We maintain a confidential electronic health record for each client. While the record is owned by the organization, the story it holds belongs to you. Under HIPAA and 42 CFR Part 2, your information may only be used or disclosed as permitted by law or with your written authorization.</p>
                        <p className="mb-4 text-text-secondary">If your care involves substance use or co-occurring disorders, your information receives additional protection under 42 CFR Part 2. This includes your diagnosis, treatment, and identity. We cannot release this information without your written consent, except in very limited circumstances.</p>
                        <p className="text-text-secondary">Your consent must specify what information is shared, with whom, for what purpose, and for how long. You may revoke it at any time, verbally or in writing.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-accent-cool">USES AND DISCLOSURES WITH YOUR WRITTEN CONSENT</h2>
                        <p className="mb-4 text-text-secondary">With your permission, we may:</p>
                        <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
                            <li>Coordinate care with other medical or holistic providers</li>
                            <li>Communicate with your insurance carrier or other payers</li>
                            <li>Contact a family member or support person for treatment-related or emergency needs</li>
                        </ul>
                        <p className="text-text-secondary">Your information will not be shared for these purposes without your consent.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-accent-cool">USES AND DISCLOSURES WITHOUT CONSENT</h2>
                        <p className="mb-4 text-text-secondary">There are rare situations in which information may be disclosed without your written permission, including:</p>
                        <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
                            <li>Internal coordination for your care or administrative operations</li>
                            <li>With contracted service providers who safeguard your information</li>
                            <li>To auditors, licensing boards, or researchers under strict confidentiality rules</li>
                            <li>In a medical emergency when necessary to preserve life</li>
                            <li>To report a serious crime on-site or against staff</li>
                            <li>When mandated by law (e.g., child abuse reporting, death reporting)</li>
                            <li>By valid court order meeting legal criteria under 42 CFR Part 2</li>
                        </ul>
                        <p className="text-text-secondary">You may also be contacted for scheduling, appointment reminders, or updates about services.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-accent-cool">YOUR RIGHTS REGARDING YOUR HEALTH INFORMATION</h2>
                        <p className="mb-4 text-text-secondary">You have the right to:</p>
                        <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
                            <li>Receive a paper copy of this notice at any time</li>
                            <li>Request access to your record or ask that it be shared with another provider</li>
                            <li>Request amendments to your record if something is incorrect</li>
                            <li>Request restrictions on certain uses or disclosures (though we are not required to agree)</li>
                            <li>Request a list of disclosures made without your consent, where applicable</li>
                            <li>Choose how and where you prefer to receive communications</li>
                        </ul>
                        <p className="text-text-secondary">All requests must be made in writing. A reasonable fee may apply for copies or special handling.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-accent-cool">CHANGES TO THIS NOTICE</h2>
                        <p className="text-text-secondary">This notice may be updated periodically. Any changes will apply to all records maintained, past and present. The most current version will always be made available to you.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-accent-cool">QUESTIONS OR CONCERNS</h2>
                        <p className="mb-4 text-text-secondary">If you have questions about your privacy rights or wish to raise a concern, please reach out:</p>
                        <address className="not-italic text-text-secondary mb-6 pl-4 border-l-2 border-accent-glow">
                            Sacred Psyche<br />
                            60 Leo Birmingham Parkway, Suite 2<br />
                            Brighton, MA 02135<br />
                            <a href="mailto:admin@sacredpsyche.com" className="text-accent-cool hover:underline">admin@sacredpsyche.com</a><br />
                            <a href="tel:6174190011" className="text-accent-cool hover:underline">(617) 419-0011</a>
                        </address>

                        <p className="mb-4 text-text-secondary">You may also contact:</p>
                        <address className="not-italic text-text-secondary mb-6 pl-4 border-l-2 border-accent-glow">
                            U.S. Department of Health and Human Services<br />
                            Office for Civil Rights<br />
                            200 Independence Avenue, SW, Room 509F<br />
                            HHH Building, Washington, DC 20201
                        </address>

                        <p className="italic">You will not face retaliation or penalties for filing a complaint.</p>
                        <p className="copyright-notice">&copy; 2025 Sacred Psyche</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
