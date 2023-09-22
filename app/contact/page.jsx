import styles from "./page.module.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { RevealRight } from "../components/RevealRight";

export default function Contact() {
  return (
    <section>
      <RevealRight>
        <div className={styles.container}>
          <div>
            <span className={styles.preTitle}>¿Algún proyecto en mente?</span>
            <div className={styles.texts}>
              <span className={styles.title}>
                <span className={styles.titleBold}>CONTACTO</span> — SOLICITUD
                DE PROYECTO
              </span>
            </div>
          </div>

          <p className={styles.info}>
            Si tienes alguna pregunta, comentario o simplemente quieres hablar
            sobre un proyecto, no dudes en ponerte en contacto conmigo.
          </p>
          <a
            className={styles.buttonMail}
            href="mailto:viktor.gonzalezp98@gmail.com"
          >
            <span className={styles.buttonTop}>Enviar un email</span>
          </a>
          <Reveal>
            <div className={styles.socials}>
              <div className={styles.icons}>
                <Link
                  id={styles.github}
                  className={styles.socialContainer}
                  target="_blank"
                  href="https://github.com/viktorgp98"
                >
                  <AiFillGithub className={styles.icon} />
                </Link>
                <Link
                  id={styles.linkedIn}
                  className={styles.socialContainer}
                  target="_blank"
                  href="https://www.linkedin.com/in/viktorgonzalezp/"
                >
                  <BiLogoLinkedin className={styles.icon} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </RevealRight>
    </section>
  );
}
