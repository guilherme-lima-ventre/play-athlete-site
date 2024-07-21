import React, { useEffect, useState } from 'react';
import styles from './PageAnimationFadeIn.module.css';

const PageAnimationFadeIn = ({ children }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className={`${styles['fade-in']} ${animate ? styles['fade-in'] : ''}`}>
            {children}
        </div>
    );
};

export default PageAnimationFadeIn;