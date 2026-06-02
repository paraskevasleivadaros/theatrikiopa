// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Θεατρική Ομάδα ΟΠΑ',
  tagline: 'Οικονομικό Πανεπιστήμιο Αθηνών',
  url: 'https://theatre.aueb.gr',
  baseUrl: '/',
  customFields: {
    siteBaseUrl: 'https://theatre.aueb.gr',
    siteDisplayName: 'theatre.aueb.gr',
  },
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.ico',

  organizationName: 'paraskevasleivadaros',
  projectName: 'theatrikiopa',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'el',
    locales: ['el'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/paraskevasleivadaros/theatrikiopa/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/paraskevasleivadaros/theatrikiopa/tree/main/',
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
              { label: '2026', to: '/parastaseis#2026' },
              { label: '2025', to: '/parastaseis#2025' },
              { label: 'Περισσότερα...', to: '/parastaseis#2024' },      
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
              { label: '2026', to: '/parastaseis#2026' },
              { label: '2025', to: '/parastaseis#2025' },
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
            title: 'Σχετικά',
            items: [              
              {
                label: 'Όροι και Προϋποθέσεις',
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
