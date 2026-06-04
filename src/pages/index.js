import clsx from "clsx";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

const GITHUB_URL = "https://github.com/ATNoG/pei-nwdaf";

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <h1 className={clsx("hero__title", styles.mainTitle)}>
              Intelligence in Action
            </h1>
            <p className={clsx("hero__subtitle", styles.subtitle)}>
              Turning network traffic into trustworthy, automated decisions.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.ctaPrimary} to="/docs">
                View the docs
              </Link>
              <Link className={styles.ctaGhost} to="/api/ingestion">
                API reference
              </Link>
              <Link className={styles.ctaText} href={GITHUB_URL}>
                GitHub ↗
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            {/* WebGL scene — client-only so the static build never touches window/WebGL */}
            <BrowserOnly fallback={<div className={styles.heroFallback} />}>
              {() => {
                const HeroScene = require("../components/HeroScene").default;
                return <HeroScene />;
              }}
            </BrowserOnly>
          </div>
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
                alt="AION project logo"
              />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.descriptionTitle}>Our mission</h2>
              <blockquote className={styles.descriptionQuote}>
                Turning network traffic into decisions.
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

  return (
    <Layout
      title={siteConfig.title || "Microsite"}
      description="A webpage for tracking project process."
    >
      <HomepageHeader />
      <main className={styles.mainContent}>
        <ProjectDescription />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
