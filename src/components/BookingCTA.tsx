"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917307491291?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Sri%20Shyam%20Villas%2C%20Banaras";

export default function BookingCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
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
                    style={{ bottom: '1.25rem', right: '1.25rem', zIndex: 90, textDecoration: 'none' }}
                >
                    <span className="absolute inset-0" style={{ borderRadius: '50%', backgroundColor: '#25D366', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite', opacity: 0.15 }} />
                    <div className="btn-whatsapp-sm relative" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15), 0 8px 24px rgba(37,211,102,0.3)' }}>
                        <MessageCircle size={16} />
                        <span className="hidden sm:inline">Book Now</span>
                    </div>
                </motion.a>
            )}
        </AnimatePresence>
    );
}
