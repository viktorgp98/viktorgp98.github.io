import styles from "./Footer.module.css";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { Reveal } from "../Reveal";
import { RevealRight } from "../RevealRight";

export function Footer() {
  return (
    <div>
      <RevealRight>
        <div className={styles.container}>
          <div>
            <div>
              <h1 className={styles.info}>Viktor González Pinto</h1>/ Freelance
              Web Developer — CL
            </div>
            <div className={styles.infoBtn}>
              <a
                className={styles.buttonMail}
                href="mailto:viktor.gonzalezp98@gmail.com"
              >
                <span className={styles.buttonTop}>Enviar un email</span>
              </a>
            </div>
          </div>
          <div className={styles.socials}>
            <h1 className={styles.socialsTitle}>Contáctame</h1>
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
        </div>
        <Reveal>
          <div className={styles.watermark}>©2024 Viktor González P.</div>
        </Reveal>
      </RevealRight>
    </div>
  );
}
