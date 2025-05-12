import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Head from 'next/head';
import projects from '../data/projects.json';
import styles from "../styles/page.module.scss";
import TextReveal from '../components/TextReveal';
import Loader from '../components/Loader';
import { animatePageOut } from "../../animations";
import gsap from "gsap";

export default function Home() {
  const [time, setTime] = useState('');
  const [showLoader, setShowLoader] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loaderShown = sessionStorage.getItem('loaderShown', 'true');
      if (loaderShown) {
        setShowLoader(false);
        setContentLoaded(true);
      }
    }
  }, []);

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

  useEffect(() => {
    if (!showLoader) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [showLoader]);

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
      text: "Alexandre completed his internship as a Community Manager at our web agency, where he excelled in content creation and social media management. Serious, creative, and motivated, he quickly adapted and met the set objectives. I highly recommend him for his skills and professionalism.",
    },
    {
      id: 2,
      name: 'Amel Chabah',
      title: "Full-Stack Developer, UX/UI & Graphic Designer at GAEL Systems",
      text: "I had the pleasure of guiding Alexandre in his learning of several programming languages as well as UX and accessibility best practices. I was impressed by his ability to learn quickly and self-learn with great efficiency. Always proactive, he anticipates needs and stays ahead on all his projects, demonstrating a true passion for web development and showing great potential as a future developer.",
    },
    {
      id: 3,
      name: 'Dorian Tison',
      title: 'Video Editor and teammate',
      text: "Alexandre stands out for his efficiency and versatility, qualities he continues to refine through his studies. His proficiency with programming tools, combined with his creative mindset, enables him to solve technical problems in a practical and innovative way. Always ready to collaborate, he integrates seamlessly into a team and adapts quickly, even in challenging situations. I highly recommend Alexandre for his development skills and results-driven approach.",
    },
  ];


  const router = useRouter();

  const handleClick = (href) => {
    animatePageOut(href, router);
  };

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
            <img className={styles.headImage} id='headeranimation' src="/anim.webp" alt="Header animation" width={450} height={450} />
            <h1>Alexandre Ghmir</h1>
            <h2>Web Developer</h2>
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
      <span>866/1000</span>
      <div className={`${styles.certificationarrow} certification-arrow`}>
        <svg width="20" height="20" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.904 69.984L0.528 64.608L54.8 10.336L7.568 7.13599L14.608 0.095993L67.344 3.03999L70.416 55.776L63.376 62.816L60.176 15.712L5.904 69.984Z" fill="black" />
        </svg>
      </div>
    </div>

    <div className={`${styles.certificationcontent} certification-content`}>
      <p>
        During my first and second years of the BUT MMI program, I had the opportunity to apply the skills I acquired in courses on accessibility, ergonomics, SEO, and other key aspects of web development. This experience helped me strengthen my understanding of best practices in web quality, aligned with the standards defined by Opquast. 
        In April 2024, I successfully passed the Opquast certification, which further deepened my expertise in delivering high-quality digital products that adhere to the highest standards of user experience, accessibility, and environmental considerations. 
        As a web developer, this training supports my commitment to creating exceptional and impactful projects.
      </p>
      <a 
        href="https://directory.opquast.com/fr/certificat/WZ049R/" 
        target="_blank" 
        title="Opquast Certification - My official certificate"
      >
        <b>View my Opquast certification</b>
      </a>
    </div>
  </div>
</div>
        </section>

        <section className={styles.projects}>
          <h1 id="projects" className={styles.projectstitle}>WORK</h1>
          <div className={styles.projectsContainer}>
            {[...projects].reverse().map((project) => (
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