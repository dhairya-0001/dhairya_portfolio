
import React from 'react';
import { content } from '../data/content';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#050505',
            padding: '40px 0',
            textAlign: 'center',
            color: '#666',
            fontSize: '0.9rem',
            borderTop: '1px solid #1a1a1a'
        }}>
            <div className="container">
                <h3 style={{ color: '#fff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>{content.hero.name}</h3>
                <p style={{ marginBottom: '1.5rem', color: '#888' }}>Building intelligent AI solutions.</p>
                <div style={{ marginBottom: '2rem' }}>
                    <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: '#fff', fontSize: '1.2rem', transition: 'color 0.3s' }}>LinkedIn</a>
                    <a href={content.contact.github} target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: '#fff', fontSize: '1.2rem', transition: 'color 0.3s' }}>GitHub</a>
                    <a href={`mailto:${content.contact.email}`} style={{ margin: '0 15px', color: '#fff', fontSize: '1.2rem', transition: 'color 0.3s' }}>Email</a>
                </div>
                <p>&copy; {new Date().getFullYear()} {content.hero.name}. All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;
