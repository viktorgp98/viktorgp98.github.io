import styles from "./page.module.css";
import { Banner } from "../components/banner/Banner";
import { Projects } from "../components/SectionListOfProjects/Projects";
import { About } from "../components/SectionAbout/About";
export default function Home() {
  return (
    <main className={styles.main}>
      {/* BANNER */}
      <section className={styles.center}>
        <Banner />
      </section>
      {/* SECCION PROYECTOS */}
      <section className={styles.sectionDark}>
        <Projects />
      </section>
      {/* SECCION SOBREMI */}
      {/* <section>
        <About />
      </section> */}
    </main>
  );
}
