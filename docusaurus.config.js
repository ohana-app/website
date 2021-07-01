const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ohana',
  tagline: 'No developers left behind',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'oslabs', // Usually your GitHub org/user name.
  projectName: 'ohana', // Usually your repo name.
  themeConfig: {
    // defaultDarkMode: true,
    navbar: {
      title: 'Ohana',
      logo: {
        alt: 'Ohana Logo',
        src: 'img/docusaurus.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'ohana',
          position: 'left',
          label: 'Guide',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/meet-the-team', label: 'Meet The Team', position: 'right'},
        {
          href: 'https://github.com/oslabs-beta/ohana',
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
              label: 'Tutorial',
              to: '/docs/ohana',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/osl-ohana/',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/slack-so45105/shared_invite/zt-sd4bg4l1-5KbRhhXT6yNx18rs7zUL3w',
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
              label: 'GitHub',
              href: 'https://github.com/oslabs-beta/ohana',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Making sure no developer gets left behind. Built with Docusaurus.`,
    },
    // prism: {
    //   theme: darkCodeTheme,
    //   lightTheme: lightCodeTheme,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/oslabs-beta/ohana',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/oslabs-beta/ohana',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
};
