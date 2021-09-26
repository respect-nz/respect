/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    target: 'serverless',
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            loader: 'frontmatter-markdown-loader',
            options: { mode: ['react-component'] },
        })
        return config
    },
    async rewrites() {
        return [
            {
                source: '/admin',
                destination: '/admin/index.html',
            },
        ]
    },
    async redirects() {
        return [
            {
                source: '/admin',
                destination: '/admin/index.html',
                permanent: true,
            },
        ]
    },
}
