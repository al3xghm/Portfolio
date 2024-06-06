import React from 'react';
import { useRouter } from 'next/router';
import projects from '../../data/projects.json';
import styles from '../../styles/page.module.scss';
const WorkPage = ({ project }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className={styles.projectcontainer}>
        <div classeName={styles.projecthead}>
        <h1>{project.title}</h1>
        </div>
        <p>{project.description}</p>
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
