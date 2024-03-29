export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'divar-nuxt',
    htmlAttrs: {
      lang: 'fa',
      dir: 'rtl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss', '@/assets/css/tailwind.css'],
  devServerHandlers: [],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/i18n', '~/plugins/directives'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms',
    '~/components/templates',
    '~/components/global',
  ],
 
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    "@nuxtjs/svg"
  ],
  publicRuntimeConfig: {
    nuxtLocale: 'fa',
  },
  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'fa',
        iso: 'fa-IR',
        file: 'fa-IR.js',
        name: 'Persian',
        domain: 'https://nuxtjs.org',
      },
    ],
    vueI18n: {
      fallbackLocale: 'fa',
    },
    defaultLocale: 'fa',
    parsePages: false,
    detectBrowserLanguage: false,
    seo: false,
    lazy: true,
    langDir: 'i18n/',
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/i18n',
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fa',
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          autoprefixer: {},
          'postcss-import': {},
        },
      },
    },
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: 'empty',
      }

      // ....
    },
  },
}
