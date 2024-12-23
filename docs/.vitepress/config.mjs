import { withMermaid } from "vitepress-plugin-mermaid"

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Bca-Students",
  description: "An All-in-One Resource Site for BCA Students",
  ignoreDeadLinks: true, // TODO: Replace with proper link handling
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
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
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  }
})