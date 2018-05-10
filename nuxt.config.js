module.exports = {
  mode: 'spa',
  css: [
    '~assets/reset.css',
    '~assets/grid.css',
    '~assets/main.css'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'facilication',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'facilitation' },
      { property: "og:title", content: "Тренинг по фасилитации" },
      { property: "og:image", content: "/images/groupbig.png" }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=PT+Sans&subset=latin-ext' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Lobster&subset=latin-ext' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Noto+Sans' },
      { rel: 'preload', href: '/img/background2.png', as: 'image' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
 /*
  modules: [
    ['@nuxtjs/google-analytics']
  ],
  'google-analytics': {
    id: 'UA-119018991-1'
  },
*/
  loading: {
    color: '#77b6ff',
    height: '3px'
  },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  generate: {
    minify: {
      removeComments: true
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
