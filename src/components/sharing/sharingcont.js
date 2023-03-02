import './sharing.css';
import Sharingdisp from './sharingdisp';
import Sharingdispa from './sharingdispa';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Sharingcont() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <section className="sharing_container" data-Aos="zoom-in">
            <div className="sharing_box_container">
                <p className="sharing_header">SHARING</p>
                <p className="sharing_desc">Kamu dapat berbagi Cerita, Keluh Kesah, Pengalaman, dan segala apapun yang anda ingin ceritakan.</p>
                <Sharingdisp />
                <Sharingdispa />
                <button className="button_sharing">Lainnya</button>
            </div>
        </section>
    );
}
export default Sharingcont;
