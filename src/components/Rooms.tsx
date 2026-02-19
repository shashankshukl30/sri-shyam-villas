"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Maximize2, Wifi, Wind, Eye, Users, MessageCircle } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

const WHATSAPP_LINK = "https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Sri%20Shyam%20Villas%2C%20Varanasi";

const rooms = [
    {
        name: "Deluxe Room",
        tagline: "Classic Comfort",
        price: "3,368",
        images: [
            { src: "/images/hotel/room-deluxe-1.jpg", alt: "Deluxe Room View 1" },
            { src: "/images/hotel/room-deluxe-2.jpg", alt: "Deluxe Room View 2" },
        ],
        features: [
            { icon: Maximize2, label: "155 sq ft" },
            { icon: Wifi, label: "Free Wi-Fi" },
            { icon: Wind, label: "AC" },
        ],
        description: "Elegantly appointed with modern amenities, our Deluxe Room offers the perfect blend of comfort and style for the discerning traveler.",
    },
    {
        name: "Premium Room",
        tagline: "Elevated Stay",
        price: "4,200",
        images: [
            { src: "/images/hotel/room-premium-1.jpg", alt: "Premium Room View 1" },
            { src: "/images/hotel/room-premium-2.jpg", alt: "Premium Room View 2" },
        ],
        features: [
            { icon: Maximize2, label: "170 sq ft" },
            { icon: Wifi, label: "Free Wi-Fi" },
            { icon: Wind, label: "AC" },
        ],
        description: "Spacious and thoughtfully designed, our Premium Room features refined interiors with extra space to relax and unwind.",
    },
    {
        name: "Premium Balcony",
        tagline: "Room with a View",
        price: "4,800",
        images: [
            { src: "/images/hotel/room-balcony-1.jpg", alt: "Premium Balcony View 1" },
            { src: "/images/hotel/room-balcony-2.jpg", alt: "Premium Balcony View 2" },
        ],
        features: [
            { icon: Eye, label: "City View" },
            { icon: Wifi, label: "Free Wi-Fi" },
            { icon: Wind, label: "Balcony" },
        ],
        description: "Wake up to stunning city views from your private balcony. A premium experience with panoramic views of the holy city.",
    },
    {
        name: "Deluxe Twin",
        tagline: "Shared Comfort",
        price: "3,800",
        images: [
            { src: "/images/hotel/room-twin-1.jpg", alt: "Deluxe Twin View 1" },
            { src: "/images/hotel/room-twin-2.jpg", alt: "Deluxe Twin View 2" },
        ],
        features: [
            { icon: Users, label: "Twin Beds" },
            { icon: Wifi, label: "Free Wi-Fi" },
            { icon: Maximize2, label: "180 sq ft" },
        ],
        description: "Perfect for friends or fellow pilgrims, our spacious Deluxe Twin room offers two comfortable beds with all premium amenities.",
    },
];

export default function Rooms() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="rooms"
            className="section-padding relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #FDFBF7 0%, #FFFFFF 50%, #FDFBF7 100%)' }}
            ref={ref}
        >
            <div className="max-w-7xl mx-auto text-center" style={{ marginBottom: '4.5rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Accommodations</span>
                    <h2 className="section-title" style={{ marginTop: '1rem' }}>
                        Thoughtfully Designed
                        <br />
                        <span style={{ color: '#C9A96E', fontStyle: 'italic', fontWeight: 400 }}>for Your Comfort</span>
                    </h2>
                    <div className="gold-divider" style={{ margin: '1.5rem auto' }} />
                    <p className="section-subtitle" style={{ margin: '0 auto', marginTop: '1rem' }}>
                        Each room is a personal sanctuary, designed to make your Varanasi experience truly unforgettable.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2" style={{ gap: '2.5rem' }}>
                {rooms.map((room, i) => (
                    <motion.div
                        key={room.name}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: i * 0.15 }}
                        className="group relative overflow-hidden"
                        style={{
                            backgroundColor: 'white', borderRadius: '20px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                            border: '1px solid rgba(232,213,183,0.25)',
                            transition: 'all 0.6s ease',
                        }}
                    >
                        <div className="relative overflow-hidden" style={{ height: '320px' }}>
                            <ImageCarousel
                                images={room.images}
                                interval={5000 + i * 1000} // Staggered timing for natural feel
                                className="transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.7), transparent 50%)', pointerEvents: 'none', zIndex: 10 }} />

                            <div className="absolute" style={{ top: '1.25rem', right: '1.25rem', backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderRadius: '12px', padding: '0.6rem 1.25rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', zIndex: 20 }}>
                                <span style={{ display: 'block', fontSize: '0.6rem', color: '#6B6B6B', lineHeight: 1 }}>from</span>
                                <span style={{ display: 'block', color: '#1A1A2E', fontWeight: 800, fontSize: '1.4rem', fontFamily: 'var(--font-heading), Georgia, serif' }}>
                                    ₹{room.price}
                                </span>
                                <span style={{ fontSize: '0.55rem', color: '#6B6B6B' }}>/night</span>
                            </div>

                            <div className="absolute" style={{ bottom: '1.25rem', left: '1.25rem', zIndex: 20 }}>
                                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
                                    {room.tagline}
                                </span>
                                <h3 style={{ color: 'white', fontSize: '1.75rem', fontWeight: 800, fontFamily: 'var(--font-heading), Georgia, serif' }}>
                                    {room.name}
                                </h3>
                            </div>
                        </div>

                        <div style={{ padding: '2rem' }}>
                            <p style={{ color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                                {room.description}
                            </p>

                            <div className="flex flex-wrap" style={{ gap: '1.25rem', marginBottom: '1.75rem' }}>
                                {room.features.map((f, j) => (
                                    <div key={j} className="flex items-center" style={{ gap: '0.5rem', color: '#6B6B6B' }}>
                                        <f.icon size={15} style={{ color: '#C9A96E' }} />
                                        <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{f.label}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href={`${WHATSAPP_LINK}%20-%20${encodeURIComponent(room.name)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp-sm"
                            >
                                <MessageCircle size={15} />
                                Book on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
