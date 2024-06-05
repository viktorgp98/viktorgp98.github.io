import styles from "./page.module.css";
import Link from "next/link";
import { AiOutlineLink, AiFillHtml5 } from "react-icons/ai";
import { BiLogoWordpress, BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
import { RevealRight } from "../../components/RevealRight";
import { Reveal } from "../../components/Reveal";
import { use } from "react";

async function getProjects() {
  return await (
    await fetch(
      "https://portafolioviktorgonzalez-default-rtdb.firebaseio.com/projects.json"
    )
  ).json();
}
export default function Staticprop() {
  const projects = use(getProjects());
  return (
    <section className={styles.container}>
      <RevealRight>
        <div className={styles.texts}>
          <span className={styles.title}>
            <span className={styles.titleBold}>Proyectos</span> — Web Desing
          </span>
        </div>
        <div className={styles.info}>
          <p>
            Aquí podrás explorar una selección de los trabajos y proyectos que
            he realizado como desarrollador web.
          </p>
          <p>
            Desde sitios web interactivos hasta aplicaciones web dinámicas, cada
            proyecto ha sido abordado con creatividad, atención al detalle y un
            enfoque centrado en el usuario.
          </p>
        </div>
      </RevealRight>
      <div>
        <Reveal>
          <article className={styles.projects} key="projects">
            {projects.map((project) => (
              <div id={`id_${project.title}`} className={styles.card}>
                <img
                  src={`${project.image_preview}`}
                  className={styles.card_img}
                  alt={`${project.title}_image`}
                />
                <ul key={project.id} className={styles.social_media}>
                  <Link
                    alt={`${project.title}_projectlink`}
                    className={styles.icon}
                    href={`/projects/${project.id}`
                      .replace(/\s+/g, "-")
                      .toLowerCase()}
                  >
                    <li key={project.id}>
                      <AiOutlineLink />
                    </li>
                  </Link>
                </ul>

                <div className={styles.card_info}>
                  <p className={styles.card_title}>{project.title}</p>
                  <p className={styles.card_subtitle}>{project.position}</p>
                  <div className={styles.card_tech}>
                    {iconTech(`${project.tech}`)}
                  </div>
                </div>
              </div>
            ))}
          </article>
        </Reveal>
      </div>
    </section>
  );
}

// const fetchProjects = () => {
//   return fetch(
//     "https://portafolioviktorgonzalez-default-rtdb.firebaseio.com/projects.json",
//     {
//       next: {
//         revalidate: 60,
//       },
//     }
//   ).then((res) => res.json());
// };

const iconTech = (tech) => {
  switch (tech) {
    case "Wordpress":
      return (
        <div>
          <BiLogoWordpress />
        </div>
      );
      break;
    case "HTML, CSS, JS":
      return (
        <div>
          <AiFillHtml5 />
          <BiLogoCss3 />
          <BiLogoJavascript />
        </div>
      );
      break;
  }
};

// export default async function Projects() {
//   const projects = await fetchProjects();
//   return (
//     <section className={styles.container}>
//       <RevealRight>
//         <div className={styles.texts}>
//           <span className={styles.title}>
//             <span className={styles.titleBold}>Proyectos</span> — Web Desing
//           </span>
//         </div>

//         <div className={styles.info}>
//           <p>
//             Aquí podrás explorar una selección de los trabajos y proyectos que
//             he realizado como desarrollador web.
//           </p>
//           <p>
//             Desde sitios web interactivos hasta aplicaciones web dinámicas, cada
//             proyecto ha sido abordado con creatividad, atención al detalle y un
//             enfoque centrado en el usuario.
//           </p>
//         </div>
//       </RevealRight>
//       <div>
//         <Reveal>
//           <article className={styles.projects} key="projects">
//             {projects.map(
//               (
//                 project //por cada objeto de la lista de objetos mostrar un article en pantalla
//               ) => (
//                 <div id={`id_${project.title}`} className={styles.card}>
//                   <img
//                     src={`${project.image_preview}`}
//                     className={styles.card_img}
//                     alt={`${project.title}_image`}
//                   />
//                   <ul key={project.id} className={styles.social_media}>
//                     <Link
//                       alt={`${project.title}_projectlink`}
//                       className={styles.icon}
//                       href="/projects/{id}"
//                       as={`/projects/${project.id}`}
//                     >
//                       <li key={project.id}>
//                         <AiOutlineLink />
//                       </li>
//                     </Link>
//                   </ul>

//                   <div className={styles.card_info}>
//                     <p className={styles.card_title}>{project.title}</p>
//                     <p className={styles.card_subtitle}>{project.position}</p>
//                     <div className={styles.card_tech}>
//                       {iconTech(`${project.tech}`)}
//                     </div>
//                   </div>
//                 </div>
//               )
//             )}
//           </article>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
