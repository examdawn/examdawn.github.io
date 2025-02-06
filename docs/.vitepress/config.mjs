import { withMermaid } from "vitepress-plugin-mermaid"
import fs from 'fs'
import { parseStringPromise } from 'xml2js'

const xmlData = fs.readFileSync('./docs/contents/sidebar.xml', 'utf8')
const sidebarConfig = []
const navYearItems = []

// Parse XML and generate config
const generateConfig = async () => {
  const result = await parseStringPromise(xmlData)
  const programs = result.sidebar.program

  programs.forEach(program => {
    const programName = program.$.name
    
    // Add to sidebar
    sidebarConfig.push({
      text: programName,
      items: program.year.map(year => {
        return year.semester.map(sem => ({
          text: `${sem.$.name} - Year ${year.$.number}`,
          link: `/contents/NEP2020/2024/${programName}/${sem.$.name}/`
        }))
      }).flat()
    })

    // Add to nav years
    program.year.forEach(year => {
      year.semester.forEach(sem => {
        navYearItems.push({
          text: `${sem.$.name} - ${programName}`,
          link: `/contents/NEP2020/2024/${programName}/${sem.$.name}/`
        })
      })
    })
  })
}

// Generate configs before export
await generateConfig()

export default withMermaid({
  title: "Exam Dawn",
  description: "An All-in-One Resource Site for BCA Students",
  ignoreDeadLinks: true,
  cleanUrls: true,
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
      { text: 'Queries and Suggestions', link: "https://github.com/examdawn/content/issues" },
      {
        text: 'Programs & Years',
        items: navYearItems
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
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  mermaidPlugin: {
    class: "mermaid my-class"
  }
})