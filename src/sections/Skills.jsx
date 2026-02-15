
import React from 'react';
import { content } from '../data/content';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
    return (
        <section id="skills">
            <SectionWrapper>
                <div className="container">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-grid">
                        {content.skills.map((skill, index) => (
                            <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.1} transitionSpeed={2500}>
                                <motion.div
                                    className="skill-card"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1rem' }}>{skill.name}</h3>
                                    <div className="skill-bar-container">
                                        <motion.div
                                            className="skill-bar"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            viewport={{ once: true }}
                                        ></motion.div>
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
export default Skills;
