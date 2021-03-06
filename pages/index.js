import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    const images = [
        {
            enter: '/ecr_about.jpg',
            leave: '/ecr.jpg',
            link: '/about'
        },
        {
            enter: '/ecr_writing.jpg',
            leave: '/ecr.jpg',
            link: '/writing'
        },
        {
            enter: '/ecr_contact.jpg',
            leave: '/ecr.jpg',
            link: '/contact'
        }
    ];

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            
            <div className="home-grid grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
                {images.map((image, key) => {
                    return (
                        <div className="home-grid-item" key={key}>
                            <Link href={image.link} passHref>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={image.leave} alt="ecr" height="350" width="350" 
                                    onMouseEnter={e => e.currentTarget.src = image.enter}
                                    onMouseLeave={e => e.currentTarget.src = image.leave} 
                                    />
                            </Link>
                           
                        </div>
                    );
                })}
            </div>
        </div>
    )
}