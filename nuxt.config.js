import colors from 'vuetify/es5/util/colors'

export default {
    mode: 'universal',
    /*
      ** Headers of the page
      */
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        titleTemplate: '%s - Nuxtjs + Vuetify Template',
        title: 'Nuxtjs + Vuetify Template',
        link: [{ rel: 'icon', href: '/icon.png' }]
    },
    /*
      ** Customize the progress-bar color
      */
    loading: { color: '#6FB243' },
    /*
      ** Global CSS
      */
    css: [
        '~/assets/css/main.scss',
        '~/assets/css/icons/icons.scss',
        '~/assets/css/flaticon/file-types/flaticon.css',
        'quill/dist/quill.snow.css',
        'quill/dist/quill.bubble.css',
        'quill/dist/quill.core.css'
    ],
    /*
      ** Plugins to load before mounting the App
      */
    plugins: [
        '~/plugins/axios',
        '~/plugins/global-components'
    ],
    /*
      ** Nuxt.js dev-modules
      */
    buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/vuetify',
        // Doc: https://github.com/nuxt-community/router-module
        [
            '@nuxtjs/router',
            {
                path: './router'
            }
        ]
    ],
    /*
      ** Nuxt.js modules
      */
    modules: [
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        'cookie-universal-nuxt'
    ],
    /*
       ** Dotenv module configuration
       ** See https://github.com/nuxt-community/dotenv-module
       */
    dotenv: {
        systemvars: true,
        filename: '.env.' + process.env.NODE_ENV
    },
    /*
      ** Axios module configuration
      ** See https://axios.nuxtjs.org/options
      */
    axios: {
        debug: (process.env.NODE_ENV !== 'production')
    },
    /*
      ** vuetify module configuration
      ** https://github.com/nuxt-community/vuetify-module
      */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            light: true,
            options: {
                customProperties: true
            },
            themes: {
                light: {
                    primary: {
                        base: '#6FB243',
                        lighten1: '#8ac463',
                        lighten2: '#a6d289',
                        lighten3: '#c2e0ae',
                        lighten4: '#deeed3',
                        lighten5: '#fafcf8',
                        darken1: '#588d35',
                        darken2: '#416827',
                        darken3: '#2a4319',
                        darken4: '#131e0b'
                    },
                    accent: {
                        base: '#4a9d8e',
                        lighten1: '#64b6a7',
                        lighten2: '#87c6bb',
                        lighten3: '#a9d7ce',
                        lighten4: '#cce7e2',
                        lighten5: '#eff7f6',
                        darken1: '#3a7a6f',
                        darken2: '#29584f',
                        darken3: '#193530',
                        darken4: '#091211'
                    },
                    secondary: {
                        base: '#2A5529',
                        lighten1: '#3b773a',
                        lighten2: '#4c9a4a',
                        lighten3: '#65b463',
                        lighten4: '#87c486',
                        lighten5: '#a9d5a8',
                        darken1: '#214421',
                        darken2: '#193318',
                        darken3: '#102110',
                        darken4: '#081008'
                    },
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
      ** Build configuration
      */
    build: {
        extractCSS: true,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        }
    },
    vue: {
        config: {
            warnHandler (msg, vm, trace) {
                const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.'
                if (msg.includes(ignoreWarnMessage)) {
                    msg = null
                    vm = null
                    trace = null
                }
            }
        }
    }
}
