import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Desarrollo de Interfaces",
  description: "Apuntes de desarrollo de interfaces",
  base: "/vite/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://raw.githubusercontent.com/catppuccin/catppuccin/refs/heads/main/assets/logos/exports/1544x1544_circle.png",
      },
    ],
  ],
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-frappe",
    },
  },
  themeConfig: {
    logo: {
      src: "https://github.com/catppuccin/catppuccin/blob/main/assets/logos/exports/1544x1544_circle.png?raw=true",
      alt: "Catppuccin logo",
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
