import { sass } from 'sass';
import { fiber } from 'fibers';

export default {
    target: 'static',
    head: {
        title: 'カダイの付箋',
        htmlAttrs: {
            lang: 'ja',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'カダイの付箋は「誰もが、手軽に」をコンセプトに作られた、登録不要な上に完全無料で使える課題管理（タスク管理）アプリです！いわゆるカンバンボード形式で課題を管理していけるのが特徴です。',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    loading: '~/components/Box/LoadingBox.vue',

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/scss/elements'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/injectEnvData.ts'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/style-resources',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            '@nuxtjs/google-gtag',
            {
                id: 'G-LRGWVGBPQV',
                debug: false,
            },
        ],
    ],
    styleResources: {
        scss: ['~/assets/scss/variables.scss', '~/assets/scss/mixin.scss'],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            scss: {
                implementation: sass,
                sassOptions: {
                    fiber,
                },
            },
        },
    },
    env: {
        version: process.env.npm_package_version,
    },
};
