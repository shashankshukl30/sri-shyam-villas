"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Gem, MapPin, Heart, Shield } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

const usps = [
    {
        icon: MapPin,
        title: "Prime Location",
        desc: "Minutes from Kashi Vishwanath Temple & the sacred Ganges ghats",
    },
    {
        icon: Heart,
        title: "Warm Hospitality",
        desc: "Rated 4.4/5 for exceptional staff courtesy and personalized care",
    },
    {
        icon: Gem,
        title: "Modern Elegance",
        desc: "Newly built property with contemporary design and traditional charm",
    },
    {
        icon: Shield,
        title: "Complete Comfort",
        desc: "24/7 service, power backup, free Wi-Fi, and premium amenities",
    },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section-padding relative overflow-hidden" style={{ backgroundColor: 'white' }} ref={ref}>
            {/* Background decoration */}
            <div
                className="absolute rounded-full"
                style={{
                    top: 0, right: 0, width: '384px', height: '384px',
                    background: 'linear-gradient(to bottom-left, rgba(201,169,110,0.05), transparent)',
                    transform: 'translate(50%, -50%)',
                }}
            />

            <div className="max-w-7xl mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Left: Text Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="section-label">Our Story</span>
                            <h2 className="section-title" style={{ marginTop: '1rem' }}>
                                A Sanctuary of Peace
                                <br />
                                <span style={{ color: '#C9A96E', fontStyle: 'italic', fontWeight: 400 }}>in the Holy City</span>
                            </h2>
                            <div className="gold-divider" />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ color: '#6B6B6B', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}
                        >
                            Nestled in the serene lanes of Siddhagiribagh, Sri Shyam Villas offers a
                            tranquil escape from the vibrant bustle of Varanasi. Our boutique property
                            is thoughtfully designed to blend contemporary comfort with the spiritual
                            essence of one of the world&apos;s oldest living cities.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            style={{ color: '#6B6B6B', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}
                        >
                            Whether you&apos;re here for a spiritual pilgrimage to the revered Kashi
                            Vishwanath Temple, to witness the mesmerizing Ganga Aarti, or simply to
                            explore the timeless charm of Varanasi — our dedicated team ensures every
                            moment of your stay is nothing short of extraordinary.
                        </motion.p>

                        <motion.blockquote
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{
                                borderLeft: '2px solid #C9A96E',
                                paddingLeft: '1.5rem',
                                fontStyle: 'italic',
                                color: '#2D2D2D',
                                fontSize: '1.15rem',
                                fontFamily: 'var(--font-accent), Georgia, serif',
                            }}
                        >
                            &ldquo;The best hospitality I&apos;ve experienced in Varanasi. The staff goes above
                            and beyond to make you feel at home.&rdquo;
                            <span
                                style={{
                                    display: 'block',
                                    color: '#C9A96E',
                                    fontSize: '0.85rem',
                                    marginTop: '0.5rem',
                                    fontStyle: 'normal',
                                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                                }}
                            >
                                — Guest Review, MakeMyTrip
                            </span>
                        </motion.blockquote>
                    </div>

                    {/* Right: Image Collage */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Main image carousel */}
                            <div className="relative overflow-hidden" style={{ borderRadius: '16px', boxShadow: '0 25px 60px rgba(0,0,0,0.1)', aspectRatio: '4/5' }}>
                                <ImageCarousel images={[
                                    { src: "/images/hotel/about-1.jpg", alt: "Sri Shyam Villas - Our Story 1" },
                                    { src: "/images/hotel/about-2.jpg", alt: "Sri Shyam Villas - Our Story 2" },
                                    { src: "/images/hotel/about-3.jpg", alt: "Sri Shyam Villas - Our Story 3" },
                                ]} interval={4000} />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.3), transparent)' }} />
                            </div>

                            {/* Floating accent image */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="absolute overflow-hidden"
                                style={{
                                    bottom: '-2rem',
                                    left: '-2rem',
                                    width: 'clamp(140px, 20vw, 208px)',
                                    height: 'clamp(140px, 20vw, 208px)',
                                    borderRadius: '12px',
                                    border: '4px solid white',
                                    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                                }}
                            >
                                <img
                                    src="/images/hotel/hero-3.jpg"
                                    alt="Varanasi Hotel Detail"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </motion.div>

                            {/* Rating Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                                className="absolute flex flex-col items-center justify-center"
                                style={{
                                    top: '-1rem',
                                    right: '-1rem',
                                    width: '96px',
                                    height: '96px',
                                    borderRadius: '50%',
                                    backgroundColor: '#C9A96E',
                                    color: 'white',
                                    boxShadow: '0 10px 30px rgba(201,169,110,0.4)',
                                }}
                            >
                                <span style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: 'var(--font-heading), Georgia, serif' }}>4.4</span>
                                <span style={{ fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Rating</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* USP Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginTop: '6rem' }}>
                    {usps.map((usp, i) => (
                        <motion.div
                            key={usp.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                            className="group"
                            style={{
                                padding: '1.5rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(232,213,183,0.4)',
                                backgroundColor: '#FDFBF7',
                                transition: 'all 0.5s ease',
                                cursor: 'default',
                            }}
                            whileHover={{ y: -4, boxShadow: '0 15px 40px rgba(201,169,110,0.08)' }}
                        >
                            <div
                                className="flex items-center justify-center"
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '8px',
                                    backgroundColor: 'rgba(201,169,110,0.1)',
                                    marginBottom: '1rem',
                                }}
                            >
                                <usp.icon size={22} style={{ color: '#C9A96E' }} />
                            </div>
                            <h3
                                style={{
                                    color: '#1A1A2E',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    fontFamily: 'var(--font-heading), Georgia, serif',
                                }}
                            >
                                {usp.title}
                            </h3>
                            <p style={{ color: '#6B6B6B', fontSize: '0.85rem', lineHeight: 1.6 }}>{usp.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
