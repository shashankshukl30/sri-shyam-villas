"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
    { name: "Rajesh Kumar", location: "Delhi", rating: 5, text: "Absolutely wonderful stay! The rooms are spotlessly clean and the staff is incredibly polite and helpful. Location is convenient for visiting Kashi Vishwanath Temple. The breakfast was delicious with great variety. Will definitely visit again!", date: "January 2026" },
    { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "Best hospitality I've experienced in Varanasi. From the warm welcome at check-in to the personalized recommendations for local temples and ghats — everything was perfect. The room was comfortable with all modern amenities.", date: "December 2025" },
    { name: "Ankit Verma", location: "Bangalore", rating: 4, text: "A hidden gem in Varanasi! The hotel is newly built with very clean and well-maintained rooms. Staff goes out of their way to help. The food served in the room was home-style and absolutely delicious. Peaceful atmosphere perfect for a spiritual trip.", date: "November 2025" },
    { name: "Meera Patel", location: "Ahmedabad", rating: 5, text: "We stayed here during our Kashi yatra and it was the perfect base. The owner personally ensured we had everything we needed. Rooms are cozy with traditional touches. Great value for money — highly recommended!", date: "October 2025" },
    { name: "Suresh Iyer", location: "Chennai", rating: 4, text: "Very impressed with the property. It's a new establishment but they've got everything right — from cleanliness to service quality. The terrace area is lovely. Staff helped arrange our temple visit schedule beautifully.", date: "September 2025" },
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => { setDirection(1); setCurrent((prev) => (prev + 1) % reviews.length); }, 6000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (index: number) => { setDirection(index > current ? 1 : -1); setCurrent(index); };

    const slideVariants = {
        enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
    };

    return (
        <section
            id="testimonials"
            className="section-padding relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #FDFBF7, #F3EDE2, #FDFBF7)' }}
            ref={ref}
        >
            <div className="max-w-5xl mx-auto">
                <div className="text-center" style={{ marginBottom: '4.5rem' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                        <span className="section-label" style={{ display: 'block' }}>Guest Experiences</span>
                        <h2 className="section-title" style={{ marginTop: '1rem' }}>
                            What Our Guests
                            <br />
                            <span style={{ color: '#C9A96E', fontStyle: 'italic', fontWeight: 400 }}>Are Saying</span>
                        </h2>
                        <div className="gold-divider" style={{ margin: '1.5rem auto' }} />
                    </motion.div>
                </div>

                <div className="relative" style={{ minHeight: '340px' }}>
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div key={current} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} className="text-center px-4">
                            <Quote size={42} style={{ color: 'rgba(201,169,110,0.3)', margin: '0 auto 1.5rem' }} />
                            <p style={{ color: '#2D2D2D', fontFamily: 'var(--font-accent), Georgia, serif', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem', fontStyle: 'italic' }}>
                                &ldquo;{reviews[current].text}&rdquo;
                            </p>
                            <div className="flex items-center justify-center" style={{ gap: '0.25rem', marginBottom: '1rem' }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} style={{ color: i < reviews[current].rating ? '#C9A96E' : '#E8D5B7', fill: i < reviews[current].rating ? '#C9A96E' : 'none' }} />
                                ))}
                            </div>
                            <p style={{ color: '#1A1A2E', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{reviews[current].name}</p>
                            <p style={{ color: '#6B6B6B', fontSize: '0.85rem', marginTop: '0.25rem' }}>{reviews[current].location} · {reviews[current].date}</p>
                        </motion.div>
                    </AnimatePresence>

                    <button onClick={() => goTo((current - 1 + reviews.length) % reviews.length)}
                        className="absolute"
                        style={{ left: 0, top: '50%', transform: 'translateY(-50%)', width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #E8D5B7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A96E', backgroundColor: 'transparent', cursor: 'pointer', transition: 'all 0.3s ease' }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#C9A96E'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = '#C9A96E'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#C9A96E'; e.currentTarget.style.borderColor = '#E8D5B7'; }}
                    ><ChevronLeft size={20} /></button>
                    <button onClick={() => goTo((current + 1) % reviews.length)}
                        className="absolute"
                        style={{ right: 0, top: '50%', transform: 'translateY(-50%)', width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #E8D5B7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A96E', backgroundColor: 'transparent', cursor: 'pointer', transition: 'all 0.3s ease' }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#C9A96E'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = '#C9A96E'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#C9A96E'; e.currentTarget.style.borderColor = '#E8D5B7'; }}
                    ><ChevronRight size={20} /></button>
                </div>

                <div className="flex items-center justify-center" style={{ gap: '0.5rem', marginTop: '2.5rem' }}>
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            style={{
                                width: i === current ? '2rem' : '0.5rem', height: '0.5rem', borderRadius: '999px', border: 'none', cursor: 'pointer',
                                backgroundColor: i === current ? '#C9A96E' : '#E8D5B7', transition: 'all 0.5s ease',
                            }}
                        />
                    ))}
                </div>

                {/* Overall Rating */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                    style={{ marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(232,213,183,0.3)' }}
                >
                    <div className="inline-flex items-center" style={{ gap: '1.5rem' }}>
                        <div className="text-center">
                            <span style={{ fontSize: '3.5rem', fontWeight: 800, color: '#1A1A2E', display: 'block', fontFamily: 'var(--font-heading), Georgia, serif' }}>4.4</span>
                            <span style={{ fontSize: '0.75rem', color: '#6B6B6B', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>out of 5</span>
                        </div>
                        <div style={{ height: '50px', width: '1px', backgroundColor: 'rgba(232,213,183,0.5)' }} />
                        <div className="text-left">
                            <div className="flex" style={{ gap: '0.25rem', marginBottom: '0.4rem' }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} style={{ color: '#C9A96E', fill: i < 4 ? '#C9A96E' : 'rgba(201,169,110,0.3)' }} />
                                ))}
                            </div>
                            <p style={{ color: '#6B6B6B', fontSize: '0.85rem', fontWeight: 500 }}>Based on 200+ verified reviews</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
