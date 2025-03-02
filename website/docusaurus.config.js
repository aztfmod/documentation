// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Azure Terraform SRE',
  tagline: 'Everything-As-Code. Opinionated.',
  url: 'https://aztfmod.github.io',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/landingzones.ico',
  organizationName: 'aztfmod', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/aztfmod/documentation/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/aztfmod/documentation/tree/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-GCM5PJNDCN',
          anonymizeIP: true,
        },
        googleAnalytics: {
          trackingID: 'G-GCM5PJNDCN',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Updated: Replaced themes from prism-react-renderer with new syntax for v3
      prism: {
        theme: {
          plain: {},
          styles: []
        },
        darkTheme: {
          plain: {},
          styles: []
        },
      },
      navbar: {
        title: 'Azure Terraform SRE',
        logo: {
          alt: 'Azure Terraform SRE',
          src: 'img/logo_landingzone.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'fundamentals/lz-intro',
            position: 'left',
            label: 'Fundamentals',
          },
          {
            type: 'doc',
            docId: 'module/module-intro',
            position: 'left',
            label: 'Module',
          },
          {
            type: 'doc',
            docId: 'rover/rover-intro',
            position: 'left',
            label: 'Rover',
          },
          {
            type: 'doc',
            docId: 'provider/provider-intro',
            position: 'left',
            label: 'Provider',
          },
          {
            type: 'doc',
            docId: 'azure-landing-zones/landingzones/alz-intro',
            position: 'left',
            label: 'Azure landing zones',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/aztfmod/documentation',
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
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Arnauds blog',
                href: 'https://aka.ms/arnaud',
              },
              {
                label: 'Gitter',
                href: 'https://gitter.im/aztfmod/community',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/azure/caf-terraform-landingzones',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Azure Terraform SRE`,
      },
    }),
};

module.exports = config;
