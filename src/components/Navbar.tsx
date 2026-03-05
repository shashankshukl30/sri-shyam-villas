"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917307491291?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Sri%20Shyam%20Villas%2C%20Varanasi";

const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Experiences", href: "#experiences" },
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
                    backgroundColor: scrolled ? 'rgba(74,14,26,0.97)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(16px)' : 'none',
                    boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.15)' : 'none',
                    padding: scrolled ? '0.5rem 0' : '0.9rem 0',
                    borderBottom: scrolled ? '1px solid rgba(197,165,90,0.15)' : 'none',
                }}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo — Single Line */}
                    <a href="#home" style={{ zIndex: 10, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{
                            fontFamily: 'var(--font-heading), Georgia, serif',
                            color: 'white', fontSize: '1.35rem', fontWeight: 400,
                            letterSpacing: '0.04em',
                        }}>
                            Sri Shyam Villas
                        </span>
                        <span style={{ fontSize: '1rem', lineHeight: 1, color: '#C5A55A' }}>☀</span>
                        <span style={{
                            fontFamily: 'var(--font-heading), Georgia, serif',
                            color: '#C5A55A', fontSize: '1.35rem', fontWeight: 400,
                            letterSpacing: '0.04em',
                        }}>
                            Banaras
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center" style={{ gap: '2rem' }}>
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    color: 'rgba(255,255,255,0.75)',
                                    fontSize: '0.65rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#C5A55A')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center" style={{ gap: '0.75rem' }}>
                        <a
                            href="tel:+917307491291"
                            className="flex items-center"
                            style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', gap: '0.35rem', textDecoration: 'none', fontWeight: 500, letterSpacing: '0.1em' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#C5A55A')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                        >
                            <Phone size={12} />
                            <span>Call Us</span>
                        </a>
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp-sm"
                        >
                            <MessageCircle size={12} />
                            Book Now
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden" style={{ color: 'white', zIndex: 110 }} aria-label="Toggle menu">
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
                            backgroundColor: '#4A0E1A',
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center',
                        }}
                    >
                        <div className="flex flex-col items-center" style={{ gap: '1.75rem' }}>
                            {links.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                                    onClick={() => setMobileOpen(false)}
                                    style={{
                                        color: 'rgba(255,255,255,0.85)', fontSize: '1.3rem',
                                        fontFamily: 'var(--font-heading), Georgia, serif', fontWeight: 400,
                                        textDecoration: 'none', letterSpacing: '0.04em',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C5A55A')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="btn-whatsapp"
                                style={{ marginTop: '0.75rem' }}
                            >
                                <MessageCircle size={14} />
                                Book via WhatsApp
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
