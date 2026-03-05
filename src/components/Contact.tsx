"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917307491291?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Sri%20Shyam%20Villas%2C%20Banaras";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [form, setForm] = useState({ name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "2", roomType: "Deluxe Room", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            await fetch("https://formspree.io/f/mkovvweo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ _subject: "Room Booking Inquiry — Sri Shyam Villas", ...form }),
            });
            setSubmitted(true);
            setForm({ name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "2", roomType: "Deluxe Room", message: "" });
        } catch {
            alert("Something went wrong. Please try again or WhatsApp us directly.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: '#1C1C1C' }} ref={ref}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <motion.div initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                        <span className="section-label" style={{ display: 'block' }}>Get In Touch</span>
                        <h2 className="section-title" style={{ marginTop: '0.5rem', color: 'white' }}>
                            Book Your Stay
                            <br /><span style={{ color: '#C5A55A', fontStyle: 'italic' }}>at Sri Shyam Villas</span>
                        </h2>
                        <div className="gold-divider" style={{ margin: '1rem auto' }} />
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-5" style={{ gap: '2.5rem' }}>
                    {/* Contact Info */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 style={{ color: 'white', fontSize: '1.1rem', fontFamily: 'var(--font-heading), Georgia, serif', fontWeight: 400, marginBottom: '1rem' }}>
                            We&apos;d love to hear from you
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            For the fastest response, reach us on WhatsApp. Our team is available 24/7 to assist with your booking.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a href="tel:+917307491291" className="flex items-center" style={{ gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textDecoration: 'none' }}>
                                <Phone size={13} style={{ color: '#C5A55A' }} />+91 73074 91291
                            </a>
                            <a href="mailto:srishyamvillas@gmail.com" className="flex items-center" style={{ gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textDecoration: 'none' }}>
                                <Mail size={13} style={{ color: '#C5A55A' }} />srishyamvillas@gmail.com
                            </a>
                            <div className="flex items-start" style={{ gap: '0.5rem' }}>
                                <MapPin size={13} style={{ color: '#C5A55A', marginTop: '2px', flexShrink: 0 }} />
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', lineHeight: 1.5 }}>D.61/3-A, Siddhagiribagh, Jahumandi,<br />Varanasi, UP 221010</span>
                            </div>
                        </div>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ marginTop: '1.5rem' }}>
                            <MessageCircle size={14} />
                            Chat on WhatsApp
                        </a>
                    </motion.div>

                    {/* Booking Form */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: '4px', padding: '1.5rem',
                        }}
                    >
                        {submitted ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <Sparkles size={28} style={{ color: '#C5A55A', margin: '0 auto 0.75rem' }} />
                                <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: 500, fontFamily: 'var(--font-heading), Georgia, serif', marginBottom: '0.4rem' }}>Inquiry Received</h3>
                                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', marginBottom: '1rem' }}>We&apos;ll respond within 2 hours. For instant booking, try WhatsApp.</p>
                                <button onClick={() => setSubmitted(false)} style={{ color: '#C5A55A', fontSize: '0.65rem', textDecoration: 'underline', textUnderlineOffset: '3px', border: 'none', background: 'none', cursor: 'pointer' }}>Submit another inquiry</button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '0.6rem' }}>
                                    <div><label className="form-label">Full Name</label><input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="form-input" placeholder="Your name" /></div>
                                    <div><label className="form-label">Phone</label><input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="form-input" placeholder="+91 XXXXX XXXXX" /></div>
                                </div>
                                <div><label className="form-label">Email</label><input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="form-input" placeholder="your@email.com" /></div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '0.6rem' }}>
                                    <div><label className="form-label">Check-in</label><input type="date" value={form.checkIn} onChange={e => setForm({ ...form, checkIn: e.target.value })} className="form-input" /></div>
                                    <div><label className="form-label">Check-out</label><input type="date" value={form.checkOut} onChange={e => setForm({ ...form, checkOut: e.target.value })} className="form-input" /></div>
                                    <div><label className="form-label">Guests</label>
                                        <select value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} className="form-input">
                                            {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={String(n)} style={{ color: 'black' }}>{n}</option>)}
                                        </select>
                                    </div>
                                    <div><label className="form-label">Room</label>
                                        <select value={form.roomType} onChange={e => setForm({ ...form, roomType: e.target.value })} className="form-input">
                                            {["Deluxe Room", "Deluxe Twin", "Premium Room", "Premium Balcony"].map(r => <option key={r} value={r} style={{ color: 'black' }}>{r}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div><label className="form-label">Message (optional)</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="form-input" rows={2} placeholder="Any special requests..." style={{ resize: 'none' }} /></div>
                                <button type="submit" disabled={sending} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    {sending ? "Sending..." : "Submit Booking Inquiry"}
                                    <Send size={12} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
