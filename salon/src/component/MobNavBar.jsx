import logo from '../assets/logo.svg'

export default function MobNavBar({ isOpen, setIsOpened }) {

    const handleSelect = (sectionId) => {
        if (isOpen) setIsOpened(false)
        document.getElementById(sectionId).scrollIntoView({ behvaior: 'smooth' })
    }

    return (
        <div className="w-screen fixed top-0 z-20">
            <div className="w-1/2 h-screen flex flex-col p-8 bg-overall">
                <a href="/">
                    <img src={logo} alt="logo" className="w-16 mb-8 rounded size-12" />
                </a>

                <ul>
                    <li className="mb-5">
                        <a className="menu-item" onClick={() => handleSelect('home')}>Home</a>
                    </li>

                    <li className="mb-5">
                        <a className="menu-item" onClick={() => handleSelect('about')}>About Us</a>
                    </li>

                    <li className="mb-5">
                        <a className="menu-item" onClick={() => handleSelect('services')}>Services</a>
                    </li>

                    <li className="mb-5">
                        <a className="menu-item" onClick={() => handleSelect('gallery')}>Gallery</a>
                    </li>

                    <li className="mb-5">
                        <a className="menu-item" onClick={() => handleSelect('products')}>Products</a>
                    </li>
                </ul>

                <button className="h-10 bg-btnBKColor text-white text-sm px-6 rounded hover:bg-sectionColor hover:text-headingColor md:block">Contact Us</button>

                <div
                    className='w-screen h-screen bg-overlayBg fixed top-0 -z-10'
                    onClick={() => {
                        setIsOpened(false)
                    }} />
            </div>
        </div>
    )
}