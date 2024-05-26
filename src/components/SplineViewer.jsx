import React, { useEffect, useRef } from 'react';
import styles from './SplineViewer.module.scss';
import { Application } from '@splinetool/runtime';
import { gsap } from 'gsap'; // Importez GSAP

function SplineViewer() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);

    app.load('https://prod.spline.design/ZcTpJtabEOYm2R-e/scene.splinecode')
      .then(() => {
        // Scène chargée avec succès
        console.log('Scene loaded successfully.');
      })
      .catch((error) => {
        // Gestion des erreurs de chargement de la scène
        console.error('Error loading scene:', error);
      });

    // Ajoutez un écouteur d'événements de défilement
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Supprimez l'écouteur d'événements de défilement lors du démontage du composant
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonction pour gérer le défilement
  const handleScroll = () => {
    // Récupérez la position de défilement de la page
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Votre logique d'animation GSAP en fonction de la position de défilement
    gsap.to(canvasRef.current, { rotation: scrollTop / 10 }); // Rotation du canvas en fonction du défilement
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <canvas ref={canvasRef} id="canvas3d" className={styles.canvas} />
    </div>
  );
}

export default SplineViewer;
