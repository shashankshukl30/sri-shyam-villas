"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917307491291?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Sri%20Shyam%20Villas%2C%20Varanasi";

export default function BookingCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.a
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed group"
                    style={{ bottom: '1.5rem', right: '1.5rem', zIndex: 90, textDecoration: 'none' }}
                >
                    {/* Pulse */}
                    <span className="absolute inset-0" style={{ borderRadius: '50%', backgroundColor: '#25D366', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite', opacity: 0.2 }} />

                    {/* Button */}
                    <div
                        className="btn-whatsapp-sm relative"
                        style={{
                            padding: '1rem 1.75rem',
                            fontSize: '0.95rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2), 0 10px 32px rgba(37,211,102,0.4)',
                        }}
                    >
                        <MessageCircle size={22} />
                        <span className="hidden sm:inline">
                            Book Now
                        </span>
                    </div>
                </motion.a>
            )}
        </AnimatePresence>
    );
}
