"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20rooms%20at%20Sri%20Shyam%20Villas";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formState, setFormState] = useState({
        name: "", email: "", phone: "", message: "",
        checkIn: "", checkOut: "", adults: "2", children: "0",
        roomType: "Deluxe Room", rooms: "1"
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
                body: JSON.stringify(formState),
            });
            setSubmitted(true);
            setFormState({
                name: "", email: "", phone: "", message: "",
                checkIn: "", checkOut: "", adults: "2", children: "0",
                roomType: "Deluxe Room", rooms: "1"
            });
        } catch {
            alert("Something went wrong. Please try again.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="section-padding relative overflow-hidden" style={{ backgroundColor: '#1A1A2E' }} ref={ref}>
            <div className="absolute inset-0" style={{ opacity: 0.05 }}>
                <div className="absolute inset-0" style={{ backgroundImage: `url('/images/hotel/about-2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </div>

            <div className="max-w-7xl mx-auto relative" style={{ zIndex: 10 }}>
                <div className="text-center" style={{ marginBottom: '4.5rem' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                        <span className="section-label" style={{ display: 'block' }}>Get in Touch</span>
                        <h2 className="section-title" style={{ marginTop: '1rem', color: 'white' }}>
                            We&apos;d Love to
                            <br />
                            <span style={{ color: '#C9A96E', fontStyle: 'italic', fontWeight: 400 }}>Hear from You</span>
                        </h2>
                        <div className="gold-divider" style={{ margin: '1.5rem auto' }} />
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-5" style={{ gap: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            Whether you have a question about availability, pricing, or anything else — our team is ready to assist.
                        </p>

                        {[
                            { icon: Phone, title: "Call Us", info: "+91 98765 43210", sub: "Available 24/7", href: "tel:+919876543210" },
                            { icon: Mail, title: "Email Us", info: "info@srishyamvillas.com", sub: "We reply within 24 hours", href: "mailto:info@srishyamvillas.com" },
                            { icon: MapPin, title: "Visit Us", info: "D.61/3-A, Siddhagiribagh", sub: "Varanasi, UP 221010", href: "https://maps.google.com/?q=Sri+Shyam+Villas+Varanasi" },
                        ].map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                target={item.title === "Visit Us" ? "_blank" : undefined}
                                rel={item.title === "Visit Us" ? "noopener noreferrer" : undefined}
                                className="flex items-start group"
                                style={{ gap: '1rem', textDecoration: 'none', marginBottom: '2rem' }}
                            >
                                <div className="flex items-center justify-center shrink-0" style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: 'rgba(201,169,110,0.1)', transition: 'background-color 0.5s ease' }}>
                                    <item.icon size={22} style={{ color: '#C9A96E' }} />
                                </div>
                                <div>
                                    <p style={{ color: 'white', fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>{item.title}</p>
                                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', transition: 'color 0.3s ease' }}>{item.info}</p>
                                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>{item.sub}</p>
                                </div>
                            </a>
                        ))}

                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp"
                            style={{ marginTop: '0.5rem' }}
                        >
                            <MessageCircle size={20} />
                            Chat on WhatsApp
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        {submitted ? (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '4rem 2rem', textAlign: 'center' }}>
                                <div className="flex items-center justify-center" style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(74,124,89,0.2)', margin: '0 auto 1rem' }}>
                                    <Send size={26} style={{ color: '#4A7C59' }} />
                                </div>
                                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-heading), Georgia, serif' }}>Thank You!</h3>
                                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem' }}>We&apos;ve received your message and will get back to you within 24 hours.</p>
                                <button onClick={() => setSubmitted(false)} style={{ marginTop: '1.5rem', color: '#C9A96E', fontSize: '0.95rem', textDecoration: 'underline', textUnderlineOffset: '4px', border: 'none', background: 'none', cursor: 'pointer' }}>
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '2.5rem' }}>
                                {/* Dates Row */}
                                <div className="grid sm:grid-cols-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
                                    <div>
                                        <label style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6rem' }}>Check-in Date</label>
                                        <input type="date" required value={formState.checkIn} onChange={(e) => setFormState({ ...formState, checkIn: e.target.value })}
                                            style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.9rem 1.25rem', color: 'white', fontSize: '1rem', outline: 'none' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6rem' }}>Check-out Date</label>
                                        <input type="date" required value={formState.checkOut} onChange={(e) => setFormState({ ...formState, checkOut: e.target.value })}
                                            style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.9rem 1.25rem', color: 'white', fontSize: '1rem', outline: 'none' }} />
                                    </div>
                                </div>

                                {/* Guests Row */}
                                <div className="grid sm:grid-cols-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
                                    <div>
                                        <label style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6rem' }}>Adults</label>
                                        <input type="number" min="1" required value={formState.adults} onChange={(e) => setFormState({ ...formState, adults: e.target.value })}
                                            style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.9rem 1.25rem', color: 'white', fontSize: '1rem', outline: 'none' }} placeholder="2" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6rem' }}>Children</label>
                                        <input type="number" min="0" value={formState.children} onChange={(e) => setFormState({ ...formState, children: e.target.value })}
                                            style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.9rem 1.25rem', color: 'white', fontSize: '1rem', outline: 'none' }} placeholder="0" />
                                    </div>
                                </div>

                                {/* Room Details Row */}
                                <div className="grid sm:grid-cols-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
                                    <div>
                                        <label style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6rem' }}>Room Type</label>
                                        <select value={formState.roomType} onChange={(e) => setFormState({ ...formState, roomType: e.target.value })}
                                            style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.9rem 1.25rem', color: 'white', fontSize: '1rem', outline: 'none' }}>
                                            <option value="Deluxe Room" style={{ color: 'black' }}>Deluxe Room</option>
                                            <option value="Deluxe Twin Room" style={{ color: 'black' }}>Deluxe Twin Room</option>
                                            <option value="Premium Room" style={{ color: 'black' }}>Premium Room</option>
                                            <option value="Premium Room with Balcony" style={{ color: 'black' }}>Premium Room with Balcony</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6rem' }}>No. of Rooms</label>
                                        <input type="number" min="1" required value={formState.rooms} onChange={(e) => setFormState({ ...formState, rooms: e.target.value })}
                                            style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.9rem 1.25rem', color: 'white', fontSize: '1rem', outline: 'none' }} placeholder="1" />
                                    </div>
                                </div>

                                {/* Personal Info Row */}
                                <div className="grid sm:grid-cols-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
                                    <div>
                                        <label style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6rem' }}>Full Name</label>
                                        <input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.9rem 1.25rem', color: 'white', fontSize: '1rem', outline: 'none' }} placeholder="Your name" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6rem' }}>Phone Number</label>
                                        <input type="tel" required value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                            style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.9rem 1.25rem', color: 'white', fontSize: '1rem', outline: 'none' }} placeholder="+91 XXXXX XXXXX" />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6rem' }}>Email</label>
                                    <input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.9rem 1.25rem', color: 'white', fontSize: '1rem', outline: 'none' }} placeholder="you@email.com" />
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6rem' }}>Special Requests</label>
                                    <textarea rows={3} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.9rem 1.25rem', color: 'white', fontSize: '1rem', outline: 'none', resize: 'none' }}
                                        placeholder="Any specific requirements..." />
                                </div>
                                <button type="submit" disabled={sending} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.1rem', borderRadius: '10px' }}>
                                    {sending ? "Sending Inquiry..." : "Submit Booking Inquiry"}
                                    <Send size={16} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
