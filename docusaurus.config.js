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

const siteBaseUrl = process.env.NODE_ENV === 'production'? '/CrystalMD/MDoc/' : '/'

module.exports = {
  title: 'Crystal MD',
  tagline: 'A massively parallel molecular dynamics simulation program',
  url: 'https://hpcer.pages.hpcer.dev/CrystalMD/MDoc',
  baseUrl: siteBaseUrl,
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'USTB', // Usually your GitHub org/user name.
  projectName: 'MDoc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Crystal MD',
      logo: {
        alt: 'Crystal MD Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/misa-md/MISA-MD',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'User Docs',
              to: 'docs/',
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
      copyright: `Copyright © ${new Date().getFullYear()} HPCDE lab of USTB. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
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
};
