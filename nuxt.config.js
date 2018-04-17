const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir)
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/NickTheSick/'
    }
} : {}
module.exports = {
    ...routerBase,
    /*
     ** Headers of the page
     */
    head: {
        title: "Nicholas Perez's portfolio showcasing Web Apps and Websites",
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                name: 'keywords',
                content: 'portfolio nick the sick Nicholas Perez web app website developer full stack front end'
            },
            {
                hid: 'description',
                name: 'description',
                content: "Nicholas Perez, a web developer based in San Francisco. A personal website showcasing some of his most recent work and the ability to contact him for hire."
            },
            {
                name: "google-site-verification",
                content: "79NuX7KX9JZo3IacoIXgkrLbpfWl4g-PnsigNdBA3cU"
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
        ]
    },
    plugins: ['~/plugins/vuetify.js', '~/plugins/toolbar.js', { src: '~plugins/ga.js', ssr: false }],
    css: [
        '~/assets/style/app.styl',
        '~/assets/style/fonts.css'
    ],
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        babel: {
            plugins: [
                ["transform-imports", {
                    "vuetify": {
                        "transform": "vuetify/es5/components/${member}",
                        "preventFullImport": true
                    }
                }]
            ]
        },
        vendor: [
            '~/plugins/vuetify.js'
        ],
        extractCSS: true,
        /*
         ** Run ESLint on save
         */
        extend(config, ctx) {
            if (false) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
            if (ctx.isServer) {
                config.externals = [
                    nodeExternals({
                        whitelist: [/^vuetify/]
                    })
                ]
            }
        }
    }
}