import { useState, useEffect } from 'react';

const useCursorPosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', updatePosition);
        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    return position;
};

export default useCursorPosition;
