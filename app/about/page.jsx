import Image from "next/image";
import styles from "./page.module.css";
import { RevealRight } from "../components/RevealRight";
import { Reveal } from "../components/Reveal";
export default function AboutPage() {
  return (
    <section className={styles.container}>
      <div className={styles.aboutme}>
        <RevealRight>
          <span className={styles.preTitle}>Un poco sobre mí</span>
          <div className={styles.titleContainer}>
            <span className={styles.title}>
              <span className={styles.titleBold}>Viktor González Pinto </span>
              &nbsp;—&nbsp;Freelance Web Developer
            </span>
          </div>
        </RevealRight>
        <Reveal>
          <Image
            className={styles.img}
            priority
            src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/fotoviktor.webp?alt=media&token=1a5d3c0b-1346-42ff-b184-73b81b103ee0"
            width={450}
            height={500}
            alt="Foto Viktor Gonzalez"
          ></Image>
        </Reveal>
        <Reveal>
          <p className={styles.subTitle}>
            <span className={styles.subTitleBold}>Viktor González&nbsp;</span> —
            Desde
            <span className={styles.subTitleBold}>&nbsp;Chile&nbsp;</span>—
            Analista Programador con{" "}
            <span className={styles.subTitleBold}>
              &nbsp;1 año de experiencia
            </span>
          </p>
        </Reveal>
      </div>
      <div className={styles.description}>
        <p>
          Hola, soy Viktor, un apasionado desarrollador web con un ojo para la
          creatividad y una pasión por la innovación digital. Realizo trabajos
          tanto de Front-end como Back-end, mediante distintos lenguajes de
          programación.
        </p>
        <p>
          Mi objetivo es asegurarme de que los sitios web sean funcionales y
          estéticamente atractivos. Me apasiona el diseño y la funcionalidad, y
          me esfuerzo por crear soluciones web efectivas.
        </p>
      </div>
      <a
        className={styles.button}
        href="https://www.linkedin.com/in/viktorgonzalezp/"
        target="_blank"
      >
        <span className={styles.buttonTop}>Perfil de LinkedIn</span>
      </a>
    </section>
  );
}
