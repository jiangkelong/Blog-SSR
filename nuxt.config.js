module.exports = {
  mode: 'universal',
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          path: '/page-:index',
          name: 'index-2',
          // component: resolve(__dirname, 'pages/index.vue')
          components: {
            default: resolve(__dirname, 'pages/index.vue'),
            Carousel: resolve(__dirname, 'components/Carousel.vue')
          },
          chunkNames: {
            Carousel: 'components/Carousel'
          }
        },
        {
          path: '/categories/:categoryName/page-:index',
          name: 'categories-categoryName-2',
          component: resolve(__dirname, 'pages/categories/_categoryName.vue')
        },
        {
          path: '/tags/:tagName/page-:index',
          name: 'tags-tagName-2',
          component: resolve(__dirname, 'pages/tags/_tagName.vue')
        }
      )
      const index = routes.findIndex((route) => route.name === 'index')
      routes[index] = {
        ...routes[index],
        components: {
          default: routes[index].component,
          Carousel: resolve(__dirname, 'components/Carousel.vue')
        },
        chunkNames: {
          Carousel: 'components/Carousel'
        }
      }
      //   routes.forEach((route, index) => {
      //     routes[index] = {
      //       ...route,
      //       components: {
      //         default: route.component,
      //         Logo: resolve(__dirname, 'components/Logo.vue')
      //       },
      //       chunkNames: {
      //         Logo: 'components/Logo'
      //       }
      //     }
      //   })
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/sr.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: {
    components: [
      'BContainer',
      'BRow',
      'BCol',
      'BCarousel',
      'BCarouselSlide',
      'BNavbar',
      'BNavbarNav',
      'BNavItem',
      'BNavText',
      'BNavbarBrand',
      'BNavbarToggle',
      'BCollapse',
      'BIcon',
      'BIconTagFill',
      'BIconClockFill',
      'BIconEyeFill',
      'BIconGridFill'
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
