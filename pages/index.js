import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            
            <div className="home-grid grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
                <div className="home-grid-item">
                    <Image src="/ecr.jpg" height="350" width="350" />
                </div>
                <div className="home-grid-item">
                    <Image src="/ecr.jpg" height="350" width="350" />
                </div>
                <div className="home-grid-item">
                    <Image src="/ecr.jpg" height="350" width="350" />
                </div>
                <div className="home-grid-item">
                    <Image src="/ecr.jpg" height="350" width="350" />
                </div>
                <div className="home-grid-item">
                    <Image src="/ecr.jpg" height="350" width="350" />
                </div>
                <div className="home-grid-item">
                    <Image src="/ecr.jpg" height="350" width="350" />
                </div>
                <div className="home-grid-item">
                    <Image src="/ecr.jpg" height="350" width="350" />
                </div>
                <div className="home-grid-item">
                    <Image src="/ecr.jpg" height="350" width="350" />
                </div>
                <div className="home-grid-item">
                    <Image src="/ecr.jpg" height="350" width="350" />
                </div>
            </div>
        </div>
    )
}