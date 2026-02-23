import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Therapies.css';

const therapiesData = [
    {
        id: 'emdr',
        icon: '👁️',
        name: 'EMDR',
        tagline: 'Reprocess. Release. Rewire.',
        accentColor: '#6366f1',
        summary: 'Eye Movement Desensitization and Reprocessing for accelerated trauma resolution.',
        details: {
            what: "EMDR is a structured therapy that encourages the patient to briefly focus on the trauma memory while simultaneously experiencing bilateral stimulation (typically eye movements). This reduces the vividness and emotional charge attached to the memories.",
            how: "At Sacred Psyche, our EMDR-trained clinicians use an intensive protocol—often scheduling multiple sessions per week during Full Day Treatment. This accelerated approach compresses what might take months in traditional outpatient care into a period of focused, deep processing.",
            who: "Individuals processing single-incident trauma (accidents, assaults), complex developmental trauma (childhood neglect, emotional abuse), or phobias and anxiety disorders that have proven resistant to talk therapy alone.",
            keyPoints: [
                "Bilateral stimulation (eye movements, tapping, or auditory tones)",
                "Does not require detailed verbal recounting of the trauma",
                "Accelerated processing compared to traditional talk therapy",
                "Rigorously evidence-based with decades of clinical research"
            ]
        }
    },
    {
        id: 'somatic',
        icon: '🫀',
        name: 'Somatic Experiencing',
        tagline: 'The body remembers. Let it speak.',
        accentColor: '#14b8a6',
        summary: 'Body-based therapy to release stored trauma from the nervous system.',
        details: {
            what: "Somatic Experiencing (SE) is a body-oriented therapeutic model developed by Dr. Peter Levine. It works by gently guiding awareness to bodily sensations (interoception) to help 'renegotiate' and release the physical energy bound up in trauma responses.",
            how: "Our SE practitioners guide you through a process called 'titration'—carefully approaching traumatic material in small, manageable doses. You learn to track sensations like tightness, heat, or trembling, and develop resources to safely discharge these without overwhelm.",
            who: "Anyone experiencing chronic tension, dissociation, panic attacks, or a general sense of being 'stuck' in fight-flight-freeze. Particularly powerful for those who find traditional talk therapy intellectually engaging but emotionally unchanged.",
            keyPoints: [
                "Focuses on the felt sense of the body, not cognitive narrative",
                "Develops the capacity to self-regulate the nervous system",
                "Gentle, titrated approach prevents re-traumatization",
                "Addresses the root physiology of anxiety and PTSD"
            ]
        }
    },
    {
        id: 'functional-psych',
        icon: '🧬',
        name: 'Functional Psychiatry',
        tagline: 'Root cause. Not just symptom.',
        accentColor: '#8b5cf6',
        summary: 'Psychiatry that goes beyond medication management to address the biological roots of mental health.',
        details: {
            what: "Functional Psychiatry combines traditional psychiatric expertise with a deep investigation into the biological underpinnings of mental health—gut health, inflammation, hormonal balance, nutritional deficiencies, and genetic factors that influence mood and cognition.",
            how: "Our approach begins with comprehensive lab panels and a thorough metabolic history. Treatment may include targeted supplementation, dietary guidance, medication optimization (or tapering), and collaboration with your existing medical team to build a truly integrated care plan.",
            who: "Individuals who feel over-medicated, those who haven't responded well to standard psychiatric medication, anyone interested in understanding the 'why' behind their symptoms, and those seeking a thoughtful plan for reducing reliance on pharmaceuticals.",
            keyPoints: [
                "Comprehensive lab work and metabolic assessment",
                "Gut-brain axis optimization",
                "Medication tapering and optimization support",
                "Nutritional psychiatry and supplementation protocols"
            ]
        }
    },
    {
        id: 'art-therapy',
        icon: '🎨',
        name: 'Art & Expressive Therapy',
        tagline: 'Create what words cannot hold.',
        accentColor: '#f59e0b',
        summary: 'Non-verbal processing through creative expression—painting, sculpture, movement, and music.',
        details: {
            what: "Art and Expressive Therapies use creative processes—visual art, music, dance/movement, and dramatic enactment—as the primary mode of communication and healing. These modalities access pre-verbal and right-brain experiences that talk therapy often cannot reach.",
            how: "In both individual and group settings, our licensed expressive therapists guide creative exploration. There is no artistic skill required. The process is the medicine. A finger painting, a collage, or a simple rhythm on a drum can unlock profound emotional insight.",
            who: "Those who struggle to articulate their inner world verbally, individuals processing early childhood or pre-verbal trauma, and anyone seeking a richer, more embodied form of self-expression within their healing journey.",
            keyPoints: [
                "No artistic skill or experience required",
                "Accesses pre-verbal and implicit memories",
                "Available in individual and group formats",
                "Includes visual art, music, movement, and drama"
            ]
        }
    },
    {
        id: 'biofeedback',
        icon: '📊',
        name: 'Biofeedback & Neurofeedback',
        tagline: 'See your nervous system. Train it.',
        accentColor: '#06b6d4',
        summary: 'Real-time physiological monitoring to train self-regulation of the nervous system.',
        details: {
            what: "Biofeedback uses sensors to measure physiological signals—heart rate variability (HRV), skin conductance, muscle tension, and brainwave activity (EEG neurofeedback). This data is displayed in real-time, giving you a window into your own nervous system and teaching you to consciously influence it.",
            how: "Sessions involve wearing non-invasive sensors while engaging in guided exercises (breathing, visualization, or computer-based games). Over time, you learn to recognize the internal cues of dysregulation and develop the capacity to shift yourself back toward calm without external intervention.",
            who: "Individuals with anxiety, ADHD, insomnia, chronic pain, or anyone seeking to build a more resilient nervous system. Particularly effective for those who are analytically minded and appreciate data-driven approaches to healing.",
            keyPoints: [
                "Non-invasive, real-time physiological monitoring",
                "Heart Rate Variability (HRV) training for emotional regulation",
                "EEG Neurofeedback for attention and brainwave optimization",
                "Builds lasting self-regulation skills"
            ]
        }
    },
    {
        id: 'narrative',
        icon: '📖',
        name: 'Narrative Medicine',
        tagline: 'Your story is not your diagnosis.',
        accentColor: '#ec4899',
        summary: 'Reclaiming authorship of your life story through guided narrative exploration.',
        details: {
            what: "Narrative Medicine draws from literary studies, philosophy, and psychotherapy to examine the stories we tell about ourselves—and the ones told about us by medical systems, families, and culture. It seeks to separate the person from the problem, and to re-author an empowered identity.",
            how: "Through structured writing exercises, guided reflection, and therapeutic dialogue, we help you identify the dominant narratives shaping your self-concept (e.g., 'I am broken,' 'I am too much'). We then collaboratively explore alternative stories that honor your complexity and resilience.",
            who: "Those feeling defined by their diagnosis, individuals processing grief or major life transitions, and anyone who senses that the story they've been living inside of no longer serves them.",
            keyPoints: [
                "Separates the person from the problem (externalization)",
                "Explores dominant cultural and familial narratives",
                "Re-authors identity from a place of agency and strength",
                "Bridges clinical psychology with the humanities"
            ]
        }
    },
    {
        id: 'psychedelic-integration',
        icon: '✨',
        name: 'Psychedelic Integration',
        tagline: 'Ground the extraordinary.',
        accentColor: '#a855f7',
        summary: 'Somatic and psychological support for integrating experiences from ketamine or other legal psychedelic therapies.',
        details: {
            what: "Psychedelic Integration is the therapeutic process of making meaning from non-ordinary states of consciousness—whether induced by ketamine (legally administered), psilocybin (in clinical trials), or spontaneous mystical experiences. The journey itself is only the beginning; integration is where lasting change takes root.",
            how: "We provide dedicated integration sessions that combine somatic awareness, journaling, and therapeutic dialogue. Our clinicians help you unpack the imagery, emotions, and insights from your experience and translate them into concrete shifts in your daily life, relationships, and self-understanding.",
            who: "Anyone currently receiving ketamine therapy (KAP), participants in clinical psychedelic trials, or individuals who have had profound non-ordinary experiences and are seeking support to make sense of them outside of the session room.",
            keyPoints: [
                "Bridges the psychedelic experience with daily life",
                "Combines somatic, narrative, and relational approaches",
                "Supports ketamine-assisted psychotherapy (KAP) clients",
                "Does not administer psychedelics—focuses purely on integration"
            ]
        }
    },
    {
        id: 'relational',
        icon: '🤝',
        name: 'Relational Therapy',
        tagline: 'Healing happens between us.',
        accentColor: '#10b981',
        summary: 'Attachment-focused work exploring how early relational patterns shape present-day connection.',
        details: {
            what: "Relational Therapy is rooted in the understanding that human beings are fundamentally wired for connection, and that our earliest attachment experiences create templates for how we navigate intimacy, conflict, trust, and vulnerability throughout life. Healing, therefore, must also happen within relationship.",
            how: "The therapeutic relationship itself becomes the primary instrument of change. Your clinician pays close attention to the dynamics between you—moments of rupture and repair, patterns of avoidance or anxious pursuit—and gently brings these into awareness as live data for exploration.",
            who: "Individuals struggling with trust, intimacy, or chronic relationship difficulties. Those with dismissive, anxious, or disorganized attachment styles. Anyone who recognizes that their relational patterns are causing suffering but feels unable to change them alone.",
            keyPoints: [
                "Attachment theory and interpersonal neurobiology informed",
                "The therapeutic relationship as a vehicle for change",
                "Explores patterns of rupture and repair",
                "Builds capacity for secure, fulfilling connections"
            ]
        }
    }
];

