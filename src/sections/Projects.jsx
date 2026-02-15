
import React from 'react';
import { content } from '../data/content';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
    return (
        <section id="projects">
            <SectionWrapper>
                <div className="container">
                    <h2 className="section-title">Projects</h2>
                    <div className="card-grid">
                        {content.projects.map((project, index) => (
                            <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500}>
                                <motion.div
                                    className="glass-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>{project.title}</h3>
                                    <p style={{ color: '#aaa', marginBottom: '1rem', fontSize: '0.9rem' }}>{project.description}</p>
                                    <div style={{ marginBottom: '1rem' }}>
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} style={{
                                                display: 'inline-block',
                                                backgroundColor: 'rgba(255,0,0,0.1)',
                                                color: 'var(--color-primary)',
                                                padding: '4px 8px',
                                                borderRadius: '4px',
                                                fontSize: '0.8rem',
                                                marginRight: '8px',
                                                marginBottom: '4px'
                                            }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <a href={project.github} style={{ color: '#fff', textDecoration: 'underline' }}>GitHub</a>
                                        <a href={project.link} style={{ color: '#fff', textDecoration: 'underline' }}>Demo</a>
                                    </div>
                                </motion.div>
                            </Tilt>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
};
export default Projects;
