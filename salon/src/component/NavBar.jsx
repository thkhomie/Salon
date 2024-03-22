import { useState } from 'react';
import { Link } from 'react-scroll'
import logo from '../assets/logo.svg'
import { RiMenu4Line, RiCloseFill } from 'react-icons/ri'
import MobNavBar from './MobNavBar'


export default function NavBar() {
    const [isOpen, setIsOpened] = useState(false);

    return (
        <>
            {isOpen &&  <MobNavBar isOpen={isOpen} setIsOpened={setIsOpened} />}
            <div className="bg-overall sticky top-0 z-10">

                <nav className="max-w-screen-xl mx-auto py-4 px-6">
                    <div className="flex justify-between items-center">

                        <img src={logo} alt="logo" className="rounded size-12" />

                        <ul className="hidden list-none md:flex md:gap-14">
                            <li>
                                <Link to='home' smooth spy offset={-80} href="" className="menu-item">Home</Link>
                            </li>
                            <li>
                                <Link to='about' smooth spy offset={-80} href="" className="menu-item">About Us</Link>
                            </li>
                            <li>
                                <Link to='services' smooth spy offset={-80} href="" className="menu-item">Services</Link>
                            </li>
                            <li>
                                <Link to='gallery' smooth spy offset={-80} href="" className="menu-item">Gallery</Link>
                            </li>
                            <li>
                                <Link to='products' smooth spy offset={-80} href="" className="menu-item">Products</Link>
                            </li>
                        </ul>

                        <button className="hidden h-10 bg-btnBKColor text-white text-sm px-6 rounded hover:bg-sectionColor hover:text-headingColor md:block">Contact Us</button>

                        <button onClick={() => {setIsOpened(true)}} className="w-11 h-11 text-2xl text-primary flex items-center justify-center rounded md:hidden">
                            {isOpen ? <RiCloseFill /> : <RiMenu4Line />}
                        </button>
                    </div>

                </nav>
            </div>
        </>

    )
}