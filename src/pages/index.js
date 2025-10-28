import clsx from "clsx";
import { useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

// Network nodes for hero background
function NetworkNodes() {
  return (
    <svg className={styles.networkNodes} viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
      {/* Network connections */}
      <g opacity="0.15">
        <line x1="100" y1="50" x2="200" y2="80" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="200" y1="80" x2="320" y2="60" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="320" y1="60" x2="450" y2="100" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="450" y1="100" x2="580" y2="70" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="580" y1="70" x2="720" y2="90" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="720" y1="90" x2="850" y2="60" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="850" y1="60" x2="980" y2="80" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="980" y1="80" x2="1100" y2="50" stroke="#FFFFFF" strokeWidth="1"/>

        <line x1="150" y1="150" x2="280" y2="180" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="280" y1="180" x2="420" y2="160" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="420" y1="160" x2="560" y2="190" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="560" y1="190" x2="700" y2="170" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="700" y1="170" x2="840" y2="185" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="840" y1="185" x2="980" y2="160" stroke="#FFFFFF" strokeWidth="1"/>

        <line x1="120" y1="250" x2="240" y2="280" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="240" y1="280" x2="380" y2="260" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="380" y1="260" x2="520" y2="290" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="520" y1="290" x2="660" y2="270" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="660" y1="270" x2="800" y2="285" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="800" y1="285" x2="940" y2="260" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="940" y1="260" x2="1080" y2="280" stroke="#FFFFFF" strokeWidth="1"/>

        {/* Vertical connections */}
        <line x1="200" y1="80" x2="150" y2="150" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="320" y1="60" x2="280" y2="180" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="450" y1="100" x2="420" y2="160" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="580" y1="70" x2="560" y2="190" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="720" y1="90" x2="700" y2="170" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="850" y1="60" x2="840" y2="185" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="980" y1="80" x2="980" y2="160" stroke="#FFFFFF" strokeWidth="1"/>

        <line x1="150" y1="150" x2="120" y2="250" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="280" y1="180" x2="240" y2="280" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="420" y1="160" x2="380" y2="260" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="560" y1="190" x2="520" y2="290" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="700" y1="170" x2="660" y2="270" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="840" y1="185" x2="800" y2="285" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="980" y1="160" x2="940" y2="260" stroke="#FFFFFF" strokeWidth="1"/>
      </g>

      {/* Network nodes */}
      <g opacity="0.3">
        <circle cx="100" cy="50" r="4" fill="#FFFFFF"/>
        <circle cx="200" cy="80" r="5" fill="#FFFFFF"/>
        <circle cx="320" cy="60" r="4" fill="#FFFFFF"/>
        <circle cx="450" cy="100" r="6" fill="#FFFFFF"/>
        <circle cx="580" cy="70" r="5" fill="#FFFFFF"/>
        <circle cx="720" cy="90" r="4" fill="#FFFFFF"/>
        <circle cx="850" cy="60" r="5" fill="#FFFFFF"/>
        <circle cx="980" cy="80" r="4" fill="#FFFFFF"/>
        <circle cx="1100" cy="50" r="5" fill="#FFFFFF"/>

        <circle cx="150" cy="150" r="5" fill="#FFFFFF"/>
        <circle cx="280" cy="180" r="4" fill="#FFFFFF"/>
        <circle cx="420" cy="160" r="6" fill="#FFFFFF"/>
        <circle cx="560" cy="190" r="5" fill="#FFFFFF"/>
        <circle cx="700" cy="170" r="4" fill="#FFFFFF"/>
        <circle cx="840" cy="185" r="5" fill="#FFFFFF"/>
        <circle cx="980" cy="160" r="4" fill="#FFFFFF"/>

        <circle cx="120" cy="250" r="4" fill="#FFFFFF"/>
        <circle cx="240" cy="280" r="5" fill="#FFFFFF"/>
        <circle cx="380" cy="260" r="4" fill="#FFFFFF"/>
        <circle cx="520" cy="290" r="6" fill="#FFFFFF"/>
        <circle cx="660" cy="270" r="5" fill="#FFFFFF"/>
        <circle cx="800" cy="285" r="4" fill="#FFFFFF"/>
        <circle cx="940" cy="260" r="5" fill="#FFFFFF"/>
        <circle cx="1080" cy="280" r="4" fill="#FFFFFF"/>
      </g>
    </svg>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={styles.heroBackground}>
        <NetworkNodes />
      </div>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={clsx("hero__title", styles.mainTitle)}>
            Intelligence in Action
          </h1>
          <p className={clsx("hero__subtitle", styles.subtitle)}>
            Achieving Trustworthy AI-Driven Networks
          </p>
        </div>
      </div>
    </header>
  );
}

function ProjectDescription() {
  return (
    <section className={styles.descriptionSection}>
      <div className="container">
        <div className={styles.projectBox}>
          <div className={styles.descriptionContent}>
            <div className={styles.iconContainer}>
              <img
                src={require("@site/static/img/icon.png").default}
                className={styles.placeholderIcon}
              />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.descriptionTitle}>Our Mission</h2>
              <blockquote className={styles.descriptionQuote}>
                Making networks intelligent, adaptive, and trustworthy.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height
      const heroSection = document.querySelector(`.${styles.heroBanner}`);
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        // Show navbar when scrolled past the hero section
        setShowNavbar(window.scrollY > heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout
      title={siteConfig.title || "Microsite"}
      description="A webpage for tracking project process."
    >
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
          transition: transform 0.3s ease, opacity 0.3s ease;
          ${!showNavbar ? 'transform: translateY(-100%); opacity: 0; pointer-events: none;' : 'transform: translateY(0); opacity: 1;'}
        }
        [data-theme='dark'] .navbar {
          background-color: rgba(30, 41, 59, 0.95);
        }
      `}</style>
      <HomepageHeader />
      <main className={styles.mainContent}>
        <ProjectDescription />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
