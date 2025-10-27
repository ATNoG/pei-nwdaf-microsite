import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Github",
    Svg: require("@site/static/img/github-mark.svg").default,
    link: "https://github.com/ATNoG/pei-nwdaf",
  },
  {
    title: "Documentation",
    Svg: require("@site/static/img/docs.svg").default,
    link: "/docs",
  },
  {
    title: "Team",
    Svg: require("@site/static/img/team.svg").default,
    link: "/team",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={link} className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
