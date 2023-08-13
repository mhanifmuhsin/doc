import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}

        <h1 className="hero__title">Hey, I'm Hanif!</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <p>
          I am a web developer with 5 year experience working in an IT
          consulting company. Looking for a challenging role in a leading
          organization to take advantage of programming skills in front end
          developer, and participate to grow the organization and increase my
          knowledge of new trends in the IT sector.
        </p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ padding: "10px" }} className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Doc 💾
          </Link>
        </div>
        <div style={{ padding: "10px" }} className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/doc/blog">
            Blog 🛠️
          </Link>
        </div>
      </div>
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
