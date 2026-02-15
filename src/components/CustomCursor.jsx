
import React, { useEffect, useState } from 'react';
import '../styles/global.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTrailingPosition(prev => ({
                x: prev.x + (position.x - prev.x) * 0.1,
                y: prev.y + (position.y - prev.y) * 0.1
            }));
        }, 10);
        return () => clearInterval(interval);
    }, [position]);

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    left: position.x,
                    top: position.y,
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#ff0000',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
            />
            <div
                style={{
                    position: 'fixed',
                    left: trailingPosition.x,
                    top: trailingPosition.y,
                    width: '30px',
                    height: '30px',
                    border: '1px solid #ff0000',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9998,
                    transition: 'width 0.2s, height 0.2s',
                    mixBlendMode: 'difference',
                    opacity: 0.6
                }}
            />
        </>
    );
};

export default CustomCursor;
