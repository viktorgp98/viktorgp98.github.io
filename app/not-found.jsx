import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div id={styles.oopss}>
      <div id={styles.error_text}>
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
        />
        <span>PAGINA NO ENCONTRADA</span>
        <p class={styles.p_a}>. La pagina que buscabas no existe</p>
        <a href="/" class={styles.back}>
          ... Volver al Inicio
        </a>
      </div>
    </div>
    // <div className={styles.container}>
    //   <h2>Error 404: Página no encontrada</h2>
    //   <p>Volver a la página principal</p>
    //   <p>
    //     <Link href="/">Inicio</Link>
    //   </p>
    // </div>
  );
}
