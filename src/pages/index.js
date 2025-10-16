import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.mainTitle)}>NWDAF</h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          Intelligence in Action - AchievingTrustworthy AI-Driven Networks
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title || "Microsite"}
      description="A webpage for tracking project process."
    ><style>{`
            .navbar {
              display: none;
            }
          `}</style>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
