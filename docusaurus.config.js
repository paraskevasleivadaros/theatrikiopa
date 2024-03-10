// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Θεατρική Ομάδα ΟΠΑ',
  tagline: 'Οικονομικό Πανεπιστήμιο Αθηνών',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Θεατρική Ομάδα ΟΠΑ',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            to: '/ergastiria',
            label: 'Εργαστήρια',
            position: 'left',
            items: [
              { label: '2022-2023', to: '/ergastiria/ergastiria-2022-2023' },
              { label: '2021-2022', to: '/ergastiria/ergastiria-2021-2022' },
              { label: '2019-2020', to: '/ergastiria/ergastiria-2019-2020' },
              { label: '2018-2019', to: '/ergastiria/ergastiria-2018-2019' },
              { label: '2017-2018', to: '/ergastiria/ergastiria-2017-2018' },
            ],
          },    
          {
            to: '/parastaseis',
            label: 'Παραστάσεις',
            position: 'left',
            items: [
              { label: '2023', to: '/parastaseis#2023' },
              { label: '2022', to: '/parastaseis#2022' },
              { label: '2021', to: '/parastaseis#2021' },
              { label: '2020', to: '/parastaseis#2020' },
              { label: '2019', to: '/parastaseis#2019' },              
            ],
          },            
          {
            to: '/about',
            label: 'Σχετικά Με',
            position: 'left',
            items: [
              { label: 'Πολιτική Cookies', to: '/about/cookies' },
              { label: 'Πολιτική Απορρήτου', to: '/about/privacy-policy' },
              { label: 'Όροι και Προϋποθέσεις', to: '/about/terms-and-conditions' },        
            ],
          },          
          {
            to: '/contact',
            label: 'Επικοινωνία',
            position: 'left',
            items: [
              { label: 'Ένωση', to: '/contact/enosi' },
              { label: 'Συχνές Ερωτήσεις', to: '/contact/faq' },
              { label: 'Ενημερωτικό Δελτίο', to: '/contact/newsletter' },        
              { label: 'Τρόπoς Λειτουργίας', to: '/contact/tropos-leitourgias' },                  
            ],
          },            
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Κοινότητα',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/theatrikiopa',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/theatrikiopa',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/theatrikiopa',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@theatrikiopa',
              },						  
              {
                label: 'Twitter',
                href: 'https://twitter.com/theatrikiopa',
              },
            ],
          },
          {
            title: 'Περισσότερα',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Θεατρική Ομάδα ΟΠΑ - Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
