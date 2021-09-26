import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import Script from 'next/script'

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
                    <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
                    <Script src="/netlify-cms-redirect.js" />
                </body>
            </Html>
        )
    }
}

export default MyDocument
