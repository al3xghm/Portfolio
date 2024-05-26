import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './TextReveal.module.scss';

function TextReveal({ text }) {
    const containerRef = useRef(null);
    const lettersRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        const letters = lettersRef.current;

        const revealTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top center",
                end: () => `+=${container.offsetHeight}`,
                scrub: true
            }
        });

        // Diviser le texte en lettres et ajouter des espaces après chaque mot
        const lettersArray = text.split("").map((char, index, array) => {
            if (char === " " && array[index - 1] !== " " && index !== 0) {
                return [" ", "\u00A0"];
            }
            return char;
        }).flat();

        lettersArray.forEach((letter, index) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.className = styles.letter;
            container.appendChild(span);
            letters.push(span);

            revealTimeline.from(span, {
                color: "#A2A2A2",
                duration: 0.5,
                delay: index * 0.05
            }, 0);  // Starting all animations at the same time
        });

        return () => {
            revealTimeline.kill();
        };
    }, [text]);

    return (
        <div className={`reveal ${styles.textContainer}`} ref={containerRef}></div>
    );
}

export default TextReveal;
