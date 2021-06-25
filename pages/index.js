import Head from 'next/head';

export default function Home() {
    const images = [
        {
            enter: '/ecr_about.jpg',
            leave: '/ecr.jpg'
        },
        {
            enter: '/ecr_writing.jpg',
            leave: '/ecr.jpg'
        },
        {
            enter: '/ecr_contact.jpg',
            leave: '/ecr.jpg'
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
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={image.leave} alt="ecr" height="350" width="350" 
                                onMouseEnter={e => e.currentTarget.src = image.enter}
                                onMouseLeave={e => e.currentTarget.src = image.leave} 
                                />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}