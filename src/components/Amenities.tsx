"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wifi, Car, Utensils, Clock, Plane, Snowflake, Tv, Shield, Compass } from "lucide-react";

const amenities = [
    { icon: Wifi, name: "High-Speed Wi-Fi", desc: "Complimentary across all rooms and common areas" },
    { icon: Utensils, name: "In-House Restaurant", desc: "Pure vegetarian cuisine, room service available" },
    { icon: Car, name: "Free Parking", desc: "Secure on-site parking for guests" },
    { icon: Clock, name: "24/7 Room Service", desc: "Round-the-clock assistance at your doorstep" },
    { icon: Plane, name: "Airport Transfer", desc: "Pick-up and drop-off arranged on request" },
    { icon: Snowflake, name: "Air Conditioning", desc: "Climate-controlled rooms for year-round comfort" },
    { icon: Tv, name: "Smart TV", desc: "Flat-screen with streaming and cable channels" },
    { icon: Shield, name: "24/7 Security", desc: "CCTV surveillance and trained staff" },
    { icon: Compass, name: "Temple & Tour Assistance", desc: "We help plan your darshan and sightseeing" },
];

export default function Amenities() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="amenities" className="section-padding relative overflow-hidden" style={{ backgroundColor: '#1C1C1C' }} ref={ref}>
            <div className="max-w-7xl mx-auto relative" style={{ zIndex: 10 }}>
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <motion.div initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                        <span className="section-label" style={{ display: 'block' }}>Amenities</span>
                        <h2 className="section-title" style={{ marginTop: '0.5rem', color: 'white' }}>
                            Every Detail,
                            <br /><span style={{ color: '#C5A55A', fontStyle: 'italic' }}>Thoughtfully Considered</span>
                        </h2>
                        <div className="gold-divider" style={{ margin: '1rem auto' }} />
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
                            From high-speed Wi-Fi and 24/7 room service to airport transfers and curated temple tours — every detail is handled.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: '0.75rem' }}>
                    {amenities.map((a, i) => (
                        <motion.div
                            key={a.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            style={{
                                padding: '1.25rem',
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                borderRadius: '4px',
                                transition: 'border-color 0.3s ease',
                            }}
                        >
                            <a.icon size={18} style={{ color: '#C5A55A', marginBottom: '0.6rem' }} />
                            <h4 style={{ color: 'white', fontSize: '0.75rem', fontWeight: 500, fontFamily: 'var(--font-heading), Georgia, serif', marginBottom: '0.25rem' }}>{a.name}</h4>
                            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem', lineHeight: 1.5 }}>{a.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
