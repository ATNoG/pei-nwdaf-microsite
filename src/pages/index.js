import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
        <div className="container col-12">
          <h1 className={clsx("hero__title", styles.mainTitle)}>Intelligence in Action</h1>
          <p className={clsx("hero__subtitle", styles.subtitle)}>
              Achieving Trustworthy AI-Driven Networks
          </p>
        </div>
    </header>
  );
}

function ProjectDescription(){
  return (
    <section className={styles.description}>
<blockquote>Making networks intelligent, adaptive, and trustworthy.</blockquote>
    </section>
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
        <ProjectDescription/>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
