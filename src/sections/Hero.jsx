
import React from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion';

const Hero = () => {
    const { name, role, headline, bio, image } = content.hero;

    const styles = {
        hero: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'left',
            paddingTop: '80px',
            background: 'transparent', // Make background transparent to show particles
            position: 'relative',
            overflow: 'hidden',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            '@media (min-width: 768px)': {
                flexDirection: 'row',
                textAlign: 'left',
            }
        },
        content: {
            maxWidth: '600px',
            zIndex: 2,
            position: 'relative',
        },
        imageContainer: {
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid var(--color-primary)',
            boxShadow: '0 0 30px rgba(255, 0, 0, 0.3)',
            zIndex: 2,
        },
        profileImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        name: {
            fontSize: '1rem',
            color: 'var(--color-primary)',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginBottom: '1rem',
            fontWeight: '600',
        },
        headline: {
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '1.5rem',
            color: '#fff',
            fontWeight: '800',
            lineHeight: 1.1,
            display: 'flex',
            flexWrap: 'wrap',
        },
        bio: {
            fontSize: '1.1rem',
            color: '#bbb',
            marginBottom: '2.5rem',
            maxWidth: '500px',
            lineHeight: 1.6,
        },
        buttons: {
            display: 'flex',
            gap: '20px',
        },
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    // Character animation
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.03,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section id="hero" style={styles.hero}>
            <div className="container" style={{ ...styles.container, flexDirection: window.innerWidth > 768 ? 'row' : 'column', textAlign: window.innerWidth > 768 ? 'left' : 'center' }}>

                {/* Text Content */}
                <div style={styles.content}>
                    <h4 style={styles.name}>{name} — {role}</h4>

                    <h1 style={styles.headline}>
                        {headline}
                    </h1>

                    <p style={styles.bio}>{bio}</p>

                    <div style={{ ...styles.buttons, justifyContent: window.innerWidth > 768 ? 'flex-start' : 'center' }}>
                        <a href="#projects" className="btn">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>

                {/* Profile Image */}
                <motion.div
                    style={styles.imageContainer}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.05, borderColor: '#fff' }}
                >
                    <img src={image} alt={name} style={styles.profileImage} />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
