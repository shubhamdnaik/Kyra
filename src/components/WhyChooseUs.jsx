import React from 'react';
import { CheckCircle } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
    "100% Verified Workforce",
    "Fast Turnaround & Deployment",
    "Strict Statutory Compliance",
    "Immediate Replacements if needed",
    "Dedicated Account Manager",
    "Cost-Effective Staffing"
];

export function WhyChooseUs() {
    return (
        <section className="section why-us-section" id="why-us">
            <div className="container">
                <div className="why-us-content">
                    <div className="why-text">
                        <h4 className="section-subtitle">Why Partner With Us</h4>
                        <h2 className="section-title">The <span className="text-secondary">Kyra Advantage</span></h2>
                        <p>
                            We don't just supply manpower; we provide peace of mind. Our structured approach to staffing ensures that your
                            operations run smoothly without workforce interruptions.
                        </p>
                        <ul className="features-list">
                            {features.map((feature, index) => (
                                <li key={index}>
                                    <CheckCircle className="check-icon" size={20} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#contact" className="btn btn-primary mt-4">Get Started Today</a>
                    </div>
                    <div className="why-image">
                        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Handshake" />
                        <div className="trust-badge">
                            <h3>100%</h3>
                            <p>Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
