import './artikel.css';
import Artikeldisp from './artikeldisp';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Artikelcont() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <section className="artikel_container" data-Aos="zoom-in">
            <div className="artikel_box_container">
                <p className='artikel_header'>Tahukah Kamu?</p>
                <p className="artikel_desc">Kamu disini akan mendapatkan pengetahuan mengenai kesehatan mental.</p>
                <Artikeldisp />
            </div>
        </section>
    );
}

export default Artikelcont