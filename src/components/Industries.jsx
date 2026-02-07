import React from 'react';
import './Industries.css';

const industries = [
    { name: "Manufacturing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" },
    { name: "Steel & Heavy Industries", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80" },
    { name: "Warehousing & Logistics", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" },
    { name: "Construction", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80" },
    { name: "Corporate Offices", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" }
];

import { ScrollReveal } from './ScrollReveal';

export function Industries() {
    return (
        <section className="section industries-section" id="industries">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center mb-5">
                        <h4 className="section-subtitle">Who We Serve</h4>
                        <h2 className="section-title">Industries We <span className="text-secondary">Specialize In</span></h2>
                        <p>Expertise across diverse sectors ensuring the right fit for every role.</p>
                    </div>
                </ScrollReveal>

                <div className="industries-grid">
                    {industries.map((ind, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} variant="scale-up">
                            <div className="industry-card">
                                <img src={ind.img} alt={ind.name} />
                                <div className="industry-overlay">
                                    <h3>{ind.name}</h3>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
