"use client";

import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917307491291?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Sri%20Shyam%20Villas%2C%20Banaras";

const quickLinks = [
    { name: "Home", href: "#home" }, { name: "About Us", href: "#about" },
    { name: "Rooms", href: "#rooms" }, { name: "Experiences", href: "#experiences" },
    { name: "Gallery", href: "#gallery" }, { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#0F0F0F', color: 'white' }}>
            {/* CTA Banner */}
            <div style={{ background: 'linear-gradient(135deg, #6B1D2A 0%, #4A0E1A 100%)', padding: '2.5rem 1.5rem' }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between" style={{ gap: '1.5rem' }}>
                    <div>
                        <h3 style={{ color: 'white', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 400, fontFamily: 'var(--font-heading), Georgia, serif' }}>
                            Ready to Experience Banaras?
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                            Book directly with us for the best rates, instant confirmation, and a personalised welcome.
                        </p>
                    </div>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp shrink-0">
                        <MessageCircle size={14} />
                        Book on WhatsApp
                    </a>
                </div>
            </div>

            {/* Footer Content */}
            <div className="max-w-7xl mx-auto" style={{ padding: '3.5rem 1.5rem' }}>
                <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem' }}>
                    {/* Brand */}
                    <div>
                        <div className="flex items-center" style={{ gap: '0.3rem', marginBottom: '0.8rem' }}>
                            <span style={{ fontSize: '1.3rem', fontWeight: 400, fontFamily: 'var(--font-heading), Georgia, serif' }}>Sri Shyam Villas</span>
                            <span style={{ fontSize: '0.9rem' }}>☀</span>
                            <span style={{ color: '#C5A55A', fontSize: '1.3rem', fontWeight: 400, fontFamily: 'var(--font-heading), Georgia, serif' }}>Banaras</span>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                            A premium boutique hotel in the heart of Banaras, offering warm hospitality and modern comfort near the sacred Kashi Vishwanath Temple.
                        </p>
                        <div className="flex" style={{ gap: '0.5rem' }}>
                            {socialLinks.map((s) => (
                                <a key={s.label} href={s.href} aria-label={s.label}
                                    className="flex items-center justify-center"
                                    style={{ width: '32px', height: '32px', borderRadius: '2px', backgroundColor: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)', transition: 'all 0.3s ease', textDecoration: 'none' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C5A55A'; e.currentTarget.style.backgroundColor = 'rgba(197,165,90,0.1)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; }}
                                >
                                    <s.icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {quickLinks.map((link) => (
                                <li key={link.name} style={{ marginBottom: '0.5rem' }}>
                                    <a href={link.href} style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textDecoration: 'none', transition: 'color 0.3s ease' }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C5A55A')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>Contact</h4>
                        <div style={{ marginBottom: '0.75rem' }}>
                            <div className="flex items-start" style={{ gap: '0.5rem' }}>
                                <MapPin size={12} style={{ color: '#C5A55A', marginTop: '2px', flexShrink: 0 }} />
                                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', lineHeight: 1.5 }}>D.61/3-A, Siddhagiribagh,<br />Varanasi, UP 221010</span>
                            </div>
                        </div>
                        <a href="tel:+917307491291" className="flex items-center" style={{ gap: '0.5rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textDecoration: 'none', marginBottom: '0.5rem' }}>
                            <Phone size={12} style={{ color: '#C5A55A' }} />+91 73074 91291
                        </a>
                        <a href="mailto:srishyamvillas@gmail.com" className="flex items-center" style={{ gap: '0.5rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textDecoration: 'none' }}>
                            <Mail size={12} style={{ color: '#C5A55A' }} />srishyamvillas@gmail.com
                        </a>
                    </div>

                    {/* Book */}
                    <div>
                        <h4 style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>Book With Us</h4>
                        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                            For the best rates and personalized service, book directly via WhatsApp.
                        </p>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-sm">
                            <MessageCircle size={12} />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '1rem 1.5rem' }}>
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center" style={{ gap: '0.4rem' }}>
                    <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.65rem', textAlign: 'center' }}>
                        © {new Date().getFullYear()} Sri Shyam Villas. All rights reserved.
                    </p>
                    <p className="flex items-center" style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.65rem', gap: '0.2rem' }}>
                        Designed &amp; Developed by{" "}
                        <a href="https://digiocular.com" target="_blank" rel="noopener noreferrer" style={{ color: '#C5A55A', fontWeight: 600, textDecoration: 'none' }}>
                            Digiocular
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
