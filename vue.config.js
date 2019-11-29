module.exports = {
    css: {
        // loaderOptions: {
        //     css: {
        //         // options here will be passed to css-loader
        //     },
        //     postcss: {
        //         // options here will be passed to postcss-loader
        //         plugins: [require('postcss-px2rem')({
        //             remUnit: 75
        //         })]
        //     }
        // }
    },
    chainWebpack: config => {
        config.module.rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
            .loader('pug-html-loader')
            .end()
    },
    publicPath: './',
    devServer: {
        proxy: {
            'api/': {
                target: 'http://192.168.1.46:8001/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^api/': 'api/'
                }
            }
        }
    }
}