import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import styles from "./contact.module.css";

export function meta() {
  return [
    { title: "Kontakt — Klub Pingwin" },
    {
      name: "description",
      content:
        "Skontaktuj się z nami. Adres, telefon, godziny otwarcia i formularz kontaktowy.",
    },
  ];
}

type FormStatus = "idle" | "sending" | "success";

export default function Contact() {
  const { t } = useLanguage();
  const ct = t.contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(ct.form.subjectOptions[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1200);
  };

  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1>{ct.heading}</h1>
        </div>
      </header>

      <section className={`section ${styles.content}`}>
        <div className={`container ${styles.grid}`}>
          {/* Form */}
          <div className={styles.formPanel}>
            {status === "success" ? (
              <div className={styles.successMsg}>
                <span className={styles.successIcon}>✅</span>
                <p>{ct.form.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.fieldGroup}>
                  <label htmlFor="name">{ct.form.name}</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="email">{ct.form.email}</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="subject">{ct.form.subject}</label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    {ct.form.subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="message">{ct.form.message}</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "…" : ct.form.send}
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className={styles.infoPanel}>
            <div className={styles.infoCards}>
              {[
                { icon: "📍", ...ct.info.address },
                { icon: "📞", ...ct.info.phone },
                { icon: "✉️", ...ct.info.email },
                { icon: "🕐", ...ct.info.hours },
              ].map(({ icon, label, value }) => (
                <div key={label} className={styles.infoCard}>
                  <span className={styles.infoIcon}>{icon}</span>
                  <div>
                    <p className={styles.infoLabel}>{label}</p>
                    <p
                      className={styles.infoValue}
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.mapPlaceholder}>
              <p>📍 ul. Sportowa 12, Kraków</p>
              <p className={styles.mapSub}>Google Maps</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
