const nextConfig = {
    reactStrictMode: true,
};
const withSass = require('@zeit/next-sass');
const {webpack} = require("next/dist/compiled/webpack/webpack");
const withSassF = withSass({
    cssModules: true,
    sassLoaderOptions: {
        includePaths: ["styles"]
    }
});

module.exports = {
    nextConfig,
    withSassF,
    reactStrictMode: true,
    images: {
        domains: ['demo.lion-coders.com','cdn.stocksnap.io'],
    },
    experimental: {
        nextScriptWorkers: true,
    },
    optimization: {
        mergeDuplicateChunks: true,
    },
    webpack(config, { isServer }) {
        if (!isServer) {
            config.optimization.splitChunks.cacheGroups = {
                ...config.optimization.splitChunks.cacheGroups,
                '@sentry': {
                    test: /[\\/]node_modules[\\/](@sentry)[\\/]/,
                    name: '@sentry',
                    priority: 10,
                    reuseExistingChunk: false,
                },
            };
        }

        return config;
    },
};

