import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

function Users() {
  const { siteConfig = {} } = useDocusaurusContext();

  let showcase = <></>;
  if (
    siteConfig.customFields &&
    (siteConfig.customFields.users || []).length !== 0
  ) {
    showcase = siteConfig.customFields.users
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
  }

  let editUrl = `${siteConfig.url}/edit/master/`; // github default edit url
  if (siteConfig.customFields && siteConfig.customFields.repoEditUrl) {
    editUrl = siteConfig.customFields.repoEditUrl
  }
  editUrl += 'docusaurus.config.js'

  return (
    <Layout
      title={`Users from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="mainContainer">
        <section className="showcaseSection">
            <div className="container">
              <div className="row">
                <div className={styles.usersProse}>
                  <h1>Who is Using This?</h1>
                  <p>This project is used by many users</p>
                </div>
              </div>
              <div className="row logos">
                {showcase}
              </div>
              <div className="row">
                <div className={clsx("col col--12", styles.buttons, styles.addUserBtn)}>
                  <p>Are you using this project?</p>
                  <Link
                  className={clsx(
                    "button button--outline button--secondary button--lg",
                  )}
                  to={editUrl}
                >
                  Add your organization or institution
                </Link>
                </div>
              </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Users;
