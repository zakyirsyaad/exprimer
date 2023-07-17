import './banner.css';
import imageBanner from './christopher-campbell-rDEOVtE7vOs-unsplash.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

const handleButtonClick = () => {
    scroller.scrollTo('scroll_target', {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutQuart'
    });
}


function Banner() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <section className="banner_container" data-AOS="fade-right">
            <div className="text_banner_container">
                <p className="text_banner">Counseling with the Best Clinical Psychologists: Professional,
                    Empathic and Non-Judgmental</p>
                <button className="button_banner" onClick={handleButtonClick}>Learn More</button>
            </div>
            <div>
                <img src={imageBanner} className="image_banner"></img>
            </div>
        </section >
    );
}
export default Banner