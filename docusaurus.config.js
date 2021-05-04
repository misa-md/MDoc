// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'HPCDE lab',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'img/undraw_open_source.svg',
    infoLink: 'https://git.hpcer.dev/HPCer/',
    pinned: true,
  },
];

// note: if set process.env.DOC_DEPLOY_PATH, it must start and end with '/'.
const siteBaseUrl = process.env.NODE_ENV === 'production'? (process.env.DOC_DEPLOY_PATH? process.env.DOC_DEPLOY_PATH : '/MDoc') : '/'

const defaultDocGitRepo = 'https://git.hpcer.dev/HPCer/MISA-MD/MDoc'
const defaultSourceGitRepo = 'https://git.hpcer.dev/HPCer/MISA-MD/MISA-MD'
const defaultSiteUrl = 'https://hpcer.pages.hpcer.dev/MISA-MD/MDoc'

const docGitRepo = process.env.DOC_GIT_REPO? process.env.DOC_GIT_REPO : defaultDocGitRepo
// for document edit url, fallback is the same for github and gitlab.
const docEditUrl = process.env.DOC_EDIT_URL? process.env.DOC_EDIT_URL : docGitRepo + '/blob/master/'
const docSiteUrl = process.env.DOC_SITE_URL? process.env.DOC_SITE_URL : defaultSiteUrl
const sourceGitRepo = process.env.SOURCE_GIT_REPO ? process.env.SOURCE_GIT_REPO : defaultSourceGitRepo


module.exports = {
  title: 'MISA-MD',
  tagline: 'A massively parallel molecular dynamics simulation program',
  url: docSiteUrl,
  baseUrl: siteBaseUrl,
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'USTB', // Usually your GitHub org/user name.
  projectName: 'MDoc', // Usually your repo name.
  customFields: {
    users: users,
    repoUrl: sourceGitRepo,
    repoEditUrl: docEditUrl,
  },
  themeConfig: {
    navbar: {
      title: 'MISA-MD',
      logo: {
        alt: 'MISA-MD Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'overview',
          position: 'left',
          label: 'Docs',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          to: '/md-tools/overview',
          label: 'md-tools',
          position: 'left',
          activeBaseRegex: `/md-tools/`,
        },
        {
          to: '/help',
          label: 'Help',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          // dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
        },
        {
          href: 'https://github.com/misa-md/misa-md',
          // label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    image: 'img/undraw_online.svg',
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'User Docs',
              to: '/docs/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Issues',
              href: sourceGitRepo + '/issues',
            },
            {
              label: 'Grpup',
              href: 'https://github.com/misa-md',
            },
            {
              label: 'md-tools',
              href: 'https://github.com/misa-md/md-tools/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub Mirror',
              href: 'https://github.com/misa-md/MISA-MD',
            },
          ],
        },
      ],
      logo: {
        src: 'img/logo.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} HPCDE lab, USTB. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // homePageId: 'overview',
          path: 'docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: docEditUrl,
          lastVersion: 'current',
          versions: {
            current: {
              label: `v0.5.0 (unreleased)`,
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: docEditUrl,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'md-tools',
        path: 'md-tools',
        routeBasePath: 'md-tools',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editUrl: docEditUrl,
        sidebarPath: require.resolve('./sidebars-md-tools.js'),
      },
    ],
  ],
};
