import React, { useState, useEffect, useRef } from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showVideo, setShowVideo] = useState(false); 
  const loaderRef = useRef(null);
  const videoRef = useRef(null); 

  useEffect(() => {
    const videoDelay = setTimeout(() => {
      setShowVideo(true);
    }, 200);

    return () => clearTimeout(videoDelay); 
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
      const loader = loaderRef.current;
      setTimeout(() => {
        loader.style.display = 'none';
        loader.remove();
      }, 2500);
    }, 2500);

    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20); 

    return () => clearInterval(interval); 
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const remainingTime = video.duration - video.currentTime;
      if (remainingTime <= 0.1) {
        video.pause();
      }
    }
  };

  const setPlaybackRate = (event) => {
    event.target.playbackRate = 0.85;
  };

  return (
    <div
      id="loader"
      ref={loaderRef}
      className={`${styles.loader} ${loading ? styles.loading : styles.loaded}`}
    >
      {showVideo && (
        <video
          ref={videoRef} 
          className={styles.logo}
          autoPlay
          muted
          loop={false}
          onTimeUpdate={handleTimeUpdate} 
          onLoadedMetadata={setPlaybackRate}
        >
          <source src="/logoznk.mp4" type="video/mp4" />
        </video>
      )}

      <div className={styles.progress}>{progress}%</div>
    </div>
  );
};

export default Loader;
