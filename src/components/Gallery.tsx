"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    { src: "/images/hotel/hero-1.jpg", alt: "Sri Shyam Villas Exterior", span: "col-span-2 row-span-2" },
    { src: "/images/hotel/room-deluxe-1.jpg", alt: "Deluxe Room", span: "" },
    { src: "/images/hotel/about-1.jpg", alt: "Hotel Ambiance", span: "" },
    { src: "/images/hotel/room-premium-1.jpg", alt: "Premium Suite", span: "" },
    { src: "/images/hotel/room-balcony-1.jpg", alt: "Balcony Room", span: "row-span-2" },
    { src: "/images/hotel/hero-2.jpg", alt: "Elegant Interiors", span: "" },
    { src: "/images/hotel/room-balcony-2.jpg", alt: "City Views", span: "" },
    { src: "/images/hotel/about-3.jpg", alt: "Hotel Amenities", span: "" },
];

export default function Gallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [lightbox, setLightbox] = useState<number | null>(null);

    const closeLightbox = () => setLightbox(null);
    const nextImage = () => setLightbox((prev) => (prev !== null ? (prev + 1) % images.length : null));
    const prevImage = () => setLightbox((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));

    return (
        <section id="gallery" className="section-padding relative" style={{ backgroundColor: 'white' }} ref={ref}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center" style={{ marginBottom: '4.5rem' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                        <span className="section-label" style={{ display: 'block' }}>Gallery</span>
                        <h2 className="section-title" style={{ marginTop: '1rem' }}>
                            See It for Yourself
                            <br />
                            <span style={{ color: '#C9A96E', fontStyle: 'italic', fontWeight: 400 }}>Glimpses of Sri Shyam Villas</span>
                        </h2>
                        <div className="gold-divider" style={{ margin: '1.5rem auto' }} />
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ gridAutoRows: '220px', gap: '1rem' }}>
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            className={`${img.span} relative overflow-hidden cursor-pointer group`}
                            style={{ borderRadius: '16px' }}
                            onClick={() => setLightbox(i)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                                style={{ objectFit: 'cover' }}
                                loading={i === 0 ? 'eager' : 'lazy'}
                                decoding="async"
                            />
                            <div
                                className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                                style={{ backgroundColor: 'transparent' }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(26,26,46,0.4)')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                            >
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: 'white', fontSize: '2rem', fontWeight: 300 }}>+</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center"
                        style={{ zIndex: 200, backgroundColor: 'rgba(26,26,46,0.95)', backdropFilter: 'blur(20px)', padding: '1rem' }}
                        onClick={closeLightbox}
                    >
                        <button onClick={closeLightbox} className="absolute" style={{ top: '1.5rem', right: '1.5rem', color: 'rgba(255,255,255,0.6)', zIndex: 10 }}><X size={30} /></button>
                        <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute" style={{ left: '2rem', color: 'rgba(255,255,255,0.6)', zIndex: 10 }}><ChevronLeft size={40} /></button>
                        <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute" style={{ right: '2rem', color: 'rgba(255,255,255,0.6)', zIndex: 10 }}><ChevronRight size={40} /></button>
                        <motion.img
                            key={lightbox}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            src={images[lightbox].src}
                            alt={images[lightbox].alt}
                            className="max-w-full"
                            style={{ maxHeight: '85vh', objectFit: 'contain', borderRadius: '12px' }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="absolute" style={{ bottom: '1.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 600 }}>
                            {lightbox + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
