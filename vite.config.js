import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import vitePluginRequire from "vite-plugin-require"
import vitePluginString from 'vite-plugin-string'

// vite.config.js
export default defineConfig({
  plugins: [eslintPlugin(),
    vitePluginRequire({
      // @fileRegex RegExp
      // optional：default file processing rules are as follows
      // fileRegex:/(.jsx?|.tsx?|.vue)$/

      // Conversion mode. The default mode is import
      // importMetaUrl | import
      // importMetaUrl see https://vitejs.cn/guide/assets.html#new-url-url-import-meta-url
      // translateType: "importMetaUrl" | "import";
    }),
    vitePluginString()
  ],
  server: {
    host: 'localhost',
    cors: '*',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
  build: {
    minify: true,
    manifest: true,
    rollupOptions: {
      input: './src/main.js',
      output: {
        format: 'umd',
        entryFileNames: 'main.js',
        esModule: false,
        compact: true,
        globals: {
          jquery: '$',
        },
      },
      external: ['jquery'],
    },
  },
})
