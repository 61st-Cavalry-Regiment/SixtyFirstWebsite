import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="bg-primary min-h-screen mb-24 no-scrollbar">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
