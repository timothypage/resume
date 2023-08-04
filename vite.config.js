import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import sri from '@small-tech/vite-plugin-sri'

import { gzipAsync } from '@gfx/zopfli'
import gzipPlugin from 'rollup-plugin-gzip'

export default defineConfig({
  plugins: [
    solid(), 
    sri(),
    gzipPlugin({
      customCompression: content =>
        gzipAsync(Buffer.from(content), { numiterations: 15 }),
    })
  ],

  build: {
    // sourcemap: true
  },

  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  }
})
