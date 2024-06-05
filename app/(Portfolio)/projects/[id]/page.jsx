import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { Reveal } from "../../../components/Reveal";
import { RevealRight } from "../../../components/RevealRight";

async function fetchProjects(id) {
  const url = `https://portafolioviktorgonzalez-default-rtdb.firebaseio.com/projects/${
    id - 1
  }.json`;
  const response = await fetch(url, {
    cache: "force-cache",
  });
  const projects = await response.json();
  return projects;
}
export async function generateStaticParams() {
  const url = `https://portafolioviktorgonzalez-default-rtdb.firebaseio.com/projects.json`;
  const response = await fetch(url, {
    cache: "force-cache",
  });
  const projects = await response.json();

  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function Project({ params, searchParams }) {
  const { id } = params;
  const project = await fetchProjects(id);
  return (
    <article key="project_article">
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
          <img
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

// export default async function Project({ params: { id } }) {
//   const project = await getProject(id);
//   return (
//     <article>
//       <div className={styles.container}>
//         <RevealRight>
//           <div className={styles.titleContainer}>
//             <span className={styles.preTitle}>Proyecto</span>
//             <span className={styles.title}>
//               <span className={styles.titleBold}>{project.title}</span>
//               &nbsp;—&nbsp;
//               {project.position}&nbsp;/&nbsp;{project.tech}
//             </span>
//             <br />
//           </div>
//         </RevealRight>
//         <Reveal>
//           <div className={styles.description}>
//             <span>{project.description}</span>
//           </div>
//         </Reveal>
//         <Link target="_blank" className={styles.link} href={project.url}>
//           <span className={styles.linkUp}>Link del proyecto</span>
//         </Link>
//         <Reveal>
//           <img
//             className={styles.img}
//             src={`${project.image}`}
//             width={1000}
//             height={3375}
//             alt={`${project.title}_image`}
//           />
//         </Reveal>
//       </div>
//     </article>
//   );
// }
