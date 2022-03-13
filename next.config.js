/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};
const withSass = require('@zeit/next-sass');
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
};

