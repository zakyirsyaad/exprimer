import './faq.css';
import { Tab } from '@headlessui/react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos'
import Faqtext from './faqtext';
import Faqtextsec from './faqtextsec';

function Faq() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <section className='faq_container' data-aos="fade-down">
            <p className='faq_judul'>FAQ</p>
            <Tab.Group>
                <Tab.List className='tablist_container'>
                    <Tab className='tab_button'>Sebelum Konseling</Tab>
                    <Tab className='tab_button'>Sesudah Konseling</Tab>
                </Tab.List>
                <Tab.Panels className='tabpanels_container'>
                    <Tab.Panel>
                        <Faqtext />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Faqtextsec />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            <p className='faq_continue'>
                Masih Memiliki pertanyaan? hubungi via <a href='#'>Whattsapp</a>
            </p>
        </section>
    );
}

export default Faq