import Document, { Html, Head, Main, NextScript } from 'next/document'
import Nav from '../components/Nav';
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <Nav />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument