"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Wifi, Car, UtensilsCrossed, Zap, ConciergeBell, ShieldCheck,
    Shirt, Plane, Clock, Building, MapPin as TourIcon, Coffee,
} from "lucide-react";

const amenities = [
    { icon: Wifi, name: "Free Wi-Fi", desc: "High-speed internet in all rooms & public areas" },
    { icon: UtensilsCrossed, name: "Restaurant", desc: "Local specialties & continental breakfast" },
    { icon: Car, name: "Free Parking", desc: "Complimentary off-site parking facility" },
    { icon: Zap, name: "Power Backup", desc: "Uninterrupted 24/7 power supply" },
    { icon: ConciergeBell, name: "Room Service", desc: "In-room dining available round the clock" },
    { icon: Clock, name: "24hr Front Desk", desc: "Always available to assist you" },
    { icon: Building, name: "Elevator", desc: "Easy access to all floors" },
    { icon: Shirt, name: "Laundry Service", desc: "Professional laundry & dry cleaning" },
    { icon: Plane, name: "Airport Shuttle", desc: "Convenient airport transfer service" },
    { icon: TourIcon, name: "Tour Assistance", desc: "Curated local tours & temple visits" },
    { icon: ShieldCheck, name: "Safety & Security", desc: "Round-the-clock security & CCTV" },
    { icon: Coffee, name: "Terrace Lounge", desc: "Scenic terrace with seating area" },
];

export default function Amenities() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="amenities"
            className="section-padding relative overflow-hidden"
            style={{ backgroundColor: '#1A1A2E' }}
            ref={ref}
        >
            {/* Background decorations */}
            <div className="absolute" style={{ top: '5rem', right: '5rem', width: '288px', height: '288px', background: 'rgba(201,169,110,0.05)', borderRadius: '50%', filter: 'blur(48px)' }} />
            <div className="absolute" style={{ bottom: '5rem', left: '5rem', width: '384px', height: '384px', background: 'rgba(201,169,110,0.03)', borderRadius: '50%', filter: 'blur(48px)' }} />

            <div className="max-w-7xl mx-auto relative" style={{ zIndex: 10 }}>
                {/* Header */}
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-label" style={{ display: 'block' }}>Facilities & Services</span>
                        <h2 className="section-title" style={{ marginTop: '1rem', color: 'white' }}>
                            Everything You Need,
                            <br />
                            <span style={{ color: '#C9A96E', fontStyle: 'italic', fontWeight: 400 }}>Nothing You Don&apos;t</span>
                        </h2>
                        <div className="gold-divider" style={{ margin: '1.5rem auto' }} />
                        <p className="section-subtitle" style={{ margin: '0 auto', marginTop: '1rem', color: 'rgba(255,255,255,0.55)' }}>
                            From high-speed Wi-Fi and 24/7 room service to airport transfers and curated temple tours — every detail is handled so you can focus on what matters: your experience in Varanasi.
                        </p>
                    </motion.div>
                </div>

                {/* Amenities Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: '1rem' }}>
                    {amenities.map((amenity, i) => (
                        <motion.div
                            key={amenity.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            className="group flex items-start"
                            style={{
                                gap: '1rem',
                                padding: '1.25rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                transition: 'all 0.5s ease',
                                cursor: 'default',
                            }}
                            whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(201,169,110,0.3)' }}
                        >
                            <div
                                className="flex items-center justify-center shrink-0"
                                style={{
                                    width: '40px', height: '40px',
                                    borderRadius: '8px',
                                    backgroundColor: 'rgba(201,169,110,0.1)',
                                    transition: 'background-color 0.5s ease',
                                }}
                            >
                                <amenity.icon size={18} style={{ color: '#C9A96E' }} />
                            </div>
                            <div>
                                <h3 style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.25rem' }}>{amenity.name}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', lineHeight: 1.5 }}>{amenity.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
