"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

const experiences = [
    {
        id: "sugam-darshan",
        title: "Sugam Darshan Assistance",
        tagline: "Temple Visit Made Easy",
        description: "We help you secure priority Sugam Darshan tickets for the sacred Sri Kashi Vishwanath Temple — so you can focus on your spiritual journey, not the queue. Share your visit details and our team will take care of the rest.",
        image: "/images/hotel/exp-darshan.jpg",
        formSubject: "Sugam Darshan Request",
        fields: [
            { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true, half: true },
            { name: "phone", label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true, half: true },
            { name: "darshanDate", label: "Preferred Date", type: "date", placeholder: "", required: true, half: true },
            { name: "persons", label: "Number of People", type: "select", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], required: false, half: true },
            { name: "requests", label: "Special Requests", type: "text", placeholder: "Any specific requirements...", required: false, half: false },
        ],
        submitLabel: "Request Darshan Booking",
    },
    {
        id: "ganga-aarti",
        title: "Ganga Aarti & Boat Ride",
        tagline: "An Evening You'll Never Forget",
        description: "Witness the soul-stirring Ganga Aarti from the serenity of a private boat. As bells ring and flames dance on the river, you'll experience Banaras at its most sacred and spectacular — a memory etched forever.",
        image: "/images/hotel/exp-aarti.jpg",
        formSubject: "Ganga Aarti & Boat Ride Booking",
        fields: [
            { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true, half: true },
            { name: "phone", label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true, half: true },
            { name: "preferredDate", label: "Preferred Date", type: "date", placeholder: "", required: true, half: true },
            { name: "persons", label: "Number of People", type: "select", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], required: false, half: true },
            { name: "requests", label: "Special Requests", type: "text", placeholder: "Timing preference, special occasion...", required: false, half: false },
        ],
        submitLabel: "Book Aarti & Boat Ride",
    },
    {
        id: "yoga-riverside",
        title: "Riverside Yoga Session",
        tagline: "Begin Your Day in Balance",
        description: "Greet the sunrise with a guided yoga session on the banks of the Ganges. Breathe in the river breeze, feel the ancient energy of Kashi, and carry the calm with you through the rest of your journey.",
        image: "/images/hotel/exp-yoga.jpg",
        formSubject: "Riverside Yoga Session Booking",
        fields: [
            { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true, half: true },
            { name: "phone", label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true, half: true },
            { name: "preferredDate", label: "Preferred Date", type: "date", placeholder: "", required: true, half: true },
            { name: "persons", label: "Number of People", type: "select", options: [1, 2, 3, 4, 5, 6], required: false, half: true },
            { name: "requests", label: "Special Requests", type: "text", placeholder: "Experience level, health conditions...", required: false, half: false },
        ],
        submitLabel: "Book Yoga Session",
    },
];

type FieldDef = {
    name: string; label: string; type: string;
    placeholder?: string; required?: boolean; half?: boolean;
    options?: number[];
};

function ExperienceForm({ exp }: { exp: typeof experiences[0] }) {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    const updateField = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            await fetch("https://formspree.io/f/mkovvweo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    _subject: `${exp.formSubject} — Sri Shyam Villas`,
                    experience: exp.title,
                    ...formData,
                }),
            });
            setSubmitted(true);
            setFormData({});
        } catch {
            alert("Something went wrong. Please try again or contact us on WhatsApp.");
        } finally {
            setSending(false);
        }
    };

    if (submitted) {
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '1.5rem' }}>
                <Sparkles size={24} style={{ color: '#C5A55A', margin: '0 auto 0.6rem' }} />
                <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.3rem' }}>Request Received!</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>Our team will confirm your {exp.title} booking shortly.</p>
                <button onClick={() => setSubmitted(false)} style={{ marginTop: '0.6rem', color: '#C5A55A', fontSize: '0.7rem', textDecoration: 'underline', textUnderlineOffset: '3px', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 600 }}>
                    Submit another request
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {/* Render field pairs */}
            {(() => {
                const rows: FieldDef[][] = [];
                let currentRow: FieldDef[] = [];
                exp.fields.forEach((f) => {
                    if (f.half) {
                        currentRow.push(f);
                        if (currentRow.length === 2) { rows.push(currentRow); currentRow = []; }
                    } else {
                        if (currentRow.length > 0) { rows.push(currentRow); currentRow = []; }
                        rows.push([f]);
                    }
                });
                if (currentRow.length > 0) rows.push(currentRow);

                return rows.map((row, ri) => (
                    <div key={ri} className={row.length === 2 ? "grid grid-cols-1 sm:grid-cols-2" : ""} style={{ gap: '0.6rem' }}>
                        {row.map((field) => (
                            <div key={field.name}>
                                <label className="form-label">{field.label}</label>
                                {field.type === 'select' ? (
                                    <select value={formData[field.name] || (field.options ? String(field.options[1] || field.options[0]) : '')}
                                        onChange={(e) => updateField(field.name, e.target.value)} className="form-input">
                                        {field.options?.map(n => (
                                            <option key={n} value={String(n)} style={{ color: 'black' }}>{n} {n === 1 ? 'Person' : 'People'}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input type={field.type} required={field.required}
                                        value={formData[field.name] || ''} onChange={(e) => updateField(field.name, e.target.value)}
                                        className="form-input" placeholder={field.placeholder} />
                                )}
                            </div>
                        ))}
                    </div>
                ));
            })()}
            <button type="submit" disabled={sending} className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.2rem' }}>
                {sending ? "Submitting..." : exp.submitLabel}
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
            <div className="absolute inset-0" style={{ opacity: 0.03 }}>
                <div className="absolute inset-0" style={{ backgroundImage: `url('/images/hotel/hero-1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </div>

            <div className="max-w-7xl mx-auto relative" style={{ zIndex: 10 }}>
                <div className="text-center" style={{ marginBottom: '3.5rem' }}>
                    <motion.div initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                        <span className="section-label" style={{ display: 'block' }}>Curated Experiences</span>
                        <h2 className="section-title" style={{ marginTop: '0.75rem', color: 'white' }}>
                            Beyond a Stay,
                            <br />
                            <span style={{ color: '#C5A55A', fontStyle: 'italic', fontWeight: 400 }}>An Experience</span>
                        </h2>
                        <div className="gold-divider" style={{ margin: '1rem auto' }} />
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7, fontWeight: 400 }}>
                            We go beyond accommodation — curating moments that make your Banaras journey truly unforgettable.
                        </p>
                    </motion.div>
                </div>

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
                            }}
                        >
                            <div className="relative overflow-hidden" style={{ height: '200px' }}>
                                <img src={exp.image} alt={exp.title}
                                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    style={{ objectFit: 'cover' }} loading="lazy" />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(74,14,26,0.6), transparent 50%)', pointerEvents: 'none' }} />
                                <div className="absolute" style={{ bottom: '0.75rem', left: '0.75rem' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>{exp.tagline}</span>
                                </div>
                            </div>

                            <div style={{ padding: '1.25rem' }}>
                                <h3 style={{
                                    color: 'white', fontSize: '1.15rem', fontWeight: 600,
                                    fontFamily: 'var(--font-heading), Georgia, serif',
                                    marginBottom: '0.5rem',
                                }}>{exp.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                                    {exp.description}
                                </p>
                                <ExperienceForm exp={exp} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
