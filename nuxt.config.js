
module.exports = {
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    script: [
      // {src: "@/static/metrix.js"}
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon/favicon.ico' }
    ]
  },

  loading: { color: '#05141F' },
  css: [
    '@/static/fonts/Kia/stylesheet.css',
    {src: '@/static/scss/plugins.scss',  defer: ''},
    {src: '@/static/scss/main.scss',  defer: ''},
  ],

  plugins: [
    { src: '@plugins/vue-input-facade.js'},
    { src: "@plugins/axios.js", ssr: true },
    { src: '@plugins/i18n.js' }
  ],

  modules: [
    // Накст
    '@nuxtjs/axios',
    '@nuxt/http',
    '@nuxtjs/i18n',
    // Метрики
    // 'nuxt-facebook-pixel-module',
    ['@nuxtjs/google-analytics', { ua: 'UA-126548408-24' }],
    '@nuxtjs/gtm',
    ['@nuxtjs/yandex-metrika',
      {
        id: '80120311',
        webvisor: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        ecommerce:"dataLayer",
        // useCDN:false,
      }
    ],
    // Прочее
    [
      'nuxt-vuex-localstorage',
        {
          //versionPropName: "dynloc",
          //keyName: 'ip', //  If not entered, “ip” is the default value
          //saltName: 'dynloc' //  If not entered, “region” is the default value
        }
    ],
  ],
  i18n: {
    /* module options */
    strategy: "prefix_except_default",
    seo: true,
    encodePaths: false,
    defaultLocale: 'uz',
    detectBrowserLanguage: false,
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   alwaysRedirect: true
    // },
    locales: [
      { code: 'uz', iso: 'uz-UZ', file: 'uz.js'},
      { code: 'ru', iso: 'ru-RU', file: 'ru.js'} 
    ],
    langDir: "@/static/locales/",
    vueI18n: {
      fallbackLocale: 'uz',
      messages: {}
    }
  },
  facebook: {
    track: 'ViewContent',
    pixelId: '357795334408363',
    autoPageView: true,
    disabled: false
  },
  gtm: {
    id: 'GTM-K5HVG7K'
  },
  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  },
  axios: {
    // baseURL: process.env.BASE_URL,
    // baseURL: 'https://api.kia-motors.uz/',
    baseURL: 'https://api.kia.uz/',
    withCredentials: true,
    headers: {
      //Accept: 'application/x-www-form-urlencoded',
      // "Cache-Control": "no-cache",
      //'Content-Type': 'application/x-www-form-urlencoded'
    }
  },

  // build: {
  //   extend(config, ctx) {
      
  //   }
  // }
}
