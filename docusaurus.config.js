// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Θεατρική Ομάδα ΟΠΑ',
  tagline: 'Οικονομικό Πανεπιστήμιο Αθηνών',
  //url: 'https://your-docusaurus-test-site.com',
  url: 'https://theatrikiopa.vercel.app',
  baseUrl: '/',
  customFields: {
    siteBaseUrl: 'https://theatrikiopa.vercel.app',
    siteDisplayName: 'theatre.aueb.gr',
  },
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
          // routeBasePath: '/',
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
              { label: '2023-2024', to: '/ergastiria#2023-2024' },
              { label: '2022-2023', to: '/ergastiria#2022-2023' },
              { label: 'Περισσότερα...', to: '/ergastiria#2021-2022' },
            ],
          },    
          {
            to: '/parastaseis',
            label: 'Παραστάσεις',
            position: 'left',
            items: [   
              { label: '2025', to: '/parastaseis#2025' },
              { label: '2024', to: '/parastaseis#2024' },
              { label: 'Περισσότερα...', to: '/parastaseis#2023' },      
            ],
          },                   
          {
            to: '/contact',
            label: 'Επικοινωνία',
            position: 'left',
            items: [
              //{ label: 'Ένωση', to: '/contact/enosi' },          
              { label: 'Συχνές Ερωτήσεις', to: '/contact/faq' },
              //{ label: 'Ενημερωτικό Δελτίο', to: '/contact/newsletter' },        
              { label: 'Τρόπoς Λειτουργίας', to: '/contact/tropos-leitourgias' },                  
            ],
          },            
          {to: '/blog', label: 'Blog', position: 'right'},
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
                label: 'Youtube',
                href: 'https://youtube.com/@theatrikiopa',
              },
              {
                label: 'TikTok',
                href: 'https://tiktok.com/@theatrikiopa',
              },              
              // {
              //   label: 'LinkedIn',
              //   href: 'https://linkedin.com/company/theatrikiopa',
              // },
              // {
              //   label: 'X (Twitter)',
              //   href: 'https://X.com/theatrikiopa',
              // },            
            ],
          },
          {
            title: 'Εργαστήρια',
            items: [
              { label: '2023-2024', to: '/ergastiria#2023-2024' },
              { label: '2022-2023', to: '/ergastiria#2022-2023' },
              { label: 'Περισσότερα…', to: '/ergastiria' },
            ],
          },
          {
            title: 'Παραστάσεις',
            items: [
              { label: '2025', to: '/parastaseis#2025' },
              { label: '2024', to: '/parastaseis#2024' },
              { label: 'Περισσότερα…', to: '/parastaseis' },
            ],
          },
          {
            title: 'Επικοινωνία',
            items: [            
              { label: 'Συχνές Ερωτήσεις', to: '/contact/faq' },
              { label: 'Τρόπoς Λειτουργίας', to: '/contact/tropos-leitourgias' },
              { label: 'Στοιχεία Επικοινωνίας', to: '/contact' },                
            ],
          },          
          {
            title: 'Όροι και Προϋποθέσεις',
            items: [              
              {
                label: 'Γενικοί Όροι Χρήσης',
                to: '/terms-and-conditions',
              },
              {
                label: 'Πολιτική Απορρήτου',
                to: '/terms-and-conditions#πολιτική-απορρήτου',
              },   
              {
                label: 'Πολιτική Cookies',
                to: '/terms-and-conditions#πολιτική-cookies',
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
                href: 'https://github.com/theatrikiopa',
              },
            ],
          },          
        ],
        copyright: `Copyright © 2024 - ${new Date().getFullYear()} Θεατρική Ομάδα ΟΠΑ - Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

config.plugins = [
  [
    '@docusaurus/plugin-google-gtag',
    {
      trackingID: 'G-KNLXMF7Z81',
      anonymizeIP: true, // Optional: respects user privacy
    },
  ],
];

module.exports = config;
