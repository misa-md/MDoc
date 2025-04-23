import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function Help() {
  const { siteConfig = {} } = useDocusaurusContext();
  return (
    <Layout
      title={`Help from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="helpContainer">
        <section className="helpSection">
          <div className="container">
            <div className="row">
              <header className={styles.helpPostHeader}>
                <h1>Need help?</h1>
              </header>
            </div>
            <div className="row">
              <p>This project is maintained by a dedicated group of people.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Help;
