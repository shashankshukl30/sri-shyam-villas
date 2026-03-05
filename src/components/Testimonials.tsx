"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
    { name: "Rajesh Kumar", location: "Delhi", rating: 5, text: "Exceptional hospitality! The staff went above and beyond during our Kashi Vishwanath darshan. Rooms were spotless and the location is unbeatable — just minutes from the temple.", date: "Feb 2025" },
    { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "We felt like family here. The owner personally ensured our comfort. The vegetarian food was delicious and the temple assistance service saved us hours of waiting.", date: "Jan 2025" },
    { name: "Amit Tiwari", location: "Lucknow", rating: 4, text: "Clean rooms, great service, and the perfect base for exploring Varanasi. The balcony room with the city view was the highlight of our trip.", date: "Dec 2024" },
    { name: "Sunita Devi", location: "Patna", rating: 5, text: "Our third visit to Sri Shyam Villas and it keeps getting better. The Sugam Darshan assistance and Ganga Aarti boat arrangement made our pilgrimage truly special.", date: "Nov 2024" },
    { name: "Vikram Singh", location: "Jaipur", rating: 5, text: "Premium hotel at an honest price. Modern amenities, excellent Wi-Fi, and the staff remembers your preferences. Will definitely return.", date: "Oct 2024" },
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrent(p => (p + 1) % reviews.length), 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="section-padding" style={{ backgroundColor: '#4A0E1A' }} ref={ref}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center" style={{ marginBottom: '2.5rem' }}>
                    <motion.div initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                        <span className="section-label" style={{ display: 'block' }}>Guest Reviews</span>
                        <h2 className="section-title" style={{ marginTop: '0.5rem', color: 'white' }}>
                            What Our Guests
                            <br /><span style={{ color: '#C5A55A', fontStyle: 'italic' }}>Say About Us</span>
                        </h2>
                        <div className="gold-divider" style={{ margin: '1rem auto' }} />
                    </motion.div>
                </div>

                {/* Review Carousel */}
                <div className="max-w-2xl mx-auto text-center relative" style={{ minHeight: '220px' }}>
                    <Quote size={24} style={{ color: 'rgba(197,165,90,0.2)', margin: '0 auto 1rem' }} />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p style={{
                                color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.75,
                                fontFamily: 'var(--font-accent), Georgia, serif',
                                fontStyle: 'italic', marginBottom: '1.5rem',
                            }}>
                                &ldquo;{reviews[current].text}&rdquo;
                            </p>
                            <div className="flex items-center justify-center" style={{ gap: '0.25rem', marginBottom: '0.6rem' }}>
                                {Array.from({ length: reviews[current].rating }).map((_, j) => (
                                    <Star key={j} size={11} style={{ color: '#C5A55A', fill: '#C5A55A' }} />
                                ))}
                            </div>
                            <p style={{ color: 'white', fontSize: '0.8rem', fontWeight: 500, fontFamily: 'var(--font-heading), Georgia, serif' }}>{reviews[current].name}</p>
                            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.6rem', letterSpacing: '0.15em' }}>{reviews[current].location} · {reviews[current].date}</p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Nav */}
                    <div className="flex items-center justify-center" style={{ gap: '1rem', marginTop: '1.5rem' }}>
                        <button onClick={() => setCurrent(p => (p - 1 + reviews.length) % reviews.length)} style={{ color: 'rgba(255,255,255,0.3)' }}><ChevronLeft size={16} /></button>
                        <div className="flex" style={{ gap: '0.3rem' }}>
                            {reviews.map((_, i) => (
                                <button key={i} onClick={() => setCurrent(i)} style={{
                                    width: current === i ? '14px' : '4px', height: '4px', borderRadius: '2px',
                                    backgroundColor: current === i ? '#C5A55A' : 'rgba(255,255,255,0.2)',
                                    border: 'none', cursor: 'pointer', transition: 'all 0.3s ease',
                                }} />
                            ))}
                        </div>
                        <button onClick={() => setCurrent(p => (p + 1) % reviews.length)} style={{ color: 'rgba(255,255,255,0.3)' }}><ChevronRight size={16} /></button>
                    </div>
                </div>
            </div>
        </section>
    );
}
