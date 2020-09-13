import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import blockStyle from "../css/block.module.css";

const features = [
  {
    title: "Massively Parallel",
    imageUrl: "img/undraw_react.svg",
    description: (
      <>
        Expanded to 4x10^12 and 3x10^13 atoms on sunway taihulight
        supercomputer.
      </>
    ),
  },
  {
    title: "Cascade Collision Simulation",
    imageUrl: "img/undraw_operating_system.svg",
    description: (
      <>Professional cascade collision simulation for metal material.</>
    ),
  },
  {
    title: "Open Source",
    imageUrl: "img/undraw_open_source.svg",
    description: <>It is open sourced, free to use and free to improve!</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const Block = ({ reversed, title, img, text }) => {
  const left = <div className={blockStyle.featureImage}>{img}</div>;
  const right = (
    <div className={blockStyle.featureText}>
      <h3 className={blockStyle.featureTitle}>{title}</h3>
      {text}
    </div>
  );

  return (
    <div className={blockStyle.featureContainer}>
      <div
        className={blockStyle.featureContent}
        className={clsx(blockStyle.featureContent, {
          [blockStyle.reversed]: reversed === true,
        })}
      >
        {reversed ? (
          <>
            {right}
            {left}
          </>
        ) : (
          <>
            {left}
            {right}
          </>
        )}
      </div>
    </div>
  );
};

const Showcase = () => {
  const { siteConfig = {} } = useDocusaurusContext();

  if (!siteConfig.customFields) {
    return null;
  }
  if ((siteConfig.customFields.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.customFields.users
    .filter((user) => user.pinned)
    .map((user) => (
      <div className={clsx("col col--4", styles.userContainer)}>
        <a href={user.infoLink} key={user.infoLink}>
          <img
            className={styles.userLogoImage}
            src={user.image}
            alt={user.caption}
            title={user.caption}
          />
        </a>
        <h3>{user.caption}</h3>
      </div>
    ));

  const language = null; // todo use language
  const pageUrl = (page) =>
    useBaseUrl("/") + (language ? `${language}/` : "") + page;

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>MISA-MD is used by all these people</p>
      <div className="logos row">{showcase}</div>
      <div className="row">
        <div className={clsx("col col--12", styles.buttons, styles.usersMore)}>
          <Link
            className={clsx(
              "button button--outline button--secondary button--lg",
            )}
            to={useBaseUrl("users")}
          >
            More {siteConfig.title} Users
          </Link>
        </div>
      </div>
    </div>
  );
};

const Supercomputer = () => (
  <Block
    img={
      <img
        height={200}
        src={"img/undraw_code_review.svg"}
        alt="Supercomputers"
      />
    }
    title="Typical Supercomputers supporting"
    text={
      <>
        <p>
          We have developed accelerating code for sunway and tianhe
          supercomputer, read <strong>building</strong> document for more
          detaild.
        </p>
      </>
    }
  />
);

const LearnHow = () => (
  <Block
    img={
      <img
        height={200}
        src={"img/undraw_character_drawing_.svg"}
        alt="Contributing"
      />
    }
    title="Learn How"
    reversed
    text={
      <>
        <p>
          Read our <a href="#">implementation document</a> for more technical
          details.
        </p>
      </>
    }
  />
);

const Contributing = () => (
  <Block
    img={
      <img height={200} src={"img/undraw_note_list.svg"} alt="Contributing" />
    }
    title="Contributing"
    reversed
    text={
      <>
        <p>
          Read our contributing guide to learn about our development process,
          how to propose bugfixes and improvements, and how to build and test
          your changes to MISA-MD.
        </p>
      </>
    }
  />
);

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`Home from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/overview")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section>
          <div className="container--fluid">
            <div className="row">
              <Supercomputer />
              <LearnHow />
              <Contributing />
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <Showcase />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
