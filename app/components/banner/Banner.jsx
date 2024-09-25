import styles from "./Banner.module.css";
import { Reveal } from "../RevealLeftToRight";
export function Banner() {
  return (
    <div className={styles.container}>
      <Reveal>
        <p className={styles.bannerPrevTitle}>Viktor González Pinto</p>
      </Reveal>
      <Reveal>
        <h1 className={styles.bannerTitle}>
          <span>PROGRAMADOR</span>
          <span>WEB</span>
        </h1>
      </Reveal>
      <Reveal>
        <div className={styles.bannerSubtitle}>FREELANCE</div>
      </Reveal>
    </div>
  );
}
