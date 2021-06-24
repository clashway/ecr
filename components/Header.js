import Nav from "./Nav";
import Image from 'next/image';

const Header = () => {
    return ( 
        <header className="flex flex-row justify-between">
            <div className="logo pr-10">
                <Image 
                    src="/jenna_logo2.png"
                    height="66"
                    width="350"
                    layout="fixed"
                    alt="logo" />
            </div>
            <div className="navigation pt-6 uppercase font-semibold text-sm">
                <Nav />
            </div>
        </header>
    );
}
 
export default Header;