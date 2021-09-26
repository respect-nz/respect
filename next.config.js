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
}
