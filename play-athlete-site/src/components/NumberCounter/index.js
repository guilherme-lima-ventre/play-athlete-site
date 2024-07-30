import styles from './NumberCounter.module.css';
import React, { useState, useEffect, useRef } from 'react';

function NumberCounter({ number, increase, text, k }) {

    const [currentNumber, setCurrentNumber] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
        },
        {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
        }
    );

    if (ref.current) {
        observer.observe(ref.current);
    }

    return () => {
        if (ref.current) {
        observer.unobserve(ref.current);
        }
    };
    }, []);

    useEffect(() => {
    let intervalId;
    if (isVisible) {
        intervalId = setInterval(() => {
        setCurrentNumber((prevNumber) =>
            prevNumber >= number ? number : prevNumber + increase
        );
        }, 75);
    } else {
        clearInterval(intervalId);
    }

    return () => {
        clearInterval(intervalId);
    };
    }, [isVisible, number, increase]);

    return (

    <div ref={ref} className={styles.container}>
        <h1>{currentNumber}{k ? 'k' : ''} +</h1>
        <p>{text}</p>
    </div>

    );
}

export default NumberCounter;