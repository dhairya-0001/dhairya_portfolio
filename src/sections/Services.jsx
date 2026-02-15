
import React from 'react';
import { content } from '../data/content';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section id="services">
            <SectionWrapper>
                <div className="container">
                    <h2 className="section-title">Services</h2>
                    <div className="card-grid">
                        {content.services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="glass-card"
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(234, 51, 35, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1rem',
                                    color: 'var(--color-primary)',
                                    fontSize: '1.5rem'
                                }}>
                                    {index + 1}
                                </div>
                                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>{service.title}</h3>
                                <p style={{ color: '#ccc', fontSize: '0.9rem' }}>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
};
export default Services;
