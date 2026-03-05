"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Train, Landmark, Waves } from "lucide-react";

const categories = [
    {
        title: "Transport", icon: Train, places: [
            { name: "(BSB) Varanasi Junction", dist: "1.8 km" },
            { name: "(BSBS) Banaras Railway Station", dist: "2.5 km" },
        ],
    },
    {
        title: "Sacred Temples", icon: Landmark, places: [
            { name: "Sri Kashi Vishwanath Jee Temple", dist: "1.5 km" },
            { name: "Vishalakshi Temple", dist: "1.8 km" },
            { name: "Kashi Annapurna Devi Temple", dist: "1.5 km" },
            { name: "Kaal Bhairav Temple", dist: "1.8 km" },
            { name: "Maha Mrityunjay Mandir", dist: "2.5 km" },
            { name: "Chintamani Ganesh Temple", dist: "2.4 km" },
            { name: "Gauri Kedareshwar", dist: "2.5 km" },
            { name: "Shri Mani Mandir", dist: "2.5 km" },
            { name: "Tulsi Manas Mandir", dist: "2.8 km" },
            { name: "Durga Mata Mandir", dist: "2.8 km" },
            { name: "Sankat Mochan Mandir", dist: "3.5 km" },
            { name: "BHU Birla Temple", dist: "5 km" },
        ],
    },
    {
        title: "Ghats & Landmarks", icon: Waves, places: [
            { name: "Dashashwamedh Ghat", dist: "1 km" },
            { name: "Dhanwantari Koop", dist: "2.5 km" },
            { name: "Namo Ghat", dist: "8.5 km" },
            { name: "Sarnath", dist: "11.1 km" },
            { name: "Ramnagar", dist: "7.3 km" },
        ],
    },
];

export default function Location() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="location" className="section-padding" style={{ backgroundColor: '#FAF6F0' }} ref={ref}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <motion.div initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                        <span className="section-label" style={{ display: 'block' }}>Location</span>
                        <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                            In the Heart of
                            <br /><span style={{ color: '#6B1D2A', fontStyle: 'italic' }}>Sacred Banaras</span>
                        </h2>
                        <div className="gold-divider" style={{ margin: '1rem auto' }} />
                        <p className="section-subtitle" style={{ margin: '0 auto', marginTop: '0.5rem' }}>
                            Ideally situated in Siddhagiribagh — close enough to Banaras&apos;s sacred heart, yet peaceful enough to truly rest.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2" style={{ gap: '2rem' }}>
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden"
                        style={{ borderRadius: '4px', minHeight: '400px', border: '1px solid #eee' }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14427.683407981313!2d82.9866164!3d25.3068595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2df80ae798a3%3A0xf6956276805d7b5!2sSri%20Shyam%20Villas!5e0!3m2!1sen!2sin!4v1709647248102!5m2!1sen!2sin"
                            width="100%" height="100%"
                            style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Sri Shyam Villas Location"
                        />
                    </motion.div>

                    {/* Distances */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center" style={{ gap: '0.5rem', marginBottom: '1.25rem' }}>
                            <MapPin size={14} style={{ color: '#6B1D2A' }} />
                            <span style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>Distances from Sri Shyam Villas</span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {categories.map((cat) => (
                                <div key={cat.title}>
                                    <div className="flex items-center" style={{ gap: '0.35rem', marginBottom: '0.6rem' }}>
                                        <cat.icon size={12} style={{ color: '#C5A55A' }} />
                                        <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#C5A55A', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{cat.title}</span>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        {cat.places.map((p, pi) => (
                                            <div key={p.name} className="flex items-center justify-between" style={{ padding: '0.45rem 0.5rem', borderBottom: pi < cat.places.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none', borderRadius: '3px' }}>
                                                <span style={{ color: '#444', fontSize: '0.78rem', fontWeight: 500 }}>{p.name}</span>
                                                <span style={{ color: '#6B1D2A', fontSize: '0.72rem', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '1.5rem', backgroundColor: 'rgba(107,29,42,0.07)', padding: '0.15rem 0.5rem', borderRadius: '20px' }}>{p.dist}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
