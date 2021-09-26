import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return Document.getInitialProps(ctx)
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <script async={true} src="/netlify-cms-redirect.js" />
                    <script
                        async={true}
                        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
                    />
                </body>
            </Html>
        )
    }
}

export default MyDocument
