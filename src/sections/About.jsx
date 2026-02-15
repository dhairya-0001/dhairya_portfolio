
import React from 'react';
import { content } from '../data/content';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
    return (
        <section id="about">
            <SectionWrapper>
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#ddd' }}>
                            {content.about.summary}
                        </p>
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Education</h3>
                            <h4 style={{ color: '#fff' }}>{content.about.education.degree}</h4>
                            <p style={{ color: '#aaa' }}>{content.about.education.university}</p>
                            <p style={{ color: '#666', fontSize: '0.9rem' }}>{content.about.education.year}</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
};
export default About;
