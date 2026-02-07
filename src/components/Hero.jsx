import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import './Hero.css';

export function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <h1 className="hero-title">
                    Kyra Careers <span className="highlight">Consultancy</span>
                </h1>
                <p className="hero-subtitle">
                    A premier consultancy service providing expert recruitment and workforce solutions.
                </p>
                <div className="hero-actions">
                    <a href="#contact" className="btn btn-secondary">
                        Hire Talent <ChevronRight size={20} />
                    </a>
                    <a href="#candidates" className="btn btn-outline">
                        Find a Job <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}
