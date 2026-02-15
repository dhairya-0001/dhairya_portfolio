
import React from 'react';
import { content } from '../data/content';
import SectionWrapper from '../components/SectionWrapper';

const Contact = () => {
    return (
        <section id="contact">
            <SectionWrapper>
                <div className="container">
                    <h2 className="section-title">Contact Me</h2>
                    <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <p style={{ marginBottom: '2rem', color: '#ccc' }}>
                            Interested in working together? Get in touch!
                        </p>

                        <div style={{ display: 'grid', gap: '1rem', textAlign: 'left', marginBottom: '2rem' }}>
                            <div style={{ padding: '10px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <strong style={{ color: 'var(--color-primary)' }}>Email:</strong>
                                <a href={`mailto:${content.contact.email}`} style={{ marginLeft: '10px', color: '#fff' }}>{content.contact.email}</a>
                            </div>
                            <div style={{ padding: '10px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <strong style={{ color: 'var(--color-primary)' }}>Phone:</strong>
                                <span style={{ marginLeft: '10px', color: '#fff' }}>{content.contact.phone}</span>
                            </div>
                            <div style={{ padding: '10px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <strong style={{ color: 'var(--color-primary)' }}>Location:</strong>
                                <span style={{ marginLeft: '10px', color: '#fff' }}>{content.contact.location}</span>
                            </div>
                        </div>

                        {/* Google Form Embed */}
                        <div style={{ width: '100%', height: '500px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                            <iframe
                                src={content.contact.googleForm}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                title="Contact Form"
                                style={{ filter: 'invert(1) hue-rotate(180deg)' }} // Optional: Attempt to make standard Google Form look dark-mode-ish
                            >
                                Loading…
                            </iframe>
                        </div>

                        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a>
                            <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
};
export default Contact;
