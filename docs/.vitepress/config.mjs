import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bca-Students",
  description: "An All-in-One Resource Site for BCA Students",
  ignoreDeadLinks: true, // TODO: Replace with proper link handling
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contribute', link: "/#"},
      { text: 'Contact Us', link: "/#"}
    ],

    sidebar: [
      {
        text: 'Subjects',
        items: [
          { text: 'General English', link: '/#' },
          { text: 'Additional English', link: '/#' },
          { text: 'Database Management System', link: '/#' },
          { text: 'C# .NET Framework', link: '/#' },
          { text: 'Computer Communication and Networking', link: '/#' },
          { text: 'Social Media Marketing', link: '/#' },
          { text: 'Indian Constitution', link: '/#' }

        ]
      }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://linkedin.com/in/jack-pots'},
      { icon: 'github', link: 'https://github.com/jack-pots/' }
    ]
  }
})
