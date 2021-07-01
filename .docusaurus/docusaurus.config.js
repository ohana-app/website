export default {
  "title": "Ohana",
  "tagline": "No developers left behind",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "oslabs",
  "projectName": "ohana",
  "themeConfig": {
    "navbar": {
      "title": "Ohana",
      "logo": {
        "alt": "Ohana Logo",
        "src": "img/docusaurus.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "ohana",
          "position": "left",
          "label": "Guide",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "/meet-the-team",
          "label": "Meet The Team",
          "position": "right"
        },
        {
          "href": "https://github.com/oslabs-beta/ohana",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/ohana"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "LinkedIn",
              "href": "https://www.linkedin.com/company/osl-ohana/"
            },
            {
              "label": "Slack",
              "href": "https://join.slack.com/t/slack-so45105/shared_invite/zt-sd4bg4l1-5KbRhhXT6yNx18rs7zUL3w"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/oslabs-beta/ohana"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Making sure no developer gets left behind. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/fenris/Desktop/Codesmith/Docusaurus/website/sidebars.js",
          "editUrl": "https://github.com/oslabs-beta/ohana"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/oslabs-beta/ohana"
        },
        "theme": {
          "customCss": "/Users/fenris/Desktop/Codesmith/Docusaurus/website/src/css/custom.css"
        }
      }
    ]
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/icon?family=Material+Icons"
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};