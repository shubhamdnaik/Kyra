import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <a href="#" className="logo">
                    <img src="/logo.jpeg" alt="Kyra Careers Logo" className="logo-img" />
                    Kyra Careers
                </a>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#industries" onClick={() => setIsOpen(false)}>Industries</a>
                    <a href="#candidates" onClick={() => setIsOpen(false)}>Job Seekers</a>
                    <a href="#contact" className="btn btn-secondary" onClick={() => setIsOpen(false)}>Partner With Us</a>
                </div>

                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </nav>
    );
}
