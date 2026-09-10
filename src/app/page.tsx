import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const events = [
    { name: "CADVista", url: "https://forms.gle/gKbb9LioK8j4NMxK8", tag: "DESIGN" },
    { name: "Counterstrike 1.6", url: "https://forms.gle/VNwiZj1S7zPHpVza8", tag: "STRATEGY" },
    { name: "Film se Reel Tak", url: "https://forms.gle/EyLKEUWAwhatihgz6", tag: "CREATIVITY" },
    { name: "Rocket Shoot", url: "https://forms.gle/NazfsbtRZS5xbh298", tag: "BUILD" },
    { name: "The Interview Room", url: "https://forms.gle/E5QL3AYtLbAJwWGY7", tag: "INTERACTIVE" },
    { name: "AutoHUNT", url: "https://forms.gle/Ah1jMPthdMEgrtpY8", tag: "TREASURE HUNT" },
  ];

  return (
    <>
      {/* ── Layered Background ── */}
      <div className="background-wrapper">
        <div className="tech-grid" />
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="gear-arc gear-arc-1" />
        <div className="gear-arc gear-arc-2" />
        <span className="coord-label coord-tl">X:00.00 Y:00.00</span>
        <span className="coord-label coord-br">MOMENTUM&apos;26 // REV.01</span>
      </div>

      {/* ── Main Content ── */}
      <main className={styles.main}>
        <div className={styles.splitLayout}>
          {/* ── LEFT PANEL: Hero/Brand ── */}
          <section className={styles.hero} aria-label="MOMENTUM Hero">
            <div className={styles.logoContainer}>
              <div className={styles.logoGlow} />
              <Image
                src="/momentum-logo.png"
                alt="MOMENTUM'26 — Mechanical Engineering Technical Fest Logo"
                width={280}
                height={280}
                className={styles.logoImage}
                priority
              />
            </div>

            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                MOMENTUM<span className={styles.heroYear}>&apos;26</span>
              </h1>
              <p className={styles.heroLabel}>
                <span className={styles.heroDot} />
                DEPARTMENT OF MECHANICAL ENGINEERING - SCET
              </p>
              <div className={styles.heroDivider} />
              <a
                href="https://www.instagram.com/momentum_2k26"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instaButton}
                aria-label="Follow us on Instagram"
              >
                <svg
                  className={styles.instaIcon}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
                <span>Follow us on Instagram</span>
              </a>
              <p className={styles.heroSub}>Technical Fest</p>
              <p className={styles.credit}>Developed By: Archan Sharma</p>
            </div>
          </section>

          {/* ── RIGHT PANEL: Events ── */}
          <div className={styles.rightPanel}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLine} />
              <span className={styles.sectionLabel}>EVENT REGISTRATION</span>
              <span className={styles.sectionLine} />
            </div>

            <section
              className={styles.eventsGrid}
              aria-label="Event Registration"
            >
              {events.map((event, index) => (
                <a
                  key={index}
                  href={event.url}
                  className={styles.card}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ animationDelay: `${0.15 + index * 0.08}s` }}
                  aria-label={`Register for ${event.name}`}
                >
                  <div className={styles.cardAccent} />
                  <div className={styles.cardBody}>
                    <span className={styles.cardTag}>{event.tag}</span>
                    <h2 className={styles.cardName}>{event.name}</h2>
                  </div>
                  <div className={styles.cardCta}>
                    <span className={styles.ctaText}>REGISTER</span>
                    <svg
                      className={styles.ctaArrow}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <div className={styles.cardShimmer} />
                </a>
              ))}
            </section>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className={styles.footer}>
          <div className={styles.footerDivider} />
          <p className={styles.footerBrand}>MOMENTUM&apos;26</p>
          <p className={styles.footerDept}>
            Department of Mechanical Engineering
          </p>
          <p className={styles.footerCollege}>SCET</p>
          <p className={styles.footerMotto}>Engineered to Move.</p>
        </footer>
      </main>
    </>
  );
}
