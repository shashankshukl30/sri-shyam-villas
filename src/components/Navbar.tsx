"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Sri%20Shyam%20Villas%2C%20Varanasi";

const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
                    transition: 'all 0.5s ease',
                    backgroundColor: scrolled ? 'rgba(26,26,46,0.95)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(16px)' : 'none',
                    boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.2)' : 'none',
                    padding: scrolled ? '0.6rem 0' : '1.25rem 0',
                }}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" style={{ zIndex: 10, textDecoration: 'none' }}>
                        <span style={{ fontFamily: 'var(--font-heading), Georgia, serif', color: 'white', fontSize: '1.75rem', fontWeight: 800 }}>
                            Sri Shyam
                        </span>
                        <span style={{ display: 'block', color: '#C9A96E', fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', marginTop: '-3px', fontWeight: 700 }}>
                            Villas
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center" style={{ gap: '2.5rem' }}>
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    color: 'rgba(255,255,255,0.8)',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center" style={{ gap: '1rem' }}>
                        <a
                            href="tel:+919876543210"
                            className="flex items-center"
                            style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', gap: '0.5rem', textDecoration: 'none', fontWeight: 500 }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                        >
                            <Phone size={15} />
                            <span>Call Us</span>
                        </a>
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp-sm"
                        >
                            <MessageCircle size={15} />
                            Book Now
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden" style={{ color: 'white', zIndex: 110 }} aria-label="Toggle menu">
                        {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed', inset: 0, zIndex: 100,
                            backgroundColor: '#1A1A2E',
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center',
                        }}
                    >
                        <div className="flex flex-col items-center" style={{ gap: '2.25rem' }}>
                            {links.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                                    onClick={() => setMobileOpen(false)}
                                    style={{
                                        color: 'rgba(255,255,255,0.85)', fontSize: '1.75rem',
                                        fontFamily: 'var(--font-heading), Georgia, serif', fontWeight: 600,
                                        textDecoration: 'none', letterSpacing: '0.03em',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="btn-whatsapp"
                                style={{ marginTop: '1rem' }}
                            >
                                <MessageCircle size={20} />
                                Book via WhatsApp
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
