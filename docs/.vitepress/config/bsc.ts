import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const bca = defineConfig({
    lang: 'bca',
     themeConfig: { 
        sidebar: {
        '/bsc/': { base: '/bsc/', items: sidebarbsc() }
      }
    }
  })

  function sidebarbsc(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: 'Reference',
        items: [
          { text: 'Subject 1b', link: '#' },
          { text: 'Subject 2b', link: '#' },
          { text: 'Subject 3b', link: '#' },
          { text: 'Subject 4b', link: '#' },
          { text: 'Subject 5b', link: '#' },
        ]
      }
    ]
  }