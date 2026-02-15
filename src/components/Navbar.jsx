
import React, { useState, useEffect } from 'react';
import { content } from '../data/content';
import '../styles/global.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const styles = {
        navbar: {
            position: 'fixed',
            top: 0,
            width: '100%',
            padding: '20px 0',
            transition: 'background-color 0.3s ease, padding 0.3s ease',
            backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
            boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.5)' : 'none',
            zIndex: 1000,
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--color-primary)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        links: {
            display: 'flex',
            gap: '30px',
        },
        link: {
            color: '#fff',
            fontSize: '0.9rem',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            position: 'relative',
        },
    };

    return (
        <nav style={styles.navbar}>
            <div className="container" style={styles.container}>
                <a href="#" style={styles.logo}>{content.hero.name.split(' ')[0]}</a>
                <ul style={styles.links}>
                    {['About', 'Experience', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} style={styles.link}>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
