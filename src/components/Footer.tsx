"use client";

import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917307491291?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Sri%20Shyam%20Villas%2C%20Varanasi";

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#12121F', color: 'white' }}>
            {/* CTA Banner */}
            <div style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #B8944F 100%)', padding: '3.5rem 1.5rem' }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between" style={{ gap: '2rem' }}>
                    <div>
                        <h3 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, fontFamily: 'var(--font-heading), Georgia, serif' }}>
                            Ready to Experience Varanasi?
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
                            Book your stay at Sri Shyam Villas and create unforgettable memories.
                        </p>
                    </div>
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp shrink-0"
                    >
                        <MessageCircle size={20} />
                        Book on WhatsApp
                    </a>
                </div>
            </div>

            {/* Footer Content */}
            <div className="max-w-7xl mx-auto" style={{ padding: '5rem 1.5rem' }}>
                <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: '3rem' }}>
                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: '1.25rem' }}>
                            <span style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-heading), Georgia, serif' }}>Sri Shyam</span>
                            <span style={{ display: 'block', color: '#C9A96E', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', marginTop: '-3px', fontWeight: 700 }}>Villas</span>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                            A premium boutique hotel in the heart of Varanasi, offering warm hospitality and modern comfort near the sacred Kashi Vishwanath Temple.
                        </p>
                        <div className="flex" style={{ gap: '0.75rem' }}>
                            {socialLinks.map((s) => (
                                <a key={s.label} href={s.href} aria-label={s.label}
                                    className="flex items-center justify-center"
                                    style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)', transition: 'all 0.3s ease', textDecoration: 'none' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A96E'; e.currentTarget.style.backgroundColor = 'rgba(201,169,110,0.1)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
                                >
                                    <s.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {quickLinks.map((link) => (
                                <li key={link.name} style={{ marginBottom: '0.75rem' }}>
                                    <a href={link.href} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.3s ease' }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>Contact</h4>
                        <div style={{ marginBottom: '1.25rem' }}>
                            <div className="flex items-start" style={{ gap: '0.75rem' }}>
                                <MapPin size={16} style={{ color: '#C9A96E', marginTop: '3px', flexShrink: 0 }} />
                                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: 1.6 }}>D.61/3-A, Siddhagiribagh,<br />Varanasi, UP 221010</span>
                            </div>
                        </div>
                        <a href="tel:+917307491291" className="flex items-center" style={{ gap: '0.75rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', textDecoration: 'none', marginBottom: '0.75rem' }}>
                            <Phone size={16} style={{ color: '#C9A96E', flexShrink: 0 }} />+91 73074 91291
                        </a>
                        <a href="mailto:srishyamvillas@gmail.com" className="flex items-center" style={{ gap: '0.75rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', textDecoration: 'none' }}>
                            <Mail size={16} style={{ color: '#C9A96E', flexShrink: 0 }} />srishyamvillas@gmail.com
                        </a>
                    </div>

                    {/* Book With Us */}
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>Book With Us</h4>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                            For the best rates and personalized service, book directly with us via WhatsApp.
                        </p>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                            className="btn-whatsapp-sm"
                        >
                            <MessageCircle size={16} />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem' }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between" style={{ gap: '1rem' }}>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
                        © {new Date().getFullYear()} Sri Shyam Villas. All rights reserved.
                    </p>
                    <p className="flex items-center" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', gap: '0.3rem' }}>
                        Designed & Developed by{" "}
                        <a href="https://digiocular.com" target="_blank" rel="noopener noreferrer"
                            style={{ color: '#C9A96E', fontWeight: 600, textDecoration: 'none' }}>
                            Digiocular
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
