"use client";
import Link from "next/link";
import styles from "./Navigation.module.css";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  {
    id: "1",
    label: "Proyectos",
    route: "/projects",
  },
  {
    id: "2",
    label: "Sobre mí",
    route: "/about",
  },
  {
    id: "3",
    label: "Contacto",
    route: "/contact",
  },
];

export function Navigation() {
  // active link
  const pathname = usePathname();
  // toggle navbar
  const [active, setActive] = useState(false);

  return (
    <header className={styles.header} id="header">
      <nav className={styles.navbar}>
        <Link
          className={styles.nav__logo}
          href="/"
          onClick={() => setActive(false)}
        >
          <Image
            alt="ViktorGonzalez Logo"
            src="/viktor_logo_color_white.svg"
            height={100}
            width={150}
          />
        </Link>
        <div id="menuToggle" className={styles.nav__toggle}>
          <input
            id={styles.checkbox}
            type="checkbox"
            onClick={() => setActive(!active)}
          />
          <label className={styles.nav__icon} htmlFor={styles.checkbox}>
            <div
              className={active ? styles.bar__top_active : styles.bar__top}
            ></div>
            <div
              className={
                active ? styles.bar__middle_active : styles.bar__middle
              }
            ></div>
            <div
              className={
                active ? styles.bar__bottom_active : styles.bar__bottom
              }
            ></div>
            {/* <div className={styles.bar__top}></div>
            <div className={styles.bar__middle}></div>
            <div className={styles.bar__bottom}></div> */}
          </label>
        </div>
        <div
          id="nav-menu"
          className={active ? styles.nav__menu_active : styles.nav__menu}
        >
          <ul className={styles.nav__list} onClick={() => setActive(false)}>
            {links.map((link) => (
              <li key={link.id} id={link.id} className={styles.nav__item}>
                <Link
                  id={link.id}
                  key={link.id}
                  className={pathname == link.route ? styles.active : ""}
                  href={link.route}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
