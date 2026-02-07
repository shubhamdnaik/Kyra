import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Briefcase, User } from 'lucide-react';
import './Contact.css';

export function Contact() {
    const [userType, setUserType] = useState('company'); // 'company' or 'candidate'

    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h4 className="section-subtitle">Get In Touch</h4>
                        <h2 className="section-title">Let's Build Your <span className="text-secondary">{userType === 'company' ? 'Workforce' : 'Career'}</span></h2>
                        <p>
                            {userType === 'company'
                                ? "Ready to streamline your hiring process? Contact us today for reliable manpower solutions."
                                : "Looking for your next big opportunity? Submit your details and let us find the perfect role for you."}
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
                        <div className="form-toggle">
                            <button
                                className={`toggle-btn ${userType === 'company' ? 'active' : ''}`}
                                onClick={() => setUserType('company')}
                            >
                                <Briefcase size={18} /> I want to Hire
                            </button>
                            <button
                                className={`toggle-btn ${userType === 'candidate' ? 'active' : ''}`}
                                onClick={() => setUserType('candidate')}
                            >
                                <User size={18} /> I want a Job
                            </button>
                        </div>

                        <form className="contact-form" action="https://formspree.io/f/xbdajznw" method="POST">
                            {/* Hidden field to identify user type in email */}
                            <input type="hidden" name="_subject" value={`New Inquiry from ${userType === 'company' ? 'Company' : 'Candidate'}`} />

                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="name" placeholder="John Doe" required />
                            </div>

                            {userType === 'company' ? (
                                <div className="form-group">
                                    <label>Company Name</label>
                                    <input type="text" name="company" placeholder="Your Company Ltd" required />
                                </div>
                            ) : (
                                <div className="form-group">
                                    <label>Current Designation (Optional)</label>
                                    <input type="text" name="designation" placeholder="e.g. Senior Accountant" />
                                </div>
                            )}

                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" placeholder="john@example.com" required />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" name="phone" placeholder="+91 98765 43210" required />
                            </div>

                            <div className="form-group">
                                <label>{userType === 'company' ? 'Requirement Details' : 'Paste Resume Link / Message'}</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder={userType === 'company'
                                        ? "Tell us about your manpower needs..."
                                        : "Paste a link to your Google Drive/LinkedIn profile, or briefly describe your experience..."}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                {userType === 'company' ? 'Send Inquiry' : 'Submit Application'} <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
