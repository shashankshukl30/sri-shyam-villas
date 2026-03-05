"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Maximize2, Users, Wifi, Wind, Eye, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917307491291";

const rooms = [
    {
        name: "Deluxe Room", tagline: "Classic Comfort", price: "3,368",
        images: [{ src: "/images/hotel/room-deluxe-1.jpg", alt: "Deluxe Room View 1" }, { src: "/images/hotel/room-deluxe-2.jpg", alt: "Deluxe Room View 2" }],
        features: [{ icon: Maximize2, label: "155 sq ft" }, { icon: Wifi, label: "Free Wi-Fi" }, { icon: Wind, label: "AC" }],
        description: "Thoughtfully appointed with plush bedding, warm lighting, and all the modern essentials — your perfect sanctuary after a day exploring Banaras.",
    },
    {
        name: "Premium Room", tagline: "Elevated Stay", price: "4,200",
        images: [{ src: "/images/hotel/room-premium-1.jpg", alt: "Premium Room View 1" }, { src: "/images/hotel/room-premium-2.jpg", alt: "Premium Room View 2" }],
        features: [{ icon: Maximize2, label: "170 sq ft" }, { icon: Wifi, label: "Free Wi-Fi" }, { icon: Wind, label: "AC" }],
        description: "More space, more comfort. Refined interiors, a larger workspace, and enhanced amenities — ideal for extended stays or the discerning traveller.",
    },
    {
        name: "Premium Balcony", tagline: "Room with a View", price: "4,800",
        images: [{ src: "/images/hotel/room-balcony-1.jpg", alt: "Premium Balcony View 1" }, { src: "/images/hotel/room-balcony-2.jpg", alt: "Premium Balcony View 2" }],
        features: [{ icon: Eye, label: "City View" }, { icon: Wifi, label: "Free Wi-Fi" }, { icon: Wind, label: "Balcony" }],
        description: "Begin every morning with your coffee and a sweeping view of the holy city from your private balcony — a truly unforgettable experience.",
    },
    {
        name: "Deluxe Twin", tagline: "Shared Comfort", price: "3,800",
        images: [{ src: "/images/hotel/room-twin-1.jpg", alt: "Deluxe Twin View 1" }, { src: "/images/hotel/room-twin-2.jpg", alt: "Deluxe Twin View 2" }],
        features: [{ icon: Users, label: "Twin Beds" }, { icon: Wifi, label: "Free Wi-Fi" }, { icon: Maximize2, label: "180 sq ft" }],
        description: "Perfect for families, friends, or fellow pilgrims — two comfortable beds, generous floor space, and all the amenities you'd expect.",
    },
];

function RoomCarousel({ images }: { images: { src: string; alt: string }[] }) {
    const [idx, setIdx] = useState(0);
    return (
        <div className="relative overflow-hidden" style={{ height: '200px', borderRadius: '4px 4px 0 0' }}>
            <AnimatePresence mode="wait">
                <motion.img key={idx} src={images[idx].src} alt={images[idx].alt}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                    className="w-full h-full absolute inset-0" style={{ objectFit: 'cover' }} />
            </AnimatePresence>
            {images.length > 1 && (
                <>
                    <button onClick={() => setIdx(p => (p - 1 + images.length) % images.length)}
                        className="absolute" style={{ top: '50%', left: '0.5rem', transform: 'translateY(-50%)', color: 'white', zIndex: 5, opacity: 0.6 }}><ChevronLeft size={16} /></button>
                    <button onClick={() => setIdx(p => (p + 1) % images.length)}
                        className="absolute" style={{ top: '50%', right: '0.5rem', transform: 'translateY(-50%)', color: 'white', zIndex: 5, opacity: 0.6 }}><ChevronRight size={16} /></button>
                </>
            )}
        </div>
    );
}

export default function Rooms() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="rooms" className="section-padding" style={{ backgroundColor: 'white' }} ref={ref}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <motion.div initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                        <span className="section-label" style={{ display: 'block' }}>Rooms & Suites</span>
                        <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                            Your Private
                            <br /><span style={{ color: '#6B1D2A', fontStyle: 'italic' }}>Retreat Awaits</span>
                        </h2>
                        <div className="gold-divider" style={{ margin: '1rem auto' }} />
                        <p className="section-subtitle" style={{ margin: '0 auto', marginTop: '0.5rem' }}>
                            Each room is impeccably maintained, thoughtfully furnished, and priced for real value. Book direct for the best rates.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: '1.25rem' }}>
                    {rooms.map((room, i) => (
                        <motion.div
                            key={room.name}
                            initial={{ opacity: 0, y: 25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group"
                            style={{
                                border: '1px solid #eee',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                transition: 'box-shadow 0.4s ease',
                            }}
                        >
                            <RoomCarousel images={room.images} />
                            <div style={{ padding: '1rem' }}>
                                <div className="flex items-center justify-between" style={{ marginBottom: '0.4rem' }}>
                                    <span style={{ color: '#C5A55A', fontSize: '0.5rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>{room.tagline}</span>
                                    <span style={{ color: '#6B1D2A', fontSize: '0.65rem', fontWeight: 600 }}>₹{room.price}<span style={{ color: '#999', fontWeight: 400, fontSize: '0.5rem' }}>/night</span></span>
                                </div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 400, fontFamily: 'var(--font-heading), Georgia, serif', color: '#1C1C1C', marginBottom: '0.4rem' }}>{room.name}</h3>
                                <div className="flex flex-wrap" style={{ gap: '0.6rem', marginBottom: '0.6rem' }}>
                                    {room.features.map(f => (
                                        <div key={f.label} className="flex items-center" style={{ gap: '0.25rem' }}>
                                            <f.icon size={11} style={{ color: '#999' }} />
                                            <span style={{ color: '#888', fontSize: '0.6rem' }}>{f.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <p style={{ color: '#888', fontSize: '0.7rem', lineHeight: 1.55, marginBottom: '0.75rem' }}>{room.description}</p>
                                <a
                                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi, I'd like to book the ${room.name} (₹${room.price}/night) at Sri Shyam Villas.`)}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="btn-whatsapp-sm"
                                    style={{ width: '100%', justifyContent: 'center' }}
                                >
                                    <MessageCircle size={12} />
                                    Book on WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
