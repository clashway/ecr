import Link from 'next/link';

const Nav = () => {
    return ( 
        <nav className="px-6">
            <ul className="flex flex-row">
                <li className="mr-6"><Link href="/">Home</Link></li>
                <li className="mr-6"><Link href="/projects/mariogolf">Mario Golf</Link></li>
            </ul>
        </nav>
    );
}
 
export default Nav;