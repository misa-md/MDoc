import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import {
  useVersions,
  useLatestVersion,
} from '@docusaurus/plugin-content-docs/client';

function Version() {
  const {siteConfig} = useDocusaurusContext();
  const versions = useVersions();
  const latestVersion = useLatestVersion();
  const currentVersion = versions.find((version) => version.name === 'current');
  const pastVersions = versions.filter(
    (version) => version !== latestVersion && version.name !== 'current',
  );
  const stableVersion = pastVersions.shift();
  let repoUrl = siteConfig.url ? siteConfig.url : `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  if (siteConfig.customFields && siteConfig.customFields.repoUrl) {
    repoUrl = siteConfig.customFields.repoUrl
  }

  const versionedNavUrl = (base) => {
      return base + '/overview';
  }

  return (
    <Layout
      title="Versions"
      permalink="/versions"
      description="Docusaurus 2 Versions page listing all documented site versions">
      <main className="container margin-vert--lg">
        <h1>Docusaurus documentation versions</h1>

        {stableVersion && (
          <div className="margin-bottom--lg">
            <h3 id="next">Current version (Stable)</h3>
            <p>
              Here you can find the documentation for current released version.
            </p>
            <table>
              <tbody>
                <tr>
                  <th>{stableVersion.name}</th>
                  <td>
                    <Link to={`${versionedNavUrl(stableVersion.path)}`}>Documentation</Link>
                  </td>
                  {/* <td>
                    <a href={`${repoUrl}/releases/tag/v${stableVersion.name}`}>
                      Release Notes
                    </a>
                  </td> */}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="margin-bottom--lg">
          <h3 id="latest">Next version (Unreleased)</h3>
          <p>
            Here you can find the documentation for work-in-process unreleased
            version.
          </p>
          <table>
            <tbody>
              <tr>
                <th>{latestVersion.label}</th>
                <td>
                  <Link to={`${versionedNavUrl(latestVersion.path)}`}>Documentation</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {currentVersion !== latestVersion && (
          <div className="margin-bottom--lg">
            <h3 id="next">Next version (Unreleased)</h3>
            <p>Here you can find the documentation for unreleased version.</p>
            <table>
              <tbody>
                <tr>
                  <th>master</th>
                  <td>
                    <Link to={`${versionedNavUrl(currentVersion.path)}`}>Documentation</Link>
                  </td>
                  <td>
                    <a href={repoUrl}>Source Code</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {pastVersions.length > 0 && (
          <div className="margin-bottom--lg">
            <h3 id="archive">Past versions (Not maintained anymore)</h3>
            <p>
              Here you can find documentation for previous versions of
              Docusaurus.
            </p>
            <table>
              <tbody>
                {pastVersions.map((version) => (
                  <tr key={version.name}>
                    <th>{version.label}</th>
                    <td>
                      <Link to={`${versionedNavUrl(version.path)}`}>Documentation</Link>
                    </td>
                    <td>
                      <a href={`${repoUrl}/releases/tag/v${version.name}`}>
                        Release Notes
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </Layout>
  );
}

export default Version;
