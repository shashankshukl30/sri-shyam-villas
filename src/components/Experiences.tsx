"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917307491291";

const experiences = [
    {
        id: "sugam-darshan",
        title: "Sugam Darshan Assistance",
        tagline: "Temple Visit Made Easy",
        description: "We help you secure priority Sugam Darshan tickets for the sacred Sri Kashi Vishwanath Temple — so you can focus on your spiritual journey, not the queue. Share your visit details and our team will take care of the rest.",
        image: "/images/hotel/exp-darshan.jpg",
        hasForm: true,
    },
    {
        id: "ganga-aarti",
        title: "Ganga Aarti & Boat Ride",
        tagline: "An Evening You'll Never Forget",
        description: "Witness the soul-stirring Ganga Aarti from the serenity of a private boat. As bells ring and flames dance on the river, you'll experience Banaras at its most sacred and spectacular — a memory etched forever.",
        image: "/images/hotel/exp-aarti.jpg",
        hasForm: false,
    },
    {
        id: "yoga-riverside",
        title: "Riverside Yoga Session",
        tagline: "Begin Your Day in Balance",
        description: "Greet the sunrise with a guided yoga session on the banks of the Ganges. Breathe in the river breeze, feel the ancient energy of Kashi, and carry the calm with you through the rest of your journey.",
        image: "/images/hotel/exp-yoga.jpg",
        hasForm: false,
    },
];

function SugamDarshanForm() {
    const [formState, setFormState] = useState({
        name: "", phone: "", darshanDate: "", persons: "2", specialRequests: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            await fetch("https://formspree.io/f/mkovvweo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    _subject: "Sugam Darshan Request — Sri Shyam Villas",
                    ...formState,
                }),
            });
            setSubmitted(true);
            setFormState({ name: "", phone: "", darshanDate: "", persons: "2", specialRequests: "" });
        } catch {
            alert("Something went wrong. Please try again or contact us on WhatsApp.");
        } finally {
            setSending(false);
        }
    };

    if (submitted) {
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '1.5rem' }}>
                <Sparkles size={28} style={{ color: '#C5A55A', margin: '0 auto 0.75rem' }} />
                <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>Request Received!</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>Our team will confirm your Sugam Darshan booking shortly.</p>
                <button onClick={() => setSubmitted(false)} style={{ marginTop: '0.75rem', color: '#C5A55A', fontSize: '0.7rem', textDecoration: 'underline', textUnderlineOffset: '3px', border: 'none', background: 'none', cursor: 'pointer' }}>
                    Submit another request
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div className="grid grid-cols-2" style={{ gap: '0.6rem' }}>
                <div>
                    <label className="form-label">Full Name</label>
                    <input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="form-input" placeholder="Your name" />
                </div>
                <div>
                    <label className="form-label">Phone</label>
                    <input type="tel" required value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} className="form-input" placeholder="+91 XXXXX XXXXX" />
                </div>
            </div>
            <div className="grid grid-cols-2" style={{ gap: '0.6rem' }}>
                <div>
                    <label className="form-label">Preferred Date</label>
                    <input type="date" required value={formState.darshanDate} onChange={(e) => setFormState({ ...formState, darshanDate: e.target.value })} className="form-input" />
                </div>
                <div>
                    <label className="form-label">Number of People</label>
                    <select value={formState.persons} onChange={(e) => setFormState({ ...formState, persons: e.target.value })} className="form-input">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                            <option key={n} value={String(n)} style={{ color: 'black' }}>{n} {n === 1 ? 'Person' : 'People'}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <label className="form-label">Special Requests</label>
                <input type="text" value={formState.specialRequests} onChange={(e) => setFormState({ ...formState, specialRequests: e.target.value })} className="form-input" placeholder="Any specific requirements..." />
            </div>
            <button type="submit" disabled={sending} className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.25rem' }}>
                {sending ? "Submitting..." : "Request Darshan Booking"}
                <Send size={12} />
            </button>
        </form>
    );
}

export default function Experiences() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="experiences" className="section-padding relative overflow-hidden" style={{ backgroundColor: '#4A0E1A' }} ref={ref}>
            {/* Subtle texture */}
            <div className="absolute inset-0" style={{ opacity: 0.03 }}>
                <div className="absolute inset-0" style={{ backgroundImage: `url('/images/hotel/hero-1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </div>

            <div className="max-w-7xl mx-auto relative" style={{ zIndex: 10 }}>
                {/* Header */}
                <div className="text-center" style={{ marginBottom: '3.5rem' }}>
                    <motion.div initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                        <span className="section-label" style={{ display: 'block' }}>Curated Experiences</span>
                        <h2 className="section-title" style={{ marginTop: '0.75rem', color: 'white' }}>
                            Beyond a Stay,
                            <br />
                            <span style={{ color: '#C5A55A', fontStyle: 'italic' }}>An Experience</span>
                        </h2>
                        <div className="gold-divider" style={{ margin: '1rem auto' }} />
                        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
                            We go beyond accommodation — curating moments that make your Banaras journey truly unforgettable.
                        </p>
                    </motion.div>
                </div>

                {/* Experience Cards */}
                <div className="grid md:grid-cols-3" style={{ gap: '1.5rem' }}>
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                            className="group overflow-hidden"
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(197,165,90,0.15)',
                                borderRadius: '4px',
                                transition: 'border-color 0.5s ease',
                            }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden" style={{ height: '200px' }}>
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    style={{ objectFit: 'cover' }}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(74,14,26,0.6), transparent 50%)', pointerEvents: 'none' }} />
                                <div className="absolute" style={{ bottom: '0.75rem', left: '0.75rem' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 500 }}>{exp.tagline}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '1.25rem' }}>
                                <h3 style={{
                                    color: 'white', fontSize: '1.1rem', fontWeight: 400,
                                    fontFamily: 'var(--font-heading), Georgia, serif',
                                    marginBottom: '0.6rem',
                                }}>{exp.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                                    {exp.description}
                                </p>

                                {exp.hasForm ? (
                                    <SugamDarshanForm />
                                ) : (
                                    <a
                                        href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi, I'm interested in the "${exp.title}" experience at Sri Shyam Villas.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-burgundy"
                                        style={{ width: '100%', justifyContent: 'center' }}
                                    >
                                        <MessageCircle size={12} />
                                        Book This Experience
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
