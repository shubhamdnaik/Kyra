import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import './Hero.css';

export function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <h1 className="hero-title">
                    Build Your Business With <span className="highlight">Strategic Consulting</span>
                </h1>
                <p className="hero-subtitle">
                    Expert consulting services and premium workforce solutions for industrial and corporate excellence.
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
