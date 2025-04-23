import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


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
const siteBaseUrl = process.env.NODE_ENV === 'production'? (process.env.DOC_DEPLOY_PATH? process.env.DOC_DEPLOY_PATH : '/MISA-MD/MDoc') : '/'

const defaultDocGitRepo = 'https://git.hpcer.dev/HPCer/MISA-MD/MDoc'
const defaultSourceGitRepo = 'https://git.hpcer.dev/HPCer/MISA-MD/MISA-MD'
const defaultSiteUrl = 'https://hpcer.pages.hpcer.dev'

const docGitRepo = process.env.DOC_GIT_REPO? process.env.DOC_GIT_REPO : defaultDocGitRepo
// for document edit url, fallback is the same for github and gitlab.
const docEditUrl = process.env.DOC_EDIT_URL? process.env.DOC_EDIT_URL : docGitRepo + '/blob/master/'
const docSiteUrl = process.env.DOC_SITE_URL? process.env.DOC_SITE_URL : defaultSiteUrl
const sourceGitRepo = process.env.SOURCE_GIT_REPO ? process.env.SOURCE_GIT_REPO : defaultSourceGitRepo

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MISA-MD',
  tagline: 'A massively parallel molecular dynamics simulation program',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: docSiteUrl,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: siteBaseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'USTB', // Usually your GitHub org/user name.
  projectName: 'MDoc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  customFields: {
    users: users,
    repoUrl: sourceGitRepo,
    repoEditUrl: docEditUrl,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // homePageId: 'overview',
          path: 'docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: docEditUrl,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/undraw_online.svg',
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    navbar: {
      title: 'MISA-MD',
      logo: {
        alt: 'MISA-MD Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: "docs",
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
          position: 'left',
          label: 'Help',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
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
        alt: 'MISA-MD Open Source Logo',
        src: 'img/logo.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} HPCDE lab, USTB. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
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
        sidebarPath: './sidebars-md-tools.ts',
      },
    ],
  ],
};

export default config;
