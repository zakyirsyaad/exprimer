import './banner.css';
import imageBanner from './christopher-campbell-rDEOVtE7vOs-unsplash.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Banner() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <section className="banner_container" data-AOS="fade-right">
            <div className="text_banner_container">
                <p className="text_banner">Counseling with the Best Clinical Psychologists: Professional,
                    Empathic and Non-Judgmental</p>
                <button className="button_banner">Learn More</button>
            </div>
            <div>
                <img src={imageBanner} className="image_banner"></img>
            </div>
        </section>
    );
}
export default Banner