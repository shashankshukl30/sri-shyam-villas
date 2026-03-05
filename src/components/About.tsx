"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Heart, Sparkles, MapPin, Star, Clock } from "lucide-react";

const usps = [
    { icon: Shield, title: "Trusted Hospitality", desc: "Warm, attentive service that makes you feel at home." },
    { icon: MapPin, title: "Prime Location", desc: "1.5 km from Kashi Vishwanath, 1 km from Dashashwamedh Ghat." },
    { icon: Sparkles, title: "Thoughtful Details", desc: "Premium linens, curated amenities, and a personal touch." },
    { icon: Clock, title: "Temple Assistance", desc: "We help you plan darshan, pooja, and ghat visits." },
    { icon: Heart, title: "Family-Friendly", desc: "Spacious rooms, safe environment, and warm meals." },
    { icon: Star, title: "Value for Money", desc: "Premium experience at honest prices. Book direct for best rates." },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="about" className="section-padding" style={{ backgroundColor: '#FAF6F0' }} ref={ref}>
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 items-center" style={{ gap: '4rem' }}>
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden" style={{ borderRadius: '4px' }}>
                            <img
                                src="/images/hotel/about-1.jpg"
                                alt="Sri Shyam Villas Interior"
                                className="w-full"
                                style={{ objectFit: 'cover', height: '420px' }}
                            />
                        </div>
                        <div className="absolute overflow-hidden" style={{ bottom: '-1.5rem', right: '-1rem', width: '55%', borderRadius: '4px', border: '4px solid #FAF6F0' }}>
                            <img
                                src="/images/hotel/about-3.jpg"
                                alt="Hotel Ambiance"
                                className="w-full"
                                style={{ objectFit: 'cover', height: '200px' }}
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    {/* Text */}
                    <div>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                            <span className="section-label" style={{ display: 'block' }}>About Us</span>
                            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                                A Warm Welcome
                                <br />
                                <span style={{ color: '#6B1D2A', fontStyle: 'italic' }}>In the Heart of Kashi</span>
                            </h2>
                            <div className="gold-divider" />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ color: '#5A5A5A', fontSize: '0.85rem', lineHeight: 1.75, marginBottom: '1rem' }}
                        >
                            Nestled in the quiet lanes of Siddhagiribagh, Sri Shyam Villas was born from a simple belief — that every guest deserves to feel at home in one of the world&apos;s most extraordinary cities. Our boutique property blends the warmth of Indian hospitality with the elegance of modern design.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            style={{ color: '#5A5A5A', fontSize: '0.85rem', lineHeight: 1.75, marginBottom: '1.5rem' }}
                        >
                            Whether you&apos;re here to seek blessings at the revered Kashi Vishwanath Temple, witness the soul-stirring Ganga Aarti at dusk, or simply let Banaras work its timeless magic — our team is devoted to making every detail of your stay perfect.
                        </motion.p>

                        <motion.blockquote
                            initial={{ opacity: 0, x: 15 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            style={{
                                borderLeft: '2px solid #C5A55A',
                                paddingLeft: '1rem',
                                fontFamily: 'var(--font-accent), Georgia, serif',
                                color: '#6B1D2A',
                                fontStyle: 'italic',
                                fontSize: '1rem',
                                lineHeight: 1.6,
                            }}
                        >
                            &ldquo;Where every guest becomes family, and every stay becomes a cherished memory.&rdquo;
                        </motion.blockquote>
                    </div>
                </div>

                {/* USP Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: '1rem', marginTop: '4rem' }}>
                    {usps.map((usp, i) => (
                        <motion.div
                            key={usp.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
                            style={{
                                padding: '1.25rem',
                                border: '1px solid rgba(107,29,42,0.08)',
                                borderRadius: '4px',
                                transition: 'border-color 0.3s ease',
                            }}
                        >
                            <usp.icon size={18} style={{ color: '#6B1D2A', marginBottom: '0.6rem' }} />
                            <h4 style={{ fontSize: '0.8rem', fontWeight: 500, color: '#1C1C1C', marginBottom: '0.3rem', fontFamily: 'var(--font-heading), Georgia, serif' }}>
                                {usp.title}
                            </h4>
                            <p style={{ color: '#888', fontSize: '0.72rem', lineHeight: 1.55 }}>{usp.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
