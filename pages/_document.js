import Document, { Html, Head, Main, NextScript } from 'next/document'
import Nav from '../components/Nav';
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <Nav />
                <body>
                    <div className="container mx-12 pt-8">
                        <Main />
                    </div>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument