import { useState } from "react";
import { NavLink, Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import logo from "../images/logo-transparent.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { t, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} onClick={closeMenu}>
          <img
            src={logo}
            alt="PingWin Klub logo"
            className={styles.brandLogo}
          />
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          <li>
            <NavLink to="/" end className={linkClass} onClick={closeMenu}>
              {t.nav.home}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass} onClick={closeMenu}>
              {t.nav.about}
            </NavLink>
          </li>
          <li>
            <NavLink to="/schedule" className={linkClass} onClick={closeMenu}>
              {t.nav.schedule}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
              {t.nav.contact}
            </NavLink>
          </li>
        </ul>

        <div className={styles.actions}>
          <button className={styles.langBtn} onClick={toggleLanguage}>
            {t.nav.langToggle}
          </button>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
