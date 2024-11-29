import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bca-Students",
  description: "An All-in-One Resource Site for BCA Students",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contribute', link: "/#"}
    ],

    sidebar: [
      {
        text: 'Subjects',
        items: [
          { text: 'General English', link: '/#' },
          { text: 'Additional English', link: '/#' },
          { text: 'DBMS', link: '/#' },
          { text: 'C# .NET Framework', link: '/#' },
          { text: 'CCN', link: '/#' },
          { text: 'SMM', link: '/#' },
          { text: 'Indian Constitution', link: '/#' }

        ]
      }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'www.linkedin.com/in/jack-pots'},
      { icon: 'github', link: 'https://github.com/bca-students/content/' }
    ]
  }
})
