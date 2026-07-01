import { useLanguage } from "../context/LanguageContext";
import styles from "./about.module.css";
import tosiaPhoto from "../images/photo-tosia.png";

export function meta() {
  return [
    { title: "O Nas — PingWin Klub" },
    {
      name: "description",
      content:
        "Poznaj historię, misję i trenerów PingWin Klubu — Twojego miejsca na tenis stołowy w Warszawie.",
    },
  ];
}

export default function About() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      {/* Page header */}
      <header className={styles.pageHeader}>
        <div className="container">
          <h1>{t.about.heading}</h1>
          <p className={styles.intro}>{t.about.intro}</p>
        </div>
      </header>

      {/* Mission */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.missionCard}>
            <h2>{t.about.mission.heading}</h2>
            <p>{t.about.mission.body}</p>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className={`section ${styles.coachesSection}`}>
        <div className="container">
          <h2 className="sectionHeading">{t.about.coaches.heading}</h2>
          <div className={styles.coachGrid}>
            {t.about.coaches.list.map((coach, i) => (
              <div key={i} className={styles.coachCard}>
                <div className={styles.coachAvatar}>
                  {coach.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className={styles.coachInfo}>
                  <h3 className={styles.coachName}>{coach.name}</h3>
                  <span className={styles.coachRole}>{coach.role}</span>
                  <p className={styles.coachBio}>{coach.bio}</p>
                  <img
                    className={styles.coachPhoto}
                    src={tosiaPhoto}
                    alt={coach.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className={`section ${styles.historySection}`}>
        <div className="container">
          <div className={styles.historyContent}>
            <h2>{t.about.history.heading}</h2>
            <p>{t.about.history.body}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
