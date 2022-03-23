module.exports = {
    productionSourceMap: false,
    publicPath: './',
    outputDir: 'dist', // 输出文件目录
    assetsDir: 'assets', // 放置静态资源
    chainWebpack: config => {
        // ============压缩图片 start============
        config.module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({ bypassOnDebug: true })
            .end()
        // ============压缩图片 end============
    },
    devServer: {
        port: 20018,
        host: '0.0.0.0',
        https: false,
        open: true,
    },
}