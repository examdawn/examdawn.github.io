import { withMermaid } from "vitepress-plugin-mermaid"
import { withSidebar } from "vitepress-sidebar"

// Generate configs before export
await generateConfig()

const vitePressSidebarOptions = {
  documentRootPath: '/',
  collapsed: false,
  capitalizeFirst: true,
  excludePattern: ['README.md'],
  useFolderTitleFromIndexFile: true
};

const mermaidConfig = withMermaid({
  title: "Exam Dawn",
  description: "An All-in-One Resource Site for BNU UG Students",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith('contents/')) {
          return `https://github.com/examdawn/content/edit/${filePath}`
        } else {
          return `https://github.com/examdawn/examdawn.github.io/edit/vitepress/docs/${filePath}`
        }
      }
    },
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contribute', link: "/contents/Contribute" },
      { text: 'Request Takedown', link: "/contents/takedown" },
      { text: 'Typography', link: "/contents/typography" },
      { text: 'Queries and Suggestions', link: "https://github.com/examdawn/content/issues" },
      {
        text: 'Select Course',
        items: navItemNames
      }
    ],
    sidebar: sidebarConfig,
    socialLinks: [
      { 
        icon: 'github',
        link: 'https://github.com/examdawn/',
        ariaLabel: 'Our Git Profile'
      }
    ]
  },
  markdown: {
    math: true
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  mermaidPlugin: {
    class: "mermaid my-class"
  }
})


export default defineConfig(withSidebar(mermaidConfig, vitePressSidebarOptions));