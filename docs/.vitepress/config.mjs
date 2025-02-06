import { withMermaid } from "vitepress-plugin-mermaid"
import fs from 'fs'
import { parseStringPromise } from 'xml2js'

const xmlData = fs.readFileSync('./docs/contents/sidebar.xml', 'utf8')
const sidebarConfig = {}  // Changed to object instead of array
const navItemNames = []

// Parse XML and generate config
const generateConfig = async () => {
  const result = await parseStringPromise(xmlData)
  const programs = result.sidebar.program

  programs.forEach(program => {
    const programName = program.$.name
    
    // Add to program-specific sidebar
    sidebarConfig[`/contents/NEP2020/2024/${programName}/`] = [{  // Key change here
      text: programName,
      items: program.year.map(year => {
        return year.semester.map(sem => {
          const semesterItems = [{
            text: `${sem.$.name} - Year ${year.$.number}`,
            link: `/contents/NEP2020/2024/${programName}/${sem.$.name}/`
          }]

          // Add subject items if they exist
          if (sem.subject) {
            const subjectItems = sem.subject.map(subject => {
              // Add console.log to debug the subject structure
              console.log('Subject:', JSON.stringify(subject, null, 2))
              
              return {
                text: `${subject.$.name}`,
                link: `/contents/NEP2020/2024/${programName}/${sem.$.name}/${subject._}`
              }
            })
            semesterItems[0].items = subjectItems
          }

          return semesterItems[0]
        })
      }).flat()
    }]

    // Add to nav years (unchanged)
    navItemNames.push({
      text: programName,
      link: `/contents/NEP2020/2024/${programName}/`
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
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  mermaidPlugin: {
    class: "mermaid my-class"
  }
})