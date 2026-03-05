"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, MapPin, Calendar, Users, MessageCircle, BedDouble } from "lucide-react";

const heroImages = [
    { src: "/images/hotel/hero-1.jpg", alt: "Sri Shyam Villas Exterior" },
    { src: "/images/hotel/hero-2.jpg", alt: "Luxurious Room Interior" },
    { src: "/images/hotel/hero-3.jpg", alt: "Premium Suite" },
];

const roomTypes = [
    "Deluxe Room",
    "Deluxe Twin Room",
    "Premium Room",
    "Premium Room with Balcony",
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const [form, setForm] = useState({
        checkIn: "", checkOut: "", guests: "2", roomType: roomTypes[0],
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleWhatsAppBook = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = [
            `Hi, I would like to book a room at Sri Shyam Villas, Banaras.`,
            form.checkIn ? `Check-in: ${form.checkIn}` : '',
            form.checkOut ? `Check-out: ${form.checkOut}` : '',
            `Guests: ${form.guests}`,
            `Room: ${form.roomType}`,
        ].filter(Boolean).join('\n');
        window.open(`https://wa.me/917307491291?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <section id="home" className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
            {/* ── Background Images ── */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImage}
                        src={heroImages[currentImage].src}
                        alt={heroImages[currentImage].alt}
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                    />
                </AnimatePresence>
                {/* Burgundy cinematic overlay */}
                <div className="absolute inset-0" style={{
                    background: `
                        linear-gradient(180deg,
                            rgba(30,8,14,0.72) 0%,
                            rgba(30,8,14,0.55) 35%,
                            rgba(30,8,14,0.55) 65%,
                            rgba(30,8,14,0.9) 100%
                        )
                    `,
                }} />
            </div>

            {/* ── Main Content ── */}
            <div className="relative max-w-7xl mx-auto px-6 flex flex-col justify-center" style={{ zIndex: 10, minHeight: '100vh', paddingTop: '7rem', paddingBottom: '3rem' }}>
                <div className="flex-1 flex flex-col justify-center items-center text-center" style={{ maxWidth: '820px', margin: '0 auto' }}>
                    {/* Pre-title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex items-center" style={{ gap: '0.6rem', marginBottom: '1.25rem' }}
                    >
                        <div style={{ width: '32px', height: '1px', backgroundColor: '#C5A55A' }} />
                        <span style={{
                            color: '#C5A55A', fontSize: '0.6rem', fontWeight: 600,
                            letterSpacing: '0.4em', textTransform: 'uppercase',
                        }}>
                            Premium Boutique Hotel
                        </span>
                        <div style={{ width: '32px', height: '1px', backgroundColor: '#C5A55A' }} />
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                            color: 'white',
                            fontFamily: 'var(--font-heading), Georgia, serif',
                            fontWeight: 700,
                            lineHeight: 1.15,
                            marginBottom: '1.25rem',
                            fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
                            letterSpacing: '0.02em',
                            textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 8px 60px rgba(0,0,0,0.7), 0 0 10px rgba(0,0,0,0.5)',
                        }}
                    >
                        Where Spirituality
                        <br />
                        <span style={{
                            fontStyle: 'italic', fontWeight: 400,
                            color: '#C5A55A',
                            textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.8)',
                        }}>
                            Meets Serenity
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        style={{
                            color: 'rgba(255,255,255,0.85)',
                            fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
                            maxWidth: '520px', marginBottom: '2rem',
                            fontWeight: 500, lineHeight: 1.75,
                            textShadow: '0 2px 15px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.5)',
                        }}
                    >
                        A refined retreat near the sacred Kashi Vishwanath Temple,
                        offering warm hospitality and timeless elegance in the heart of Banaras.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1 }}
                        className="flex flex-wrap justify-center" style={{ gap: '1.5rem', marginBottom: '2.5rem' }}
                    >
                        {[
                            { icon: Star, label: "601+ Ratings", value: "4.5 / 5" },
                            { icon: MapPin, label: "Kashi Temple", value: "1.5 km" },
                            { icon: Calendar, label: "Established", value: "2024" },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center" style={{ gap: '0.5rem' }}>
                                <stat.icon size={13} style={{ color: '#C5A55A', flexShrink: 0 }} />
                                <div>
                                    <p style={{ color: 'white', fontSize: '0.75rem', fontWeight: 600, lineHeight: 1.2 }}>{stat.value}</p>
                                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* ── Horizontal Booking Form ── */}
                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    onSubmit={handleWhatsAppBook}
                    className="w-full"
                    style={{
                        maxWidth: '900px', margin: '0 auto',
                        backgroundColor: 'rgba(28,28,28,0.6)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(197,165,90,0.2)',
                        borderRadius: '4px',
                        padding: '1.25rem 1.5rem',
                    }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-end" style={{ gap: '1rem' }}>
                        {/* Check-in */}
                        <div>
                            <label className="form-label"><Calendar size={10} style={{ display: 'inline', marginRight: '4px' }} />Check-in</label>
                            <input
                                type="date"
                                value={form.checkIn}
                                onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                                className="form-input"
                            />
                        </div>
                        {/* Check-out */}
                        <div>
                            <label className="form-label"><Calendar size={10} style={{ display: 'inline', marginRight: '4px' }} />Check-out</label>
                            <input
                                type="date"
                                value={form.checkOut}
                                onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                                className="form-input"
                            />
                        </div>
                        {/* Guests */}
                        <div>
                            <label className="form-label"><Users size={10} style={{ display: 'inline', marginRight: '4px' }} />Guests</label>
                            <select
                                value={form.guests}
                                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                                className="form-input"
                            >
                                {[1, 2, 3, 4, 5, 6].map(n => (
                                    <option key={n} value={String(n)} style={{ color: 'black' }}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                                ))}
                            </select>
                        </div>
                        {/* Room Type */}
                        <div>
                            <label className="form-label"><BedDouble size={10} style={{ display: 'inline', marginRight: '4px' }} />Room Type</label>
                            <select
                                value={form.roomType}
                                onChange={(e) => setForm({ ...form, roomType: e.target.value })}
                                className="form-input"
                            >
                                {roomTypes.map(r => (
                                    <option key={r} value={r} style={{ color: 'black' }}>{r}</option>
                                ))}
                            </select>
                        </div>
                        {/* Submit */}
                        <button type="submit" className="btn-whatsapp" style={{ width: '100%', justifyContent: 'center', padding: '0.65rem' }}>
                            <MessageCircle size={14} />
                            Book via WhatsApp
                        </button>
                    </div>
                </motion.form>
            </div>

            {/* Carousel dots */}
            <div className="absolute flex items-center" style={{ bottom: '1.25rem', left: '50%', transform: 'translateX(-50%)', gap: '0.35rem', zIndex: 20 }}>
                {heroImages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        style={{
                            width: currentImage === i ? '18px' : '5px',
                            height: '5px', borderRadius: '3px',
                            backgroundColor: currentImage === i ? '#C5A55A' : 'rgba(255,255,255,0.35)',
                            border: 'none', cursor: 'pointer', transition: 'all 0.3s ease',
                        }}
                    />
                ))}
            </div>

        </section>
    );
}
