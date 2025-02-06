import { defineConfig } from 'vitepress'

export default defineConfig({
  // shared properties and other top-level stuff...

  locales: {
    root: {
      label: 'BCA',
      lang: 'bca'
    },
    bsc: {
      label: 'BSC',
      lang: 'bsc'
      // link: '/fr/guide' // default /fr/ -- shows on navbar translations menu, can be external
      // other locale specific properties...
    }
  }
})