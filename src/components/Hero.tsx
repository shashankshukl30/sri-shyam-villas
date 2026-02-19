"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Star, MapPin, Calendar, Shield } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Sri%20Shyam%20Villas%2C%20Varanasi";

const heroImages = [
    { src: "/images/hotel/hero-1.jpg", alt: "Sri Shyam Villas Exterior" },
    { src: "/images/hotel/hero-2.jpg", alt: "Luxurious Room Interior" },
    { src: "/images/hotel/hero-3.jpg", alt: "Premium Suite" },
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
            {/* ── Background: Rich warm gradient ── */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
                        radial-gradient(ellipse 80% 60% at 70% 20%, rgba(201,169,110,0.12) 0%, rgba(180,130,70,0.04) 40%, transparent 70%),
                        radial-gradient(ellipse 60% 50% at 20% 80%, rgba(80,50,140,0.06) 0%, transparent 50%),
                        radial-gradient(ellipse 50% 40% at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 50%),
                        linear-gradient(165deg, #0C0C1B 0%, #141425 20%, #1A1832 40%, #1E1A30 60%, #16132A 80%, #0C0C1B 100%)
                    `,
                }}
            />

            {/* Subtle dot grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'radial-gradient(rgba(201,169,110,0.04) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                    pointerEvents: 'none',
                }}
            />

            {/* Floating gold particles */}
            <div className="absolute inset-0 overflow-hidden" style={{ pointerEvents: 'none' }}>
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: i % 2 === 0 ? '4px' : '3px',
                            height: i % 2 === 0 ? '4px' : '3px',
                            backgroundColor: 'rgba(201,169,110,0.4)',
                            left: `${12 + i * 15}%`,
                            top: `${25 + (i % 3) * 20}%`,
                        }}
                        animate={{ y: [-25, 25, -25], opacity: [0.1, 0.5, 0.1] }}
                        transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                    />
                ))}
            </div>

            {/* ── Main Content ── */}
            <div className="relative max-w-7xl mx-auto px-6" style={{ zIndex: 10, paddingTop: '9rem', paddingBottom: '2rem' }}>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center" style={{ minHeight: 'calc(100vh - 13rem)' }}>

                    {/* ── Left: Text (7 cols) ── */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex items-center"
                            style={{ gap: '0.75rem', marginBottom: '1.75rem' }}
                        >
                            <div style={{ width: '48px', height: '1.5px', backgroundColor: '#C9A96E' }} />
                            <span style={{
                                color: '#C9A96E', fontSize: '0.8rem', fontWeight: 700,
                                letterSpacing: '0.35em', textTransform: 'uppercase',
                            }}>
                                Welcome to Varanasi&apos;s Finest
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                            style={{
                                color: 'white',
                                fontFamily: 'var(--font-heading), Georgia, serif',
                                fontWeight: 800,
                                lineHeight: 1.2,
                                marginBottom: '1.5rem',
                                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                                letterSpacing: '-0.02em',
                                paddingBottom: '0.2rem', // Prevent descender clipping
                            }}
                        >
                            Where Spirituality
                            <br />
                            <span style={{
                                fontStyle: 'italic', fontWeight: 400,
                                background: 'linear-gradient(135deg, #C9A96E, #E8D5B7, #C9A96E)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                paddingRight: '0.1em', // Prevent italic clipping
                            }}>
                                Meets Serenity
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            style={{
                                color: 'rgba(255,255,255,0.5)',
                                fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                                maxWidth: '480px', marginBottom: '2.5rem',
                                fontWeight: 400, lineHeight: 1.8,
                            }}
                        >
                            A premium boutique retreat near the sacred Kashi Vishwanath Temple,
                            offering warm hospitality and timeless elegance in the heart of Varanasi.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1 }}
                            className="flex flex-col sm:flex-row" style={{ gap: '1rem', marginBottom: '3rem' }}
                        >
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                                <MessageCircle size={18} />
                                Book via WhatsApp
                            </a>
                            <a href="#rooms" className="btn-outline">
                                Explore Rooms
                            </a>
                        </motion.div>

                        {/* Stats row — glass cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.3 }}
                            className="flex flex-wrap"
                            style={{ gap: '0.75rem' }}
                        >
                            {[
                                { icon: Star, label: "Guest Rating", value: "4.4 / 5" },
                                { icon: MapPin, label: "Kashi Temple", value: "4.7 km" },
                                { icon: Calendar, label: "Established", value: "2024" },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="flex items-center"
                                    style={{
                                        gap: '0.65rem',
                                        backgroundColor: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '14px',
                                        padding: '0.7rem 1.1rem',
                                        backdropFilter: 'blur(8px)',
                                    }}
                                >
                                    <stat.icon size={15} style={{ color: '#C9A96E', flexShrink: 0 }} />
                                    <div>
                                        <p style={{ color: 'white', fontSize: '0.85rem', fontWeight: 700, lineHeight: 1.2 }}>
                                            {stat.value}
                                        </p>
                                        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── Right: Auto-scrolling image carousel (5 cols) ── */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        {/* Decorative gold frame */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                            className="absolute"
                            style={{
                                top: '-14px', right: '-14px', bottom: '40px', left: '14px',
                                border: '1px solid rgba(201,169,110,0.12)',
                                borderRadius: '20px',
                                zIndex: 0,
                            }}
                        />

                        {/* Main carousel image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="relative overflow-hidden"
                            style={{
                                borderRadius: '20px',
                                boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.3)',
                                zIndex: 1,
                                height: '520px',
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImage}
                                    src={heroImages[currentImage].src}
                                    alt={heroImages[currentImage].alt}
                                    initial={{ opacity: 0, scale: 1.08 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                                />
                            </AnimatePresence>

                            {/* Gradient overlay */}
                            <div className="absolute inset-0" style={{
                                background: 'linear-gradient(to top, rgba(12,12,27,0.6) 0%, transparent 35%, rgba(12,12,27,0.1) 100%)',
                                zIndex: 2,
                            }} />

                            {/* Rating pill */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1.4, type: "spring" }}
                                className="absolute flex items-center"
                                style={{
                                    top: '1rem', left: '1rem',
                                    backgroundColor: 'rgba(255,255,255,0.95)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '12px',
                                    padding: '0.5rem 0.85rem',
                                    gap: '0.35rem',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                                    zIndex: 3,
                                }}
                            >
                                <Star size={13} style={{ color: '#C9A96E', fill: '#C9A96E' }} />
                                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1A1A2E' }}>4.4</span>
                                <span style={{ fontSize: '0.65rem', color: '#888', fontWeight: 500 }}>/ 5</span>
                            </motion.div>

                            {/* Location tag */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.6 }}
                                className="absolute flex items-center"
                                style={{
                                    bottom: '1rem', left: '1rem',
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '10px',
                                    padding: '0.45rem 0.8rem',
                                    gap: '0.4rem',
                                    zIndex: 3,
                                }}
                            >
                                <MapPin size={12} style={{ color: '#C9A96E' }} />
                                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>Varanasi, India</span>
                            </motion.div>

                            {/* Carousel dots */}
                            <div className="absolute flex items-center" style={{ bottom: '1rem', right: '1rem', gap: '0.4rem', zIndex: 3 }}>
                                {heroImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentImage(i)}
                                        style={{
                                            width: currentImage === i ? '20px' : '6px',
                                            height: '6px',
                                            borderRadius: '3px',
                                            backgroundColor: currentImage === i ? '#C9A96E' : 'rgba(255,255,255,0.4)',
                                            border: 'none',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Trust badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
                            className="absolute flex items-center justify-center"
                            style={{
                                bottom: '3rem', right: '-0.5rem',
                                width: '64px', height: '64px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #C9A96E, #E8D5B7)',
                                boxShadow: '0 8px 25px rgba(201,169,110,0.4)',
                                zIndex: 2,
                            }}
                        >
                            <Shield size={24} style={{ color: '#1A1A2E' }} />
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="flex justify-center"
                    style={{ paddingTop: '0.5rem' }}
                >
                    <motion.a
                        href="#about"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center" style={{ gap: '0.25rem', cursor: 'pointer', textDecoration: 'none' }}
                    >
                        <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.55rem', letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 600 }}>
                            Discover More
                        </span>
                        <ChevronDown size={14} style={{ color: 'rgba(201,169,110,0.4)' }} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
