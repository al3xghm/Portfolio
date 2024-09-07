import React, { useState, useEffect, useRef } from 'react';
import styles from './Loader.module.scss';
import Image from 'next/image';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef(null);

  useEffect(() => {
    // Timer pour désactiver le loader après 4 secondes
    const timer = setTimeout(() => {
      setLoading(false); // Désactiver le loader
      const loader = loaderRef.current;
      setTimeout(() => {
        loader.style.display = 'none';
        loader.remove();
      }, 2500);
    }, 2500);

    return () => clearTimeout(timer); // Nettoyer le timer
  }, []);

  useEffect(() => {
    // Mettre à jour la progression de 0 à 100% sur 4 secondes
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20); // 4000ms / 100 = 40ms pour chaque incrément

    return () => clearInterval(interval); // Nettoyer l'intervalle
  }, []);

  const handleAnimationEnd = () => {
    setLoaderAnimationComplete(true); // Marquer l'animation du loader comme terminée
  };

  return (
    <>
    <div id="loader" ref={loaderRef} className={`${styles.loader} ${loading ? styles.loading : styles.loaded}`} onAnimationEnd={handleAnimationEnd}>
      <Image className={styles.logo} src="/baby.gif" alt="Baby" width={400} height={400} unoptimized />
      <div className={styles.progress}>{progress}%</div>
    </div>
    </>
  );
};

export default Loader;
