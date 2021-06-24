import Document, { Html, Head, Main, NextScript } from 'next/document'
import Nav from '../components/Nav';
import Layout from '../components/Layout';
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <Nav />
                <body>
                    <Layout>
                        <Main />
                    </Layout>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument