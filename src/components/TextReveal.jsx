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

        // Diviser le texte en mots
        const wordsArray = text.split(" ");

        // Nettoyer le contenu existant dans le conteneur
        container.innerHTML = '';
        lettersRef.current = []; // Nettoyer les références aux anciennes lettres

        // Créer une nouvelle timeline pour les animations
        const revealTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top center",
                end: () => `+=${container.offsetHeight}`,
                scrub: 1,
            }
        });

        // Créer et animer chaque mot séquentiellement
        wordsArray.forEach((word, wordIndex) => {
            const wordContainer = document.createElement("div"); // Chaque mot dans un <div> pour aller à la ligne
            wordContainer.className = styles.word;
            container.appendChild(wordContainer);

            // Variable pour contenir l'animation de chaque mot
            const wordTimeline = gsap.timeline();

            word.split("").forEach((letter, letterIndex) => {
                const span = document.createElement("span");
                span.textContent = letter;
                span.className = styles.letter;
                wordContainer.appendChild(span);
                letters.push(span);

                // Animation de la lettre
                wordTimeline.to(span, {
                    color: "var(--color)",
                    opacity: 1,
                    duration: 0.3,
                    ease: "power1.out",
                }, letterIndex * 0.1); // Chaque lettre se révèle une par une
            });

            // Ajouter l'animation du mot à la timeline principale
            revealTimeline.add(wordTimeline, `+=0.5`); // Attendre 0.5s entre chaque mot
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
