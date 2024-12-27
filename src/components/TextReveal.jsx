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

        const wordsArray = text.split(" ");

        container.innerHTML = '';
        lettersRef.current = []; 

        const revealTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top center",
                end: () => `+=${container.offsetHeight}`,
                scrub: 1,
            }
        });

        wordsArray.forEach((word, wordIndex) => {
            const wordContainer = document.createElement("div"); 
            wordContainer.className = styles.word;
            container.appendChild(wordContainer);

            const wordTimeline = gsap.timeline();

            word.split("").forEach((letter, letterIndex) => {
                const span = document.createElement("span");
                span.textContent = letter;
                span.className = styles.letter;
                wordContainer.appendChild(span);
                letters.push(span);

                wordTimeline.to(span, {
                    color: "var(--color)",
                    opacity: 1,
                    duration: 0.3,
                    ease: "power1.out",
                }, letterIndex * 0.1); 
            });

            revealTimeline.add(wordTimeline, `+=0.5`); 
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
