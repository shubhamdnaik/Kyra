import React from 'react';
import { Building, Factory, Landmark, Box, Truck } from 'lucide-react';
import './Clients.css';

const partners = [
    { name: "Veerya Attachments", icon: <Factory size={40} /> },
    { name: "Global Logistics", icon: <Truck size={40} /> },
    { name: "Apex Constructions", icon: <Box size={40} /> },
    { name: "Insight Enterprise", icon: <Building size={40} /> },
    { name: "Jindal Steel", icon: <Landmark size={40} /> }
];

export function Clients() {
    return (
        <section className="section clients-section" id="clients">
            <div className="container">
                <div className="text-center mb-5">
                    <h4 className="section-subtitle">Our Partners</h4>
                    <h2 className="section-title">Trusted by <span className="text-secondary">Industry Leaders</span></h2>
                </div>

                <div className="logo-grid">
                    {partners.map((partner, index) => (
                        <div className="client-logo" key={index}>
                            {partner.icon}
                            <span>{partner.name}</span>
                        </div>
                    ))}
                    {/* Duplicate for visual balance if needed or add more */}
                    <div className="client-logo">
                        <Building size={40} />
                        <span>And Many More</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
