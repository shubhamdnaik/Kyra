import React from 'react';
import { motion } from 'framer-motion';

export function ScrollReveal({ children, variant = 'fade-up', delay = 0, className = '' }) {
    const variants = {
        'fade-up': {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        },
        'fade-in': {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        'scale-up': {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        },
        'slide-right': {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        'slide-left': {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            variants={variants[variant]}
            className={className}
        >
            {children}
        </motion.div>
    );
}
