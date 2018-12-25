let apiServer = 'http://prod.domain'
let mockServer = 'http://dsn.apizza.cc/mock/710f9fb77f08d7a01fce444be84dff6e'

let axios = {
  proxy: true
}

// 生产部署放到kong后面不代理
if (process.env.mode == 'prod') {
  axios = {
    proxy: false,
    baseURL: apiServer
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Optimus Dashboard',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//at.alicdn.com/t/font_574145_ufxg504x3zorms4i.css'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#1890ff'},
  css: [{src: '~assets/global.styl', lang: 'stylus'}],
  /**
   * 把代码目录跟其他目录分离
   */
  srcDir: 'src/',
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    babel: {
      plugins: [require('./comp.config')]
    },
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev}) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    // 需要登录跳转的话, 请打开中间件
    // middleware: ['auth'],
    // production模式下会添加访问前缀, 如有需要请自行修改
    base: process.env.mode == 'prod' ? '/optimus/' : '/'
  },
  plugins: [{src: '~/plugins/axios'}, {src: '~/plugins/components'}],
  modules: ['@nuxtjs/axios'],
  axios,
  proxy: {
    '/security': apiServer,
    '/optimus': process.env.mode == 'dev' ? mockServer : apiServer
  }
}
