import React from 'react';
import { useRouter } from 'next/router';
import projects from '../../data/projects.json';
import styles from '../../styles/slug.module.scss';
import Head from 'next/head';

const WorkPage = ({ project }) => {
  const router = useRouter();

  if (!project) {
    return <div>Project not found</div>;
  }

  // Trouver l'index du projet actuel
  const currentIndex = projects.findIndex((proj) => proj.slug === project.slug);

  // Trouver les projets précédents et suivants en bouclant autour de la liste
  const previousProject = currentIndex === 0 ? projects[projects.length - 1] : projects[currentIndex - 1];
  const nextProject = currentIndex === projects.length - 1 ? projects[0] : projects[currentIndex + 1];

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{`${project.title} | Alexandre GHMIR`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Alexandre GHMIR" />
        <meta name="title" content={project.title} />
        <meta property="og:url" content={`https://alexghm.fr/project/${project.slug}`} />
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.images[0]} />
      </Head>
      <div className={styles.projectcontainer}>


        <div className={styles.projectleft}>
          <div className={styles.projectheader}>

            <div className={styles.projectbreadcrumb}>
              <a href="/">← Back to home</a>
            </div>
            <h1>{project.title}</h1>
            <div className={styles.aboutButton}>
              <a href={project.link} target='_blank' title='Visit project'>Visit project →</a>
            </div>

          </div>

          <div className={styles.projectinfo}>
            <p>{project.type} project, {project.date}</p>
            <div className={styles.skillsContainer}>
              {project.skills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>

          </div>
        </div>

        <div className={styles.projectright}>
          <p>"{project.description}"</p>
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={project.title} />
          ))}
        </div>

      </div>

      <div className={styles.projectnav}>
        <a href={`/project/${previousProject.slug}`} className={styles.previousProject}>
          <strong>Previous Project</strong>
          <div className={styles.projectImage} style={{ backgroundImage: `url(${previousProject.images[0]})` }}>
            <div className={styles.overlay}></div>
          </div>
          <p>{previousProject.title}</p>
        </a>
        <a href={`/project/${nextProject.slug}`} className={styles.nextProject}>
          <strong>Next Project</strong>
          <div className={styles.projectImage} style={{ backgroundImage: `url(${nextProject.images[0]})` }}>
            <div className={styles.overlay}></div>
          </div>
          <p>{nextProject.title}</p>
        </a>
      </div>
    </>
  );
};

export default WorkPage;

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find((proj) => proj.slug === params.slug);
  return { props: { project } };
}
