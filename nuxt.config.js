module.exports = {
  mode: 'spa',
  css: [
    '~assets/reset.css',
    '~assets/grid.css',
    '~assets/main.css'
  ],
  head: {
    title: 'facilication',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'facilitation' },
      { property: "og:title", content: "Тренинги по фасилитации" },
      { property: "og:image", content: "/images/groupbig.png" }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=PT+Sans&subset=latin-ext' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Lobster&subset=latin-ext' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Noto+Sans' },
      { rel: 'preload', href: '/images/background.png', as: 'image' }
    ]
  },
  modules: [
    ['@nuxtjs/google-analytics']
  ],
  'google-analytics': {
    id: 'UA-118992175-1'
  },
  loading: {
    color: '#77b6ff',
    height: '3px'
  },
  loadingIndicator: {
    name: 'circle',
    color: '#330303',
    background: 'white'
  },
  generate: {
    minify: {
      removeComments: true
    }
  },
  build: {
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
