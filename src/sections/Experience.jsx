
import React from 'react';
import { content } from '../data/content';
import SectionWrapper from '../components/SectionWrapper';

const Experience = () => {
    return (
        <section id="experience">
            <SectionWrapper>
                <div className="container">
                    <h2 className="section-title">Experience</h2>
                    <div className="timeline">
                        {content.experience.map((exp, index) => (
                            <div key={index} className="timeline-item">
                                <h3 style={{ color: '#fff', fontSize: '1.25rem' }}>{exp.role}</h3>
                                <h4 style={{ color: 'var(--color-primary)', fontSize: '1rem', marginBottom: '0.5rem' }}>{exp.company}</h4>
                                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>{exp.duration}</p>
                                <ul style={{ listStyle: 'disc', color: '#ccc', paddingLeft: '20px' }}>
                                    {exp.details.map((detail, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem' }}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
};
export default Experience;
