const CracoAntDesignPlugin = require('craco-antd');
const path = require("path");

if (process.env.NODE_ENV === 'production') {
    process.env.GENERATE_SOURCEMAP = false;
}

module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeThemeLessPath: path.join(
                    __dirname,
                    "src/assets/styles/customTheme.less"
                ),
            },
        },
    ],
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            let opt = webpackConfig.optimization;
            opt.minimizer[0].options.extractComments = false;
            opt.splitChunks.cacheGroups = {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            };
            return webpackConfig;
        }
    }
};