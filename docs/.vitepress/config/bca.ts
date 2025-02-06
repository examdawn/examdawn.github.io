import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const bca = defineConfig({
    lang: 'bca',
     themeConfig: { 
        sidebar: {
        '/bca/': { base: '/bsc/', items: sidebarbca() }
      }
    }
  })

  function sidebarbca(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: 'Reference',
        items: [
          { text: 'Subject 1', link: '#' },
          { text: 'Subject 2', link: '#' },
          { text: 'Subject 3', link: '#' },
          { text: 'Subject 4', link: '#' },
          { text: 'Subject 5', link: '#' },
        ]
      }
    ]
  }