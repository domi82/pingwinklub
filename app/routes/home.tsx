import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import styles from './home.module.css';

export function meta() {
  return [
    { title: 'Pingwin Klub — Tenis Stołowy Warszawa' },
    {
      name: 'description',
      content:
        'Zajęcia z tenisa stołowego dla dzieci, juniorów i dorosłych w Warszawie. Dołącz do Pingwin Klubu!',
    },
  ];
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTagline}>{t.home.hero.tagline}</h1>
          <p className={styles.heroSub}>{t.home.hero.subtagline}</p>
          <Link to="/schedule" className={`btn btn-accent ${styles.heroCta}`}>
            {t.home.hero.cta} →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className={`section ${styles.features}`}>
        <div className="container">
          <h2 className="sectionHeading">Pingwin Klub</h2>
          <div className={styles.featureGrid}>
            {t.home.features.map((f, i) => (
              <div key={i} className={styles.featureCard}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={`container ${styles.ctaInner}`}>
          <p className={styles.ctaText}>{t.home.ctaBanner.text}</p>
          <Link to="/contact" className="btn btn-accent">
            {t.home.ctaBanner.button}
          </Link>
        </div>
      </section>
    </>
  );
}
