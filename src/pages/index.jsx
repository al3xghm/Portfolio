import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Head from 'next/head';
import projects from '../data/projects.json';
import styles from "../styles/page.module.scss";
import Image from 'next/image';
import TextReveal from '../components/TextReveal';
import Loader from '../components/Loader';
import { animatePageOut } from "../../animations";
import gsap from "gsap";

export default function Home() {
  const [time, setTime] = useState('');
  const [showLoader, setShowLoader] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  // Check sessionStorage to determine if loader should be shown
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loaderShown = sessionStorage.getItem('loaderShown', 'true');
      if (loaderShown) {
        setShowLoader(false);
        setContentLoaded(true);
      }
    }
  }, []);

  // Set a timeout to hide the loader and update sessionStorage
  useEffect(() => {
    if (!sessionStorage.getItem('loaderShown')) {
      const timer = setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem('loaderShown', 'true');
        setContentLoaded(true);
      }, 4500);

      return () => clearTimeout(timer);
    }
  }, [showLoader]);

  // Update body overflow style based on loader state
  useEffect(() => {
    if (!showLoader) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [showLoader]);

  // Update the time every second
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

  const testimonials = [
    {
      id: 1,
      name: 'Inès',
      title: 'CEO of Agence DMC and internship supervisor',
      text: "Alexandre Ghmir a effectué son stage en tant que Community Manager au sein de notre agence web, où il a brillamment géré la création de contenus et l'animation des réseaux sociaux. Sérieux, créatif et motivé, il a su s'adapter rapidement et répondre aux objectifs fixés. Je le recommande vivement pour ses compétences et son professionnalisme.",
    },
    {
      id: 2,
      name: 'Amel Chabah',
      title: "Full-Stack Developer and UX/UI & Graphic Designer at GAEL Systems",
      text: "J'ai eu le plaisir d'accompagner Alexandre dans son apprentissage de plusieurs langages ainsi que des bonnes pratiques UX et accessibilité. Il m'a impressionnée par sa capacité à apprendre rapidement et à s'auto-former avec une grande efficacité. Toujours proactif, il anticipe les besoins et prend de l'avance sur tous ses projets, ce qui témoigne d'une vraie passion pour le développement web, et montre un grand potentiel en tant que futur développeur.",
    },
    {
      id: 3,
      name: 'Dorian Tison',
      title: 'Video Editor and team mate',
      text: "Alexandre se démarque par son développement et sa polyvalence , caractéristiques qu'il perfectionne actuellement dans le contexte de ses étude en BUT MMI. Son savoir-faire dans les outils de programmation, associé à son sens de la créativité, lui confère la capacité d'affronter des défis techniques de manière efficace et innovante. Toujours disposé à travailler en équipe, il démontre une excellente cohésion d'équipe et une aptitude exceptionnelle à s'adapter, même dans des circonstances compliquées. Je conseille fortement Alexandre pour son savoir-faire en matière de développement.",
    },
  ];


  const router = useRouter();

  const handleClick = (href) => {
    animatePageOut(href, router);
  };


  // onclick of certification, certificationcontent display flex, else none, with gsap transition

  const handleCertificationClick = () => {
    const certificationContent = document.querySelector('.certification-content');
    const certificationArrow = document.querySelector('.certification-arrow svg');
    gsap.to(certificationContent, {
      display: certificationContent.style.display === 'flex' ? 'none' : 'flex', opacity: certificationContent.style.display === 'flex' ? 0 : 1,
      duration: 0.5, ease: 'power2.out'
    });
    gsap.to(certificationArrow, {
      rotate: certificationContent.style.display === 'flex' ? 0 : 90,
      duration: 0.5, ease: 'power2.out'
    });
  }

  const handleTestimonialClick = (id) => {
    const content = document.querySelector(`.testimonial-content-${id}`);
    const arrow = document.querySelector(`.testimonial-${id} .testimonial-arrow svg`);
    const isVisible = content.style.display === "block";

    // Transition GSAP pour ouvrir ou fermer le contenu
    gsap.to(content, {
      height: isVisible ? 0 : "auto",
      opacity: isVisible ? 0 : 1,
      duration: 0.5,
      ease: "power2.out",
      onStart: () => {
        if (!isVisible) content.style.display = "block";
      },
      onComplete: () => {
        if (isVisible) content.style.display = "none";
      },
    });

    // Rotation de la flèche
    gsap.to(arrow, {
      rotate: isVisible ? 0 : 90,
      duration: 0.5,
      ease: "power2.out",
    });

  };



  return (
    <>
      <Head>
        <title>Portfolio | Alexandre GHMIR</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {
        showLoader && <Loader show={showLoader} />
      }
      <div className={`container ${contentLoaded ? 'fade-in' : ''}`}>
        <section id="home" className={styles.head}>
          <div className={styles.headTitle}>
            <Image className={styles.headImage} src="/anim.gif" alt="Anim" width={200} height={200} unoptimized />
            <h1>Alexandre Ghmir</h1>
            <h1>Multimedia Student</h1>
          </div>
          <div className={styles.headBottom}>
            <p>📍 Based in Paris, France</p>
            <p>LOCAL TIME : {time}</p>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <div className={styles.aboutheader}>
            <div className={styles.aboutImage}></div>
            <div className={styles.aboutText}>
              <h1>About me</h1>
              <TextReveal text="I'm a multimedia student based in Paris, France. I'm passionate about web development and design. I'm currently studying multimedia at Gustave Eiffel University. I'm always looking for new opportunities to learn and grow. Feel free to contact me if you want to work together or just to say hi!"></TextReveal>
              <div className={styles.aboutButton}>
                <a href="/CV_ALEXANDRE_GHMIR.pdf" download="CV_ALEXANDRE_GHMIR.pdf">Get my resume</a>
              </div>

            </div>

          </div>

          <div className={styles.skills}>
            <h1>SKILLS</h1>

            <div><p>Web development</p>
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>SASS/CSS</li>
                <li>GSAP</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>Wordpress</li>
                <li>Accessibility</li>
                <li>SEO</li>
              </ul>
            </div>
            <div><p>Prototyping</p>
              <ul>
                <li>Figma</li>
              </ul>
            </div>
            <div><p>Graphic design, video editing</p>
              <ul>
                <li>Photoshop</li>
                <li>Premiere Pro</li>
                <li>Indesign</li>
                <li>Illustrator</li>
                <li>Canva</li>
              </ul>
            </div>
            <div><p>Hosting</p>
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>Vercel</li>
                <li>O2Switch</li>
              </ul>
            </div>
          </div>

          <div className={styles.certifications}>
            <h1>CERTIFICATIONS</h1>
            <div className={styles.certificationslist}>
              <div className={styles.certification} onClick={handleCertificationClick}>
                <b>Opquast : Expert in web project quality control</b>
                <span>Coming Soon</span>
                <div className={`${styles.certificationarrow} certification-arrow`}>
                  <svg width="20" height="20" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.904 69.984L0.528 64.608L54.8 10.336L7.568 7.13599L14.608 0.095993L67.344 3.03999L70.416 55.776L63.376 62.816L60.176 15.712L5.904 69.984Z" fill="black" />
                  </svg>
                </div>
              </div>

              <div className={`${styles.certificationcontent} certification-content`}>
                <p>During my second year of the BUT MMI program, I had the opportunity to apply the skills I acquired in courses on accessibility, ergonomics, SEO, and other key aspects of web development. This experience enabled me to strengthen my understanding of best practices in web quality, aligned with the standards defined by Opquast.
                  I am currently preparing for the official Opquast certification, which I plan to take in March 2025. This preparation has deepened my knowledge and sharpened my expertise in delivering high-quality digital products that adhere to the highest standards of user experience and environmental considerations. As a web developer, this training further supports my commitment to creating exceptional, accessible, and impactful projects.
                </p>
                <a href="https://www.opquast.com/en/" target="_blank" title='Opquast website'>
                Learn more about Opquast web quality certification
                </a>
              </div>

            </div>

          </div>

        </section>

        <section className={styles.projects}>
          <h1 id="projects" className={styles.projectstitle}>WORK</h1>
          <div className={styles.projectsContainer}>
            {projects.map((project) => (
              <div key={project.id} onClick={() => handleClick(`project/${project.slug}`)}
                aria-label={`${project.title}`}
                role="link"
                tabIndex="0"
                className='link'
              >
                <div className={styles.project}>
                  <h2>{project.title}</h2>
                  <p>{project.date}</p>
                  <div className={styles.projectImage} style={{ backgroundImage: `url(${project.images[0]})` }}>
                    <div className={styles.overlay}></div>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </section>

        <section className={styles.testimonials}>
          <h1 className={styles.testimonialstitle}>TESTIMONIALS</h1>
          <div className={styles.testimonialsContainer}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={`${styles.testimonial} testimonial-${testimonial.id}`}>
                <div className={styles.testimonialHeader} onClick={() => handleTestimonialClick(testimonial.id)}>
                  <p><b>{testimonial.name}</b>, {testimonial.title}</p>
                  <div className={`${styles.testimonialarrow} testimonial-arrow`}>
                    <svg width="20" height="20" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.904 69.984L0.528 64.608L54.8 10.336L7.568 7.13599L14.608 0.095993L67.344 3.03999L70.416 55.776L63.376 62.816L60.176 15.712L5.904 69.984Z" fill="black" />
                    </svg>
                  </div>
                </div>
                <p className={`testimonial-content testimonial-content-${testimonial.id} ${styles.testimonialcontent}`}>{testimonial.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div >
    </>
  );
} 