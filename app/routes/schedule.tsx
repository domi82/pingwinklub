import { useLanguage } from '../context/LanguageContext';
import { schedule } from '../data/schedule';
import type { Level } from '../data/schedule';
import styles from './schedule.module.css';

export function meta() {
  return [
    { title: 'Grafik Zajęć — PingWin Klub' },
    {
      name: 'description',
      content: 'Sprawdź grafik zajęć z tenisa stołowego w PingWin Klubie. Grupy dla dzieci, juniorów i dorosłych.',
    },
  ];
}

const levelColors: Record<Level, string> = {
  beginner: styles.levelBeginner,
  intermediate: styles.levelIntermediate,
  advanced: styles.levelAdvanced,
  open: styles.levelOpen,
};

export default function Schedule() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1>{t.schedule.heading}</h1>
          <p className={styles.subheading}>{t.schedule.subheading}</p>
        </div>
      </header>

      <section className={`section ${styles.content}`}>
        <div className="container">
          {/* Legend */}
          <div className={styles.legend}>
            {(['beginner', 'intermediate', 'advanced', 'open'] as Level[]).map((lvl) => (
              <span key={lvl} className={`${styles.legendBadge} ${levelColors[lvl]}`}>
                {t.schedule.legend[lvl]}
              </span>
            ))}
          </div>

          {/* Table */}
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{t.schedule.table.day}</th>
                  <th>{t.schedule.table.time}</th>
                  <th>{t.schedule.table.level}</th>
                  <th>{t.schedule.table.group}</th>
                  <th>{t.schedule.table.coach}</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((entry, i) => (
                  <tr key={i}>
                    <td className={styles.dayCell}>{t.schedule.days[entry.day]}</td>
                    <td className={styles.timeCell}>{entry.time}</td>
                    <td>
                      <span className={`${styles.badge} ${levelColors[entry.level]}`}>
                        {t.schedule.legend[entry.level]}
                      </span>
                    </td>
                    <td>{t.schedule.groups[entry.group]}</td>
                    <td className={styles.coachCell}>{entry.coach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.note}>{t.schedule.note}</p>
        </div>
      </section>
    </div>
  );
}
