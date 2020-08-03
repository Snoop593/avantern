const path = require('path');
const webpack = require('webpack'); // eslint-disable-line
const CopyPlugin = require('copy-webpack-plugin');
const {
    createPostcssConfig,
    postcssPlugins,
    postcssPluginsOptions
} = require('arui-scripts/configs/postcss.config');

const staticFilesLocation = path.resolve(__dirname, 'src/icons');
const clientOutputPath = path.resolve(__dirname, '.build/assets/static/media');

module.exports = {
    postcss: () => {
        const newOption = {
            ...postcssPluginsOptions,
            'postcss-custom-media': {
                ...postcssPluginsOptions['postcss-custom-media'],
                extensions: {
                    ...postcssPluginsOptions['postcss-custom-media'].extensions,
                    '--before-desktop-l': 'screen and (max-width: 90em)', // 1440px
                    '--before-desktop-m': 'screen and (max-width: 80em)', // 1280px
                    '--before-desktop-s': 'screen and (max-width: 64em)', // 1024px
                    '--before-tablet-m': 'screen and (max-width: 48em)', // 768px
                    '--before-mobile-m': 'screen and (max-width: 23.4375em)' // 375px
                }
            }
        };

        return createPostcssConfig(postcssPlugins, newOption);
    },
    babelClient: (config) => {
        config.plugins = [
            ...config.plugins,
            require.resolve('@babel/plugin-proposal-optional-chaining'),
            require.resolve('@babel/plugin-proposal-nullish-coalescing-operator')
        ];

        return config;
    },
    babelServer: (config) => {
        config.plugins = [
            ...config.plugins,
            require.resolve('@babel/plugin-proposal-optional-chaining'),
            require.resolve('@babel/plugin-proposal-nullish-coalescing-operator')
        ];

        return config;
    },
    webpackClientDev: (config) => {
        config.plugins = [
            new webpack.ProvidePlugin({
                React: 'react'
            }),
            ...config.plugins
        ];

        return config;
    },
    webpackServerDev: (config) => {
        config.plugins = [
            new webpack.ProvidePlugin({
                React: 'react'
            }),
            new CopyPlugin([
                {
                    from: staticFilesLocation,
                    to: clientOutputPath
                }
            ]),
            ...config.plugins
        ];
        config.module.rules[0].oneOf = [
            {
                test: /\.ejs$/,
                loader: 'ejs-compiled-loader'
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: '[name].[hash:8].[ext]'
                }
            },
            ...config.module.rules[0].oneOf
        ];

        return config;
    },
    webpackClientProd: (config) => {
        config.plugins = [
            new webpack.ProvidePlugin({
                React: 'react'
            }),
            ...config.plugins
        ];
        config.performance = {
            hints: false
        };

        return config;
    },
    webpackServerProd: (config) => {
        config.plugins = [
            new webpack.ProvidePlugin({
                React: 'react'
            }),
            new CopyPlugin([
                {
                    from: staticFilesLocation,
                    to: clientOutputPath
                }
            ]),
            ...config.plugins
        ];
        config.module.rules[0].oneOf = [
            {
                test: /\.ejs$/,
                loader: 'ejs-compiled-loader'
            },
            ...config.module.rules[0].oneOf
        ];

        return config;
    }
};
