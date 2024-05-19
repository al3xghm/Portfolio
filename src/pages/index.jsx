import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import projects from '../data/projects.json';
import styles from "../styles/page.module.scss";
import SplineViewer from '../components/SplineViewer.jsx';
import TextReveal from '../components/TextReveal';
import Image from 'next/image';
import JavaScriptImage from '/public/javascript.svg';
import PHPImage from '/public/php.svg';
import MySQLImage from '/public/mysql.svg';
import HTMLImage from '/public/html5.svg';
import CSSImage from '/public/css3.svg';
import SassImage from '/public/sass.svg';
import NextJSImage from '/public/nextjs.svg';

export default function Home() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const options = {
        timeZone: 'Europe/Paris',
        hour: 'numeric',
        minute: 'numeric',
      };
      setTime(new Intl.DateTimeFormat('fr-FR', options).format(date));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const programmingLanguages = [
    { name: 'JavaScript', image: JavaScriptImage },
    { name: 'PHP', image: PHPImage },
    { name: 'MySQL', image: MySQLImage },
    { name: 'HTML', image: HTMLImage },
    { name: 'CSS', image: CSSImage },
    { name: 'Sass', image: SassImage },
    { name: 'Next.js', image: NextJSImage },
  ];

  // Répéter les langages de programmation jusqu'à ce qu'ils soient tous affichés
  const allProgrammingLanguages = [...programmingLanguages, ...programmingLanguages];

  return (
    <>
      <div className="container">
        <section className={styles.head}>
          <div className={styles.headTitle}>
      <SplineViewer />
            <h1>Alexandre Ghmir</h1>
            <h1>Multimedia Student</h1>
          </div>
          <div className={styles.headBottom}>
            <p>📍 Based in Paris, France</p>
            <p>LOCAL TIME : {time}</p>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <div className={styles.aboutImage}></div>
          <div className={styles.aboutText}>
            <h1>About me</h1>
            <TextReveal text="I'm a multimedia student based in Paris, France. I'm passionate about web development, design, and digital art. I'm currently studying at Gustave Eiffel, a university in Paris. I'm always looking for new opportunities to learn and grow. Feel free to contact me if you want to work together or just to say hi!"></TextReveal>
            <div className={styles.carousel}>
              <div className={styles.move}>
                {allProgrammingLanguages.map(({ name, image }) => (
                  <span key={name}>
                    <Image src={image} alt={name} width={25} height={25} />
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.aboutButton}>
              <a href="/cv.pdf" download="ALEXANDRE GHMIR.pdf">Get my resume</a>
            </div>
          </div>
        </section>

        <section className={styles.projects} id="projects">
          <h1>My projects</h1>
          <div className={styles.projectsContainer}>
            {projects.map((project) => (
              <Link href={`/${project.slug}`} key={project.id} >
                <div className={styles.project}>
                  <h3>{project.id}</h3>
                  <h2>{project.title}</h2>
                  <p>{project.date}</p>
                  <div className={styles.projectImage}>
                    <img src={project.image} alt={project.title} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
