import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { programData } from './Programs';
import './ProgramDetails.css';

const ProgramDetails = () => {
    const { id } = useParams();
    const program = programData.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!program) {
        return <Navigate to="/#programs" replace />;
    }

    return (
        <div className="program-details-page">
            <div className="container program-details-container">
                <Link to="/#programs" className="back-link">
                    ← Back to Programs
                </Link>

                <div className="program-header">
                    <div className={`detail-indicator ${program.indicator}`}></div>
                    <h1 className="gradient-text title-large">{program.title}</h1>
                    <p className="detail-summary">{program.summary}</p>
                </div>

                <div className="program-content glass-panel content-panel">
                    <section className="detail-section">
                        <h2 className="section-title">Program Overview</h2>
                        <p className="detail-text">{program.details.overview}</p>
                    </section>

                    <section className="detail-section">
                        <h2 className="section-title">Program Structure</h2>
                        <ul className="structure-list">
                            {program.highlights.map((highlight, idx) => (
                                <li key={idx} className="structure-item">
                                    <span className="bullet-glow">✦</span>
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="detail-section">
                        <h2 className="section-title">Core Therapies & Modalities</h2>
                        <div className="modalities-grid">
                            {program.details.therapies.map((therapy, idx) => (
                                <div key={idx} className="modality-card">
                                    <h3 className="modality-title">{therapy.name}</h3>
                                    <p className="detail-text">{therapy.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="text-center mb-12">
                    <Link to="/#programs" className="back-link" style={{ marginBottom: 0 }}>
                        ← Return to Programs
                    </Link>
                </div>

                <div className="program-cta glass-panel text-center">
                    <div className="glow-orb"></div>
                    <h2 className="cta-title">Is this the right path for you?</h2>
                    <p className="cta-text">Reach out for a confidential consultation to explore if {program.title.toLowerCase()} aligns with your healing goals.</p>
                    <Link to="/#contact" className="btn-primary">Schedule a Consultation</Link>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetails;
