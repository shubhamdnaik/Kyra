import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

export function Contact() {
    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h4 className="section-subtitle">Get In Touch</h4>
                        <h2 className="section-title">Let's Build Your <span className="text-secondary">Workforce</span></h2>
                        <p>
                            Ready to streamline your hiring process? Contact us today for reliable manpower solutions tailored to your industry needs.
                        </p>

                        <div className="info-item">
                            <div className="info-icon"><Phone size={20} /></div>
                            <div>
                                <h5>Call Us</h5>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Mail size={20} /></div>
                            <div>
                                <h5>Email Us</h5>
                                <p>contact@kyracareers.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><MapPin size={20} /></div>
                            <div>
                                <h5>Visit Us</h5>
                                <p>123 Corporate Park, Industrial Area<br />Mumbai, India - 400001</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" action="https://formspree.io/f/xbdajznw" method="POST">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="name" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" name="company" placeholder="Your Company Ltd" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" placeholder="john@company.com" required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" name="phone" placeholder="+91 98765 43210" required />
                            </div>
                            <div className="form-group">
                                <label>Requirement Details</label>
                                <textarea name="message" rows="4" placeholder="Tell us about your manpower needs..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
