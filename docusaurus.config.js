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

const siteBaseUrl = process.env.DOC_SERVER_PATH? process.env.DOC_SERVER_PATH : '/'

module.exports = {
  title: 'MISA-MD',
  tagline: 'A massively parallel molecular dynamics simulation program',
  url: 'https://hpcer.pages.hpcer.dev/CrystalMD/MDoc',
  baseUrl: siteBaseUrl,
  onBrokenLinks: 'log',
  favicon: 'img/favicon.ico',
  organizationName: 'USTB', // Usually your GitHub org/user name.
  projectName: 'MDoc', // Usually your repo name.
  customFields: {
    users: users,
    repoUrl: 'https://git.hpcer.dev/HPCer/CrystalMD/CrystalMD',
    repoEditUrl: 'https://github.com/misa-md/MDoc/edit/master/',
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
          to: 'docs/overview',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/help',
          label: 'Help',
          position: 'left',
        },
        {
          label: 'Version',
          to: 'docs/overview',
          position: 'right',
          items: [
            {
              label: '0.4.0',
              to: 'docs/overview',
              activeBaseRegex: 'docs/(?!0.2.0|0.3.x|0.4.0|next)',
            },
            {
              label: '0.3.x',
              to: 'docs/0.3.x/overview',
            },
            {
              label: '0.2.0',
              to: 'docs/0.2.0/overview',
            },
            {
              label: 'Master/Unreleased',
              to: 'docs/next/overview',
              activeBaseRegex: 'docs/next/(?!support|team|resources)',
            },
          ],
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
              to: 'docs/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Issues',
              href: 'https://github.com/misa-md/MISA-MD/issues',
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
              to: 'blog',
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
      copyright: `Copyright © ${new Date().getFullYear()} HPCDE lab of USTB. Built with Docusaurus.`,
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
          editUrl:
            'https://git.hpcer.dev/HPCer/CrystalMD/MDoc/blob/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://git.hpcer.dev/HPCer/CrystalMD/MDoc/blob/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [],
};
