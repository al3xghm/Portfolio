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

        // Nettoyer les animations précédentes
        gsap.globalTimeline.kill(); // Tuer toutes les animations actives

        // Diviser le texte en lettres et ajouter des espaces après chaque mot
        const lettersArray = text.split("").map((char, index, array) => {
            if (char === " " && array[index - 1] !== " " && index !== 0) {
                return [" ", "\u00A0"];
            }
            return char;
        }).flat();

        // Nettoyer le contenu existant dans le conteneur
        container.innerHTML = '';

        // Créer une nouvelle timeline pour les animations
        const revealTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top center",
                end: () => `+=${container.offsetHeight}`,
                scrub: 1, // Utiliser scrub pour une animation fluide
            }
        });

        // Créer et animer chaque lettre
        lettersArray.forEach((letter, index) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.className = styles.letter;
            container.appendChild(span);
            letters.push(span);

            // Animation de base pour la lettre
            revealTimeline.to(span, {
                color: "var(--color)",
                opacity: 1, // Augmenter l'opacité à 1
                duration: 0.5,
                ease: "power1.out", // Utiliser une courbe d.ease pour une transition douce
                delay: index * 0.05,
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
