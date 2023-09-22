"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { Reveal } from "../../components/Reveal";
import { RevealRight } from "../../components/RevealRight";

const fetchSingleProject = (id) => {
  return fetch(
    `https://portafolioviktorgonzalez-default-rtdb.firebaseio.com/projects/${
      id - 1
    }.json`,
    {
      next: {
        revalidate: 60,
      },
    }
  ).then((res) => res.json());
};

export default async function Project({ params }) {
  const { id } = params;
  const project = await fetchSingleProject(id);

  return (
    <article>
      <div className={styles.container}>
        <RevealRight>
          <div className={styles.titleContainer}>
            <span className={styles.preTitle}>Proyecto</span>
            <span className={styles.title}>
              <span className={styles.titleBold}>{project.title}</span>
              &nbsp;—&nbsp;
              {project.position}&nbsp;/&nbsp;{project.tech}
            </span>
            <br />
          </div>
        </RevealRight>
        <Reveal>
          <div className={styles.description}>
            <span>{project.description}</span>
          </div>
        </Reveal>
        <Link target="_blank" className={styles.link} href={project.url}>
          <span className={styles.linkUp}>Link del proyecto</span>
        </Link>
        <Reveal>
          <Image
            className={styles.img}
            src={`${project.image}`}
            width={1000}
            height={3375}
            alt={`${project.title}_image`}
          />
        </Reveal>
      </div>
    </article>
  );
}
