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
            category: "Clinical",
            title: "Co-Occurring Disorders and Holistic Mental Health Treatment",
            desc: "Understanding how overlapping mental health challenges—from PTSD and substance use to anxiety and disordered eating—are treated simultaneously through integrative care.",
            content: (
                <>
                    <h4>What Are Co-Occurring Disorders?</h4>
                    <p>Co-occurring disorders are commonly defined as the coexistence of a mental health condition and a behavioral or substance-related concern. But at Sacred Psyche, we look beyond the clinical pairing. We often work with individuals who experience PTSD and alcohol or cannabis dependence, generalized anxiety disorder and disordered eating, bipolar disorder and compulsive behaviors, depression alongside chronic pain or fatigue, panic attacks linked with stimulant misuse, and ADHD and emotional dysregulation.</p>
                    <p>Rather than treating one issue first and the other later, our care model is integrative and simultaneous. We recognize how these struggles overlap, reinforce one another, and originate from shared roots—like unresolved trauma, unmet emotional needs, or nervous system dysregulation.</p>

                    <h4>Why Mental Health Comes First in Our Approach</h4>
                    <p>In many dual-diagnosis programs, substance use becomes the primary focus, and mental health gets treated as a secondary concern. We reverse that paradigm. We believe that behind most behavioral challenges lies an emotional experience that hasn't been witnessed, processed, or safely held. That's why we begin with relational, trauma-informed therapy, while also supporting behavioral change through holistic and embodied practices.</p>

                    <h4>Holistic Therapies for Co-Occurring Conditions</h4>
                    <p>Our team integrates traditional psychotherapy with holistic and somatic healing tools to support the whole person, including Ketamine-Assisted Psychotherapy (KAP), Breathwork and Somatic Therapy, DBT and CBT, Reiki, Sound Healing, and Meditation, Nutritional & Hormonal Counseling, and Astrological Counseling & Dreamwork. We don't treat diagnoses—we treat human beings navigating layered realities.</p>

                    <h4>Integration Is the Goal</h4>
                    <p>You don't need to be "fixed." You need to be met—fully. We help clients integrate the parts of themselves that have been fragmented, whether by trauma, addiction, or shame. Healing co-occurring disorders means holding complexity. It means addressing patterns without reducing people to them. And it means building a life that feels safe, steady, and aligned—one layer at a time.</p>
                </>
            )
        },
        {
            category: "Somatic",
            title: "The Body Keeps the Wisdom: Why We Use Somatic Therapy to Heal Trauma",
            desc: "Trauma doesn't just live in the mind—it lives in the body. Learn why somatic approaches are essential for healing that actually sticks.",
            content: (
                <>
                    <p>Trauma doesn't just live in the mind—it lives in the body. It shows up in clenched jaws, shallow breaths, racing hearts, frozen shoulders. It lingers in the places we tighten, collapse, or check out. You can go to therapy for years and still feel stuck if no one has helped your body feel safe again.</p>

                    <h4>What Is Somatic Therapy?</h4>
                    <p>Somatic therapy is a body-based approach to mental health that helps people reconnect with their physical and emotional experience. "Soma" means body—and in somatic therapy, we listen to the body as a source of information, memory, and healing. Through breath, sensation tracking, gentle movement, and nervous system regulation, we help the body learn what safety feels like again.</p>

                    <h4>Why Talk Therapy Isn't Always Enough</h4>
                    <p>Many clients come to us after years of traditional therapy. They understand their patterns. They can explain their trauma. But something still doesn't shift. That's because trauma isn't just a story—it's a survival response. It lives in the nervous system, in the muscles, in the breath. Until the body is invited into the process, true healing often remains out of reach.</p>

                    <h4>How We Use Somatic Practices at Sacred Psyche</h4>
                    <p>In our holistic mental health program, somatic work is woven into many sessions—whether through breathwork to discharge stuck energy, grounding exercises to support emotion regulation, pendulation (moving gently between discomfort and safety), body scans and touch-point practices, sound therapy and vibration to soothe the vagus nerve, or mindful movement, stretching, or stillness.</p>

                    <h4>Healing Is Felt, Not Just Understood</h4>
                    <p>If your healing has felt intellectual—but not embodied—somatic therapy may be the missing link. At Sacred Psyche, we don't just treat the mind. We treat the whole nervous system. Because when your body finally feels safe enough to exhale, everything begins to change.</p>
                </>
            )
        },
        {
            category: "Depth Psychology",
            title: "Into the Unconscious: Jungian Therapy and Shadow Work at Sacred Psyche",
            desc: "Some wounds don't speak in words. They show up as repeating patterns, as dreams you can't shake, as the parts of yourself you've pushed underground.",
            content: (
                <>
                    <p>Some wounds don't speak in words. They show up as repeating patterns. As dreams you can't shake. As the parts of yourself you've pushed underground just to survive. At Sacred Psyche, we specialize in Jungian-based therapy—an approach that honors not only the conscious mind, but the deeper, symbolic layers of the psyche.</p>

                    <h4>What Is Jungian Therapy?</h4>
                    <p>Jungian therapy, or depth psychology, sees symptoms not as problems to eliminate, but as messages from the unconscious. This approach explores how psyche expresses itself through symbols, myths, and archetypes—those universal inner figures that shape how we relate to ourselves and others. At Sacred Psyche, we integrate Jungian work into trauma-informed care by tracking unconscious material through dreams, somatic reactions, repeating life themes, and tarot pulls and synchronicities.</p>

                    <h4>Shadow Work: Reclaiming the Disowned Self</h4>
                    <p>The shadow includes everything you've pushed away to survive—your anger, your needs, your sensuality, your sadness. But buried within the shadow are also your instincts, creativity, and life force. We don't shame the shadow here. We invite it back with compassion. Shadow work helps you explore what you're projecting, avoiding, or resisting—not to expose or fix you, but to integrate your exiled parts and become more whole.</p>

                    <h4>Archetypes, Myth, and the Tarot in Therapy</h4>
                    <p>Jung believed the unconscious often speaks through archetypes—the universal roles or inner figures we all carry, like the Caregiver, the Rebel, the Exile, or the Magician. We also incorporate Jungian-informed tarot exploration as a tool for self-reflection—not as fortune-telling, but as a living dialogue with the psyche. Tarot can illuminate unconscious dynamics, archetypal energies, and spiritual themes arising in your healing journey.</p>

                    <h4>Depth Work Held with Care</h4>
                    <p>Jungian therapy isn't separate from our trauma-informed model—it's woven into it. Your exploration of the unconscious is supported by somatic therapy and nervous system regulation, relational consent-based psychotherapy, Reiki, sound healing, breathwork, and psychedelic integration. This creates a space where you don't just analyze the unconscious—you befriend it, one image, one sensation, one symbol at a time.</p>
                </>
            )
        },
        {
            category: "Psychedelic Care",
            title: "Ketamine and Non-Ordinary States",
            desc: "Healing does not always unfold inside the limits of ordinary awareness. Learn how Sacred Psyche provides the integrative support around the experience.",
            content: (
                <>
                    <p>Healing does not always unfold inside the limits of ordinary awareness. Some experiences create a shift in perspective or allow access to thoughts and emotions that usually stay beneath the surface. At Sacred Psyche, we support clients who choose to explore these non-ordinary states of consciousness as part of their therapeutic work.</p>

                    <p>We collaborate with a licensed prescriber trained in alternative medicine who offers ketamine treatment that is taken privately at home. Clients complete their ketamine sessions on their own, following the prescriber's guidance. Sacred Psyche focuses on the therapeutic support around the experience, including preparation, reflection, and integration.</p>

                    <p>Our clinicians are trained in ketamine-assisted psychotherapy principles. This helps us understand the emotional, cognitive, and physical responses that may arise from these experiences. We help clients talk through what happened, clarify the insights, and connect those insights to their personal healing goals.</p>

                    <p>We also support clients who enter non-ordinary states through breathwork, meditation, somatic practices, psychedelic experiences, and other alternative medicines. The intention is the same across all of these paths: provide a grounded space where clients can understand what they experienced and carry that understanding into daily life.</p>

                    <p>Sacred Psyche centers the integrative process. This is where insight becomes direction and internal shifts become lasting change. If you are working with non-ordinary states of consciousness, including at-home ketamine prescribed through a collaborating prescriber, we offer the therapeutic support that helps those experiences become meaningful and sustainable.</p>
                </>
            )
        },
        {
            category: "Holistic Healing",
            title: "Trauma Healing Through Holistic Therapy: How Sacred Psyche Treats the Whole Self",
            desc: "Holistic trauma therapy addresses more than just symptoms—it works with the body, mind, and unconscious to integrate the full complexity of trauma.",
            content: (
                <>
                    <h4>What Is Holistic Trauma Therapy?</h4>
                    <p>Holistic trauma therapy addresses more than just symptoms—it works with the body, mind, and unconscious. While many trauma treatment centers rely solely on talk therapy, Sacred Psyche integrates multiple healing pathways including CBT, DBT, Somatic therapy, Ketamine-assisted therapy, Reiki and energy healing, Sound healing and meditation, Breathwork and mindfulness, Jungian-based dreamwork and symbolic exploration, and Astrological counseling for insight and self-understanding.</p>

                    <h4>How We Approach Trauma at Sacred Psyche</h4>
                    <p>Our clinicians recognize that trauma isn't just a psychological wound—it's stored in the body, often manifesting as chronic anxiety, dissociation, depression, or emotional numbness. Our goal is not just symptom management, but integration and reconnection. We provide a space where clients can rebuild a sense of internal safety, explore fragmented parts of the self, reclaim their voice, agency, and capacity for connection, and work at their own pace with consent-based, relational support.</p>

                    <h4>Why Holistic Care Matters</h4>
                    <p>Traditional therapy can be powerful, but it often misses the somatic and spiritual dimensions of healing. At Sacred Psyche, we don't just help you cope—we help you transform the way you relate to your past, your body, and your story. You don't need to go back to who you were before the trauma. Instead, we offer a pathway to become more grounded, more resourced, and more fully alive.</p>
                </>
            )
        },
        {
            category: "Integration Guide",
            title: "Navigating the Return: Somatic Practices for Post-Session Grounding",
            desc: "Learn how to anchor profound psychedelic insights into your daily rhythm through gentle body-based tracking.",
            content: (
                <>
                    <p>Coming back from a non-ordinary state of consciousness can feel like returning from a distant land. The language of the day-to-day world doesn't always have words for what you've experienced. This is where <strong>somatic integration</strong> becomes vital.</p>

                    <p>Integration isn't just about thinking through what happened; it's about helping the physical body digest and anchor the shift. Here are three gentle practices you can use in the days following a session:</p>

                    <h4>1. Grounding Through the Feet</h4>
                    <p>Often, profound psychological work pulls our energy upward into the mind and upper body. Take five minutes each morning to stand barefoot on the floor. Bring your complete attention to the soles of your feet. Notice the temperature, the texture, and the weight of your body pressing down. This simple act cues the nervous system that you are physically present and safe.</p>

                    <h4>2. Tracking Sensations, Not Stories</h4>
                    <p>When an intense emotion arises post-session, the mind's habit is to build a narrative around it. Instead, try to drop the story and track the physical sensation. Where is it located? Does it have a temperature? Is it moving? By observing the sensation neutrally, you allow the energy to move through the body rather than getting stuck in an intellectual loop.</p>

                    <h4>3. The Power of the Sigh</h4>
                    <p>The physiological sigh—two quick inhales through the nose followed by a long, slow exhale through the mouth—is one of the fastest ways to down-regulate the nervous system. Use it whenever you feel overwhelmed by the process of integration. It signals safety to the primitive brain.</p>

                    <p><em>Remember, healing is not a race. Give yourself the grace to move at the speed of your nervous system.</em></p>
                </>
            )
        },
        {
            category: "Community Story",
            title: "Reclaiming the Nervous System: L's Journey from Freeze to Flow",
            desc: "An anonymized account of moving through complex trauma using functional psychiatry and deep relational support.",
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
                            <span className="lib-category">{selectedArticle.category}</span>
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
