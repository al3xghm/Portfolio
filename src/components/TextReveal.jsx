import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './TextReveal.module.scss';

function TextReveal({ text }) {
    const containerRef = useRef(null);
    const wordsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        const words = wordsRef.current;

        const revealTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top center",
                end: () => `+=${container.offsetHeight}`,
                scrub: true
            }
        });

        // Diviser le texte en mots
        const wordsArray = text.split(" ");

        wordsArray.forEach((word, index) => {
            const span = document.createElement("span");
            span.textContent = word + " ";
            span.className = styles.word;
            container.appendChild(span);
            words.push(span);

            revealTimeline.from(span, {
                color: "#A2A2A2",
                duration: 0.5,
                delay: index * 0.1
            });
        });

        return () => {
            revealTimeline.kill();
        };
    }, []);

    return (
        <div className={`reveal ${styles.textContainer}`} ref={containerRef}></div>
    );
}

export default TextReveal;
