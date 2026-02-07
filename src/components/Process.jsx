import React from 'react';
import { MessageSquare, Search, UserCheck, Briefcase, Smile, ChevronsRight } from 'lucide-react';
import './Process.css';

const steps = [
    { icon: <MessageSquare size={24} />, title: "Requirement", desc: "We understand your specific needs." },
    { icon: <Search size={24} />, title: "Sourcing", desc: "We find the best talent from our pool." },
    { icon: <UserCheck size={24} />, title: "Screening", desc: " rigorous verification and interviews." },
    { icon: <Briefcase size={24} />, title: "Deployment", desc: "Onboarding and contract signing." },
    { icon: <Smile size={24} />, title: "Support", desc: "Continuous performance monitoring." }
];

import { ScrollReveal } from './ScrollReveal';

export function Process() {
    return (
        <section className="section process-section" id="process">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center mb-5">
                        <h4 className="section-subtitle">How We Work</h4>
                        <h2 className="section-title">Hiring Process <span className="text-secondary">Simplified</span></h2>
                    </div>
                </ScrollReveal>

                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <ScrollReveal
                                delay={index * 0.15}
                                variant="fade-up"
                                className="process-anim-wrapper"
                            >
                                <div className="process-step">
                                    <div className="step-icon">
                                        {step.icon}
                                        <div className="step-number">{index + 1}</div>
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </ScrollReveal>
                            {index < steps.length - 1 && (
                                <div className="step-connector">
                                    <ChevronsRight size={24} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
