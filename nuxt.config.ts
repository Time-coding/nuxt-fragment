import { pwa } from './app/config/pwa'
import { appDescription } from './app/constants/index'
import prismjs from 'vite-plugin-prismjs'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    '@element-plus/nuxt',
  ],
  plugins: [
    '~/plugins/lodash.ts',
  ],

  vite: {
    plugins: [
      prismjs({
        languages: [
          'css',
          'sass',
          'scss',
          'javascript',
          'html',
          'swift',
          'xml',
          'typescript',
          'dart',
          'csharp',
          'json',
          'sql',
          'bash',
          'md',
          'nginx',
          'cpp',
          'java'
        ],
        plugins: ['toolbar', 'show-language', 'copy-to-clipboard'],
        theme: 'tomorrow', // 你可以选择一个你喜欢的主题，比如 'tomorrow'，查看支持的主题可以访问GitHub上的PrismJS主题库[^4^]
        css: true
      })
    ]
  },

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
    'prismjs/themes/prism-tomorrow.css',
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/display.css'
  ],

  colorMode: {
    classSuffix: '',
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  pwa,
})
