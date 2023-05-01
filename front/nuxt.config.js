export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Chuisoft',
    title: 'Chuisoft',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'To Build,solve and deploy the best software in the world.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Della+Respira&display=swap' }
    ]
  },
  loading: {
    color: '#3730a3',
    height: '1px'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    "nuxt-facebook-pixel-module",
    '@nuxtjs/auth-next'
  ],
  
  facebook:{
    pixelId:"574448177692240",
    track:"PageView",
    autoPageView:true,
    debug:true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8080',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    icon:{
      source:"/icon.png"
    },
    meta:{
      name:"Chuisoft",
      ogTitle:"Chuisoft - Build.Solve.Deploy.",
      ogSiteName:"Chuisoft",
      ogDescription:"To Build,solve and deploy the best software in the world.",
      ogImage:"https://chuisoft.com/icon.png",
      ogUrl:"https://chuisoft.com",
      ogHost:"https://chuisoft.com"
    },
    manifest:{
      name:"Chuisoft",
      
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
