import React from 'react';
import { useState, useRef, useEffect } from 'react';
import "./style/fadeInSections.css"

function FadeInSection({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(entry.isIntersecting);
                }
            });
        });
        const currentRef = sectionRef.current
        observer.observe(currentRef);
        return () => observer.unobserve(currentRef);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'fade-in-section--visible' : ''}`}
            ref={sectionRef}
        >
            {children}
        </div>
    );
}

export default FadeInSection;