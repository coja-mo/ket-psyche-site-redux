import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './Programs.css';

export const programData = [
    {
        id: 'full-day',
        title: 'Full Day Treatment',
        indicator: 'indicator-intensive',
        summary: 'Immersive, intensive stabilization and care. An environment combining evidence-based clinical therapy with intentional holistic practices.',
        highlights: [
            '5-6 days per week',
            'Somatic & group therapy',
            'High-touch support system'
        ],
        details: {
            overview: "Our most intensive offering, designed for individuals in acute distress, experiencing severe burnout, or transitioning from higher levels of care (like inpatient facilities). This program provides a highly structured, immersive container for profound stabilization and trauma processing.",
            therapies: [
                {
                    name: "Intensive EMDR",
                    desc: "Eye Movement Desensitization and Reprocessing (EMDR) integrated heavily throughout the week to accelerate the processing of deep-rooted trauma without requiring the client to re-narrate their pain."
                },
                {
                    name: "Somatic Experiencing",
                    desc: "Daily body-based interventions to help discharge physiological stress and teach the nervous system how to safely inhabit the body again."
                },
                {
                    name: "Functional Psychiatry",
                    desc: "Close medical supervision prioritizing root-cause analysis, medication stabilization (or tapering, when appropriate), and nutritional support for brain health."
                }
            ]
        }
    },
    {
        id: 'partial-day',
        title: 'Partial Day Treatment',
        indicator: 'indicator-steady',
        summary: 'Structured integration and continued growth. Ideal for maintaining daily responsibilities while actively doing deep healing work.',
        highlights: [
            '3-5 days per week',
            'Tools for ongoing recovery',
            'Emotional integration space'
        ],
        details: {
            overview: "A step-down from Full Day Treatment or a step-up for those needing more than weekly therapy. Partial Day offers a robust therapeutic structure while allowing you to remain engaged in your daily life, work, or family responsibilities.",
            therapies: [
                {
                    name: "Group Art & Music Therapy",
                    desc: "Expressive therapies that bypass the analytical mind, allowing for the non-verbal processing of complex emotions and fostering community connection."
                },
                {
                    name: "Biofeedback & Regulation",
                    desc: "Training in heart-rate variability and breathing techniques to build long-term resilience and emotional self-regulation."
                },
                {
                    name: "Narrative Medicine",
                    desc: "Guided group and individual work focused on unpacking your story, de-pathologizing your experience, and authoring a new, empowered narrative."
                }
            ]
        }
    },
    {
        id: 'outpatient',
        title: 'Outpatient Treatment',
        indicator: 'indicator-flexible',
        summary: 'Flexible, ongoing support woven into daily life. Consistent connection to healing rhythms tailored to your specific schedule.',
        highlights: [
            '1-2 days per week',
            'Sustains long-term progress',
            'Support during life transitions'
        ],
        details: {
            overview: "Designed for long-term maintenance, slow tapering of medications, or gentle ongoing support. Our Outpatient model focuses on sustaining the gains made in higher levels of care and providing a secure anchor as you navigate life's inevitable transitions.",
            therapies: [
                {
                    name: "Neurodivergent-Affirming Care",
                    desc: "Specialized therapy tailored for individuals with ADHD, Autism, or high sensitivity, focusing on executive functioning support and unmasking."
                },
                {
                    name: "Relational Therapy",
                    desc: "Focusing on how you interact with the world and others, unpacking relational traumas, and building secure, fulfilling connections."
                },
                {
                    name: "Psychedelic Integration",
                    desc: "For those engaging in ketamine or other legal psychedelic therapies elsewhere, we provide the vital somatic and psychological integration work needed to ground those experiences."
                }
            ]
        }
    }
];

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
                    {programData.map((program) => (
                        <Link
                            to={`/programs/${program.id}`}
                            key={program.id}
                            className="program-card glass-panel subtle-glow"
                            style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
                        >
                            <div className={`card-indicator ${program.indicator}`}></div>
                            <h3>{program.title}</h3>
                            <p className="card-summary">{program.summary}</p>
                            <ul className="card-details">
                                {program.highlights.map((highlight, idx) => (
                                    <li key={idx}>{highlight}</li>
                                ))}
                            </ul>
                            <div className="btn-link" style={{ marginTop: 'auto' }}>Explore Details →</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
