import React from 'react';
import { Search, FileText, TrendingUp, Building } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import './Candidates.css';

const features = [
    {
        icon: <Building size={32} />,
        title: "Top Employers",
        desc: "Access exclusive job openings from leading companies in manufacturing and corporate sectors."
    },
    {
        icon: <FileText size={32} />,
        title: "Resume Building",
        desc: "Get expert advice on crafting a resume that stands out to recruiters."
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Career Growth",
        desc: "Find roles that offer long-term career advancement and skill development."
    },
    {
        icon: <Search size={32} />,
        title: "Quick Placement",
        desc: "Fast-tracked interview scheduling for verified candidates."
    }
];

export function Candidates() {
    return (
        <section className="section candidates-section" id="candidates">
            <div className="container">
                <div className="candidates-wrapper">
                    <ScrollReveal variant="slide-right">
                        <div className="candidates-content">
                            <h4 className="section-subtitle">For Job Seekers</h4>
                            <h2 className="section-title">Find Your <span className="text-secondary">Dream Role</span></h2>
                            <p className="candidates-intro">
                                We connect talented individuals with the right opportunities. Whether you are a fresh graduate or an experienced professional, Kyra Careers is your gateway to success.
                            </p>

                            <div className="candidates-features">
                                {features.map((feature, index) => (
                                    <div className="c-feature" key={index}>
                                        <div className="c-icon">{feature.icon}</div>
                                        <div>
                                            <h5>{feature.title}</h5>
                                            <p>{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a href="#contact" className="btn btn-primary mt-4">
                                Submit Your Resume
                            </a>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="slide-left" delay={0.2}>
                        <div className="candidates-image">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                                alt="Professional woman smiling"
                            />
                            <div className="image-badge">
                                <span>500+</span>
                                <p>Placements this year</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