const Therapies = () => {
    const containerRef = useRef(null);
    const [selectedTherapy, setSelectedTherapy] = useState(null);

    useEffect(() => {
        const orbs = containerRef.current?.querySelectorAll('.therapy-orb');
        if (!orbs) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('orb-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        orbs.forEach((orb) => observer.observe(orb));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedTherapy(null);
        };
        if (selectedTherapy) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedTherapy]);

    return (
        <section id="therapies" className="therapies-section" ref={containerRef}>
            <div className="container">
                <div className="therapies-header">
                    <span className="section-label">Our Modalities</span>
                    <h2 className="gradient-text gradient-accent-cool">The Healing Toolkit</h2>
                    <p className="therapies-lead">
                        Each modality is a doorway. Tap any one to see how it works, who it's for, and how we weave it into your care.
                    </p>
                </div>

                <div className="therapies-constellation">
                    {therapiesData.map((therapy) => (
                        <div
                            key={therapy.id}
                            className="therapy-orb"
                            onClick={() => setSelectedTherapy(therapy)}
                            role="button"
                            tabIndex={0}
                            style={{ '--orb-accent': therapy.accentColor }}
                        >
                            <div className="orb-glow"></div>
                            <span className="orb-icon">{therapy.icon}</span>
                            <span className="orb-name">{therapy.name}</span>
                            <span className="orb-tagline">{therapy.tagline}</span>
                        </div>
                    ))}
                </div>
            </div>

            {selectedTherapy && (
                <div className="library-modal-overlay therapy-modal-overlay" onClick={() => setSelectedTherapy(null)}>
                    <div className="library-modal-content therapy-modal-content" onClick={(e) => e.stopPropagation()} style={{ '--modal-accent': selectedTherapy.accentColor }}>
                        <button className="modal-close-btn" onClick={() => setSelectedTherapy(null)} aria-label="Close modal">✕</button>

                        <div className="therapy-modal-header">
                            <span className="therapy-modal-icon" style={{ color: selectedTherapy.accentColor }}>{selectedTherapy.icon}</span>
                            <h2 className="article-title">{selectedTherapy.name}</h2>
                            <p className="therapy-modal-tagline">{selectedTherapy.tagline}</p>
                        </div>

                        <div className="therapy-modal-body">
                            <div className="therapy-detail-block">
                                <h4>What It Is</h4>
                                <p>{selectedTherapy.details.what}</p>
                            </div>
                            <div className="therapy-detail-block">
                                <h4>How We Practice It</h4>
                                <p>{selectedTherapy.details.how}</p>
                            </div>
                            <div className="therapy-detail-block">
                                <h4>Who It's For</h4>
                                <p>{selectedTherapy.details.who}</p>
                            </div>

                            <div className="therapy-key-points">
                                <h4>Key Details</h4>
                                <ul>
                                    {selectedTherapy.details.keyPoints.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="article-footer">
                            <button className="btn-secondary" onClick={() => setSelectedTherapy(null)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Therapies;
