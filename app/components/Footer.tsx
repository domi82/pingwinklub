import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span>🏓</span>
          <strong>Pingwin</strong>
        </div>
        <p className={styles.tagline}>{t.footer.tagline}</p>
        <nav className={styles.footerLinks}>
          <Link to="/">{t.nav.home}</Link>
          <Link to="/about">{t.nav.about}</Link>
          <Link to="/schedule">{t.nav.schedule}</Link>
          <Link to="/contact">{t.nav.contact}</Link>
        </nav>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
