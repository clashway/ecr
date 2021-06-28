import Nav from "./Nav";
import Image from 'next/image';

const Header = () => {
    return ( 
        <header className="flex flex-row justify-between">
            <div className="logo">
                <Image 
                    src="/ecr_logo.png"
                    height="66"
                    width="350"
                    layout="intrinsic"
                    alt="logo"
                />
            </div>
            <div className="flex w-full block md:hidden">
                <div className="m-auto">copy</div>
            </div>
            <div className="navigation pt-6 uppercase font-semibold text-sm hidden md:block">
                <Nav />
            </div>
        </header>
    );
}
 
export default Header;