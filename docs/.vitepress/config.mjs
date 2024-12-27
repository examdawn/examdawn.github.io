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
      { text: 'Queries and Suggestions' /*'Contact Us'*/, link: "https://github.com/bca-students/content/issues"},
      { text: 'Year',
        items: [
          //{ text: 'First Year', link:'#'  },
          { text: 'Second Year', link: '/contents/NEP2020/2024/BCA/3rdsem/index.md'  },
          //{ text: 'Third Year', link:'#'},
        ],
      },
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
      {   
        icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>' }, 
          link: 'https://github.com/bca-students/content',
          ariaLabel: 'Content Source'
      },
      { 
        icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>' }, 
        link: 'https://github.com/bca-students/bca-students.github.io',
        ariaLabel: 'Site Source Code'
      },
      { icon: 'github', link: 'https://github.com/bca-students/', ariaLabel: 'Our Git Profile' }
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
