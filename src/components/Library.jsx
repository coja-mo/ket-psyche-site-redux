import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Library.css';

gsap.registerPlugin(ScrollTrigger);

const Library = () => {
    const containerRef = useRef(null);
    const [selectedArticle, setSelectedArticle] = useState(null);

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

    // Prevent scrolling on body when modal is open
    useEffect(() => {
        if (selectedArticle) {
            document.body.style.overflow = 'hidden';
            // Modal entry animation
            gsap.fromTo('.library-modal-content',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
            );
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedArticle]);

    const resources = [
        {
            category: "Integration Guide",
            title: "Navigating the Return: Somatic Practices for Post-Session Grounding",
            desc: "Learn how to anchor profound psychedelic insights into your daily rhythm through gentle body-based tracking.",
            readTime: "5 min read",
            content: (
                <>
                    <p>Coming back from a non-ordinary state of consciousness can feel like returning from a distant land. The language of the day-to-day world doesn't always have words for what you've experienced. This is where <strong>somatic integration</strong> becomes vital.</p>

                    <p>Integration isn't just about thinking through what happened; it's about helping the physical body digest and anchor the shift. Here are three gentle practices you can use in the days following a session:</p>

                    <h4>1. Grounding Through the Feet</h4>
                    <p>Often, profound psychological work pulls our energy upward into the mind and upper body. Take five minutes each morning to stand barefoot on the floor. Bring your complete attention to the soles of your feet. Notice the temperature, the texture, and the weight of your body pressing down. This simple act cues the nervous system that you are physically present and safe.</p>

                    <h4>2. Tracking Sensations, Not Stories</h4>
                    <p>When an intense emotion arises post-session, the mind's habit is to build a narrative around it ("I'm anxious because..."). Instead, try to drop the story and track the physical sensation. Where is it located? Does it have a temperature? Is it moving? By observing the sensation neutrally, you allow the energy to move through the body rather than getting stuck in an intellectual loop.</p>

                    <h4>3. The Power of the Sigh</h4>
                    <p>The physiological sigh—two quick inhales through the nose followed by a long, slow exhale through the mouth—is one of the fastest ways to down-regulate the nervous system. Use it whenever you feel overwhelmed by the process of integration. It signals safety to the primitivebrain.</p>

                    <p><em>Remember, healing is not a race. Give yourself the grace to move at the speed of your nervous system.</em></p>
                </>
            )
        },
        {
            category: "Community Story",
            title: "Reclaiming the Nervous System: L's Journey from Freeze to Flow",
            desc: "An anonymized account of moving through complex trauma using functional psychiatry and deep relational support.",
            readTime: "8 min read",
            content: (
                <>
                    <p>For nearly a decade, "L" lived in a persistent state of functional freeze. On the outside, they were managing a demanding career and social obligations. On the inside, they felt chronically disconnected—watching their life happen from a distance, unable to feel deep joy or profound grief.</p>

                    <p>"Traditional talk therapy helped me understand <em>why</em> I was numb," L shared, "but it didn't help me actually feel anything. I knew all the theories about trauma, but my body was still terrified to let its guard down."</p>

                    <h4>The Turning Point</h4>
                    <p>When L came to Sacred Psyche, we didn't start by analyzing the past. We started by building a safe container in the present. Using a combination of relational therapy and somatic experiencing, we slowly expanded L's window of tolerance—their capacity to feel bodily sensations without becoming overwhelmed.</p>

                    <p>This process was eventually paired with targeted psychedelic integration. In those expanded states, L wasn't fighting their trauma; they were finally able to sit with the frightened parts of themselves with profound compassion rather than judgment.</p>

                    <h4>Integration: The Real Work</h4>
                    <p>The breakthrough wasn't the ceremony itself—it was the weeks that followed. By utilizing functional psychiatry, we supported L's neurochemistry during this vulnerable period. In our integration circles, L practiced expressing boundaries and voicing needs, effectively rewiring the belief that connection requires self-abandonment.</p>

                    <p>"It wasn't a sudden fix," L reflects today. "It was like a slow thaw. I still have hard days. But I'm no longer watching my life on a screen. I'm actually in it. The freeze has melted into a steady, grounded flow."</p>
                </>
            )
        },
        {
            category: "Educational",
            title: "The Intersection of Mysticism and Modern Science",
            desc: "Understanding how ancient ritual informs cutting-edge somatic and psychedelic-assisted therapies.",
            readTime: "12 min read",
            content: (
                <>
                    <p>For much of its history, modern psychiatry viewed the human struggle through a strictly materialist lens—reducing profound suffering to mere chemical imbalances and addressing it almost exclusively through pharmacological intervention. Conversely, ancient healing traditions often spoke of soul loss, energy blocks, and the necessity of communal ritual.</p>

                    <p>At Sacred Psyche, we believe that the most potent healing happens where these two paradigms intersect.</p>

                    <h4>The Neurobiology of Ritual</h4>
                    <p>Science is finally beginning to map what indigenous wisdom has known for millennia. We now understand that intentional ritual—whether it's the structure of a therapeutic container, the use of sound bowls, or mindful breathwork—has measurable effects on the autonomic nervous system. Ritual creates predictability and safety, which lowers the brain's threat response and allows the prefrontal cortex to remain online during deep emotional processing.</p>

                    <h4>Psychedelics: The Bridge</h4>
                    <p>Psychedelic-assisted therapy serves as a powerful bridge between the scientific and the mystical. Neurologically, these medicines temporarily dampen the Default Mode Network (the brain's rigid ego structure) and promote neuroplasticity. Experientially, they often induce phenomena that patients describe in deeply spiritual or mystical terms—feelings of interconnectedness, encounters with the divine, or profound ego dissolution.</p>

                    <p>If we treat these experiences merely as chemical illusions, we rob them of their meaning. If we treat them entirely as mystical revelations without grounded integration, they risk becoming destabilizing. It is precisely the weaving together of the scientific safeguard and the spiritual honor that allows for lasting, embodied transformation.</p>

                    <p>Healing is both a return to our neuro-biological baseline and a reclamation of our deepest, most sacred stories.</p>
                </>
            )
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
                        <div key={index} className="lib-card glass-panel" onClick={() => setSelectedArticle(res)}>
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

            {/* Reading Modal */}
            {selectedArticle && (
                <div className="library-modal-overlay" onClick={() => setSelectedArticle(null)}>
                    <div className="library-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setSelectedArticle(null)}>✕</button>

                        <div className="article-header">
                            <span className="lib-category">{selectedArticle.category} • {selectedArticle.readTime}</span>
                            <h2 className="article-title">{selectedArticle.title}</h2>
                        </div>

                        <div className="article-body">
                            {selectedArticle.content}
                        </div>

                        <div className="article-footer">
                            <button className="btn-secondary" onClick={() => setSelectedArticle(null)}>Return to Library</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Library;
