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
      { text: 'Contribute', link: "/contents/Contribute"},
      { text: 'Request Takedown', link: "/contents/takedown"},
      { text: 'Queries and Suggestions' /*'Contact Us'*/, link: "https://github.com/bca-students/content/issues"}
    ],

    sidebar: [
      {
        text: 'Home - BCA Subjects'
      },
      {
        text: 'Semester 3',
        collapsed: false,
        items: [
          /*{ text: 'General English', link: '/#' },*/
          { text: 'Additional English', link: '/contents/NEP2020/2024/BCA/3rdsem/addEng/' },
          { text: 'Database Management System', link: '/contents/NEP2020/2024/BCA/3rdsem/dbms/' },
          { text: 'C# .NET Framework', link: '/contents/NEP2020/2024/BCA/3rdsem/cs/' },
          { text: 'Computer Communication and Networking', link: '/contents/NEP2020/2024/BCA/3rdsem/ccn/' },
          { text: 'Social Media Marketing', link: '/contents/NEP2020/2024/BCA/3rdsem/smm/' },
          { text: 'Indian Constitution', link: '/contents/NEP2020/2024/BCA/3rdsem/ic/' }
        ]
      },
      {
        text: 'Semester 4',
        collapsed: true,
        items: [
          { text: ' ', link: '/#' }
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
