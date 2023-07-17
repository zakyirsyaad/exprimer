import './navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';


const handleButtonClick = () => {
    scroller.scrollTo('sharing_target', {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutQuart'
    });
}

const handleButtonClick2 = () => {
    scroller.scrollTo('service_target', {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutQuart'
    });
}


function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    useEffect(() => {
        AOS.init({ duration: 750 });
    }, [])
    return (
        <section>
            <header className="navbar_container">
                <nav>
                    <a href="/#" className="nav_link">Home</a>
                    <a href="/#" className="nav_link">About</a>
                </nav>
                <div className="nav_name">EXPRIMER</div>
                <nav>
                    <a onClick={handleButtonClick} className="nav_link">Sharing</a>
                    <a onClick={handleButtonClick2} className="nav_link">Service</a>
                </nav>
            </header>
            {/* <header className="navbar_container_phone">
                <div className="nav_name_phone">EXPRIMER</div>
                <div className='toggle_container'>
                    <span class="material-symbols-outlined icon" onClick={toggleNav}>
                        menu
                    </span>
                    {toggleMenu && (
                        <nav className='nav_link_phone_container' data-AOS="fade-left">
                            <a href="/#" className="nav_link_phone">Home</a>
                            <a href="/#" className="nav_link_phone">About</a>
                            <a onClick={handleButtonClick} className="nav_link_phone">Sharing</a>
                            <a onClick={handleButtonClick2} className="nav_link_phone">Service</a>
                        </nav>
                    )}
                </div>
            </header> */}
        </section>

    );
}

export default Navbar