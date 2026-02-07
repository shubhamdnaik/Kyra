import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="footer-logo">Kyra Careers</h3>
                        <p>Reliable manpower solutions for industrial and corporate excellence.</p>
                        <div className="social-links">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#industries">Industries</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Contract Staffing</a></li>
                            <li><a href="#services">Bulk Hiring</a></li>
                            <li><a href="#services">Workforce Management</a></li>
                            <li><a href="#services">Recruitment</a></li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Newsletter</h4>
                        <p>Subscribe for industry updates.</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Your email" />
                            <button className="btn btn-secondary">Go</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Kyra Careers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
