"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";

const nearbyPlaces = [
    { name: "Kashi Vishwanath Temple", distance: "2.6 km", time: "~10 min", type: "Temple" },
    { name: "Dashashwamedh Ghat", distance: "3.2 km", time: "~12 min", type: "Ghat" },
    { name: "Assi Ghat", distance: "5.0 km", time: "~18 min", type: "Ghat" },
    { name: "Sarnath (Buddhist Site)", distance: "9.0 km", time: "~30 min", type: "Heritage" },
    { name: "BHU (Banaras Hindu University)", distance: "5.0 km", time: "~20 min", type: "Landmark" },
    { name: "Varanasi Junction Station", distance: "2.0 km", time: "~8 min", type: "Transport" },
];

export default function Location() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="location" className="section-padding relative overflow-hidden" style={{ backgroundColor: 'white' }} ref={ref}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center" style={{ marginBottom: '4.5rem' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                        <span className="section-label" style={{ display: 'block' }}>Location</span>
                        <h2 className="section-title" style={{ marginTop: '1rem' }}>
                            In the Heart of
                            <br />
                            <span style={{ color: '#C9A96E', fontStyle: 'italic', fontWeight: 400 }}>the Holy City</span>
                        </h2>
                        <div className="gold-divider" style={{ margin: '1.5rem auto' }} />
                        <p className="section-subtitle" style={{ margin: '0 auto', marginTop: '1rem' }}>
                            Perfectly located in Siddhagiribagh, with easy access to Varanasi&apos;s most sacred sites.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-5" style={{ gap: '2.5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-3 overflow-hidden"
                        style={{ borderRadius: '20px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)', border: '1px solid rgba(232,213,183,0.2)', height: '480px' }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8!2d82.99425!3d25.31116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE4JzQwLjIiTiA4MsKwNTknMzkuMyJF!5e0!3m2!1sen!2sin!4v1&q=Sri+Shyam+Villas+Varanasi"
                            width="100%" height="100%" style={{ border: 0 }}
                            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sri Shyam Villas Location"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-2"
                    >
                        <div style={{ backgroundColor: '#FDFBF7', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(232,213,183,0.3)' }}>
                            <div className="flex items-start" style={{ gap: '0.75rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(232,213,183,0.3)' }}>
                                <MapPin size={20} style={{ color: '#C9A96E', marginTop: '3px', flexShrink: 0 }} />
                                <div>
                                    <h3 style={{ color: '#1A1A2E', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>Our Address</h3>
                                    <p style={{ color: '#6B6B6B', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                        D.61/3-A, Siddhagiribagh,<br />Jahumandi, Varanasi,<br />Uttar Pradesh 221010
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start" style={{ gap: '0.75rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(232,213,183,0.3)' }}>
                                <Clock size={20} style={{ color: '#C9A96E', marginTop: '3px', flexShrink: 0 }} />
                                <div>
                                    <h3 style={{ color: '#1A1A2E', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>Check-in / Check-out</h3>
                                    <p style={{ color: '#6B6B6B', fontSize: '0.95rem' }}>
                                        Check-in: <strong style={{ color: '#2D2D2D' }}>1:00 PM</strong> · Check-out: <strong style={{ color: '#2D2D2D' }}>12:00 PM</strong>
                                    </p>
                                </div>
                            </div>

                            <h3 className="flex items-center" style={{ color: '#1A1A2E', fontWeight: 700, fontSize: '1rem', gap: '0.5rem', marginBottom: '1.25rem' }}>
                                <Navigation size={16} style={{ color: '#C9A96E' }} />
                                Nearby Attractions
                            </h3>
                            <div>
                                {nearbyPlaces.map((place, i) => (
                                    <motion.div
                                        key={place.name}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                                        className="flex items-center justify-between"
                                        style={{ padding: '0.75rem 0', borderBottom: i < nearbyPlaces.length - 1 ? '1px solid rgba(232,213,183,0.15)' : 'none' }}
                                    >
                                        <div>
                                            <p style={{ color: '#2D2D2D', fontSize: '0.95rem', fontWeight: 600 }}>{place.name}</p>
                                            <p style={{ color: '#6B6B6B', fontSize: '0.7rem', fontWeight: 500 }}>{place.type}</p>
                                        </div>
                                        <div className="text-right">
                                            <p style={{ color: '#C9A96E', fontSize: '0.95rem', fontWeight: 700 }}>{place.distance}</p>
                                            <p style={{ color: '#6B6B6B', fontSize: '0.7rem' }}>{place.time}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
