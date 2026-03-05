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
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [lightbox, setLightbox] = useState<number | null>(null);
    const closeLightbox = () => setLightbox(null);
    const nextImage = () => setLightbox((p) => (p !== null ? (p + 1) % images.length : null));
    const prevImage = () => setLightbox((p) => (p !== null ? (p - 1 + images.length) % images.length : null));

    return (
        <section id="gallery" className="section-padding relative" style={{ backgroundColor: 'white' }} ref={ref}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <motion.div initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                        <span className="section-label" style={{ display: 'block' }}>Gallery</span>
                        <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                            See It for Yourself
                            <br /><span style={{ color: '#6B1D2A', fontStyle: 'italic' }}>Glimpses of Sri Shyam Villas</span>
                        </h2>
                        <div className="gold-divider" style={{ margin: '1rem auto' }} />
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ gridAutoRows: '180px', gap: '0.6rem' }}>
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            className={`${img.span} relative overflow-hidden cursor-pointer group`}
                            style={{ borderRadius: '4px' }}
                            onClick={() => setLightbox(i)}
                        >
                            <img src={img.src} alt={img.alt} className="w-full h-full transition-transform duration-700 group-hover:scale-105" style={{ objectFit: 'cover' }} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(74,14,26,0.3)' }}>
                                <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: 300 }}>+</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center"
                        style={{ zIndex: 200, backgroundColor: 'rgba(28,28,28,0.95)', backdropFilter: 'blur(20px)', padding: '1rem' }}
                        onClick={closeLightbox}
                    >
                        <button onClick={closeLightbox} className="absolute" style={{ top: '1.25rem', right: '1.25rem', color: 'rgba(255,255,255,0.5)', zIndex: 10 }}><X size={22} /></button>
                        <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute" style={{ left: '1.5rem', color: 'rgba(255,255,255,0.5)', zIndex: 10 }}><ChevronLeft size={28} /></button>
                        <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute" style={{ right: '1.5rem', color: 'rgba(255,255,255,0.5)', zIndex: 10 }}><ChevronRight size={28} /></button>
                        <motion.img key={lightbox} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.3 }}
                            src={images[lightbox].src} alt={images[lightbox].alt}
                            className="max-w-full" style={{ maxHeight: '85vh', objectFit: 'contain', borderRadius: '4px' }}
                            onClick={(e) => e.stopPropagation()} />
                        <div className="absolute" style={{ bottom: '1.25rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 500 }}>{lightbox + 1} / {images.length}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
