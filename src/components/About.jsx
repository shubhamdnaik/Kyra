import React from 'react';
import './About.css';

export function About() {
    return (
        <section className="section about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h4 className="section-subtitle">Discover Our Company</h4>
                        <h2 className="section-title">We Help You Build a <span className="text-secondary">Productive Workforce</span></h2>
                        <p>
                            Kyra Careers is a leading manpower consultancy dedicated to providing skilled and semi-skilled workforce solutions
                            to medium and large enterprises. We understand that the strength of any organization lies in its people.
                        </p>
                        <p>
                            With years of experience in contract staffing and workforce management, we have established ourselves as a
                            trusted partner for industries ranging from manufacturing to corporate sectors. Our rigorous screening process
                            ensures that you get reliable, efficient, and verified personnel every time.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Corporate Clients</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">2000+</span>
                                <span className="stat-label">Staff Deployed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Industries Served</span>
                            </div>
                        </div>
                        <a href="#contact" className="btn btn-primary">Learn More About Us</a>
                    </div>
                    <div className="about-image">
                        <div className="image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Team discussion"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
