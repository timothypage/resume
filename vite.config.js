import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import sri from '@small-tech/vite-plugin-sri'

export default defineConfig({
  plugins: [solid(), sri()],

  build: {
    // sourcemap: true
  },

  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  }
})
