"use client";
import styles from "./Projects.module.css";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Reveal } from "../Reveal";
import { RevealRight } from "../RevealRight";
//fetch de datos BD
const fetchProjects = () => {
  return fetch(
    "https://portafolioviktorgonzalez-default-rtdb.firebaseio.com/projects.json",
    {
      next: {
        revalidate: 60,
      },
    }
  ).then((res) => res.json());
};

const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplaySpeed: 8000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 844,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export async function Projects() {
  const projects = await fetchProjects();
  return (
    <div className={styles.container}>
      <div className={styles.textsContainer}>
        <RevealRight>
          <div className={styles.texts}>
            <span className={styles.title}>PROYECTOS</span>
            <span className={styles.subtitle}>
              — PROGRAMACIÓN / DISEÑO DE PÁGINAS WEB
            </span>
          </div>
        </RevealRight>
        <RevealRight>
          <div className={styles.linkContainer}>
            <Link className={styles.link} href="/projects">
              <span className={styles.link_up}>Ver todos los proyectos</span>
            </Link>
          </div>
        </RevealRight>
      </div>
      <Reveal>
        <div className={styles.projectsContainer}>
          <Slider {...settings}>
            {projects.map((project) => (
              <Link
                className={styles.slideLink}
                href="/projects/{id}"
                as={`/projects/${project.id}`}
              >
                <div className={styles.imgContainer}>
                  <img
                    className={styles.img}
                    src={`${project.image_preview}`}
                    alt={`${project.title}_image`}
                  />
                </div>
                <div className={styles.slideText}>
                  <span
                    className={styles.slideTitle}
                  >{`${project.title}`}</span>
                  <span
                    className={styles.slideSubtitle}
                  >{`${project.position}`}</span>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </Reveal>
    </div>
  );
}
