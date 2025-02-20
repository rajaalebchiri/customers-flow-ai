const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        
        turbo: {
            resolveExtensions: [
                '.mdx',
                '.tsx',
                '.ts',
                '.jsx',
                '.js',
                '.mjs',
                '.json',
            ],
        },
    },
};

module.exports = withContentlayer(nextConfig);