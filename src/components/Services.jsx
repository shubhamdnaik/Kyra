import React from 'react';
import { Users, Building2, HardHat, Briefcase, UserCheck, Settings } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Briefcase size={32} />,
        title: "Contract Staffing",
        description: "Flexible staffing solutions to meet seasonal demands and project-based requirements without long-term liabilities."
    },
    {
        icon: <Users size={32} />,
        title: "Bulk Hiring Solutions",
        description: "Rapid recruitment of large volumes of candidates for new plant setups, expansions, or urgent deployment."
    },
    {
        icon: <HardHat size={32} />,
        title: "Skilled & Semi-Skilled",
        description: "Supply of verified technicians, machine operators, helpers, and general workforce for industrial needs."
    },
    {
        icon: <Settings size={32} />,
        title: "Workforce Management",
        description: "End-to-end management including payroll, compliance, and attendance for outsourced staff."
    },
    {
        icon: <UserCheck size={32} />,
        title: "Recruitment Support",
        description: "Assisting HR teams in sourcing, screening, and shortlisting the right candidates for permanent roles."
    },
    {
        icon: <Building2 size={32} />,
        title: "Industry Specific",
        description: "Specialized hiring for Manufacturing, Logistics, Construction, and Corporate sectors."
    }
];

import { ScrollReveal } from './ScrollReveal';

export function Services() {
    return (
        <section className="section services-section" id="services">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center mb-5">
                        <h4 className="section-subtitle">What We Do</h4>
                        <h2 className="section-title">Comprehensive <span className="text-secondary">Staffing Solutions</span></h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
                            We provide tailored workforce solutions designed to meet the dynamic needs of modern businesses.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} variant="fade-up">
                            <div className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
