import React from 'react';
import { useState, useRef, useEffect } from 'react';
import "./style/fadeInSections.css"

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        const ref = domRef.current
        observer.observe(ref);
        return () => observer.unobserve(ref);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

  export default FadeInSection;