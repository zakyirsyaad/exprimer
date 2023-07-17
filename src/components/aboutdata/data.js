import './data.css';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Data() {
    const [count1, setCount1] = useState(0);

    useEffect(() => {
        const intervalId1 = setInterval(() => {
            if (count1 === 125) {
                clearInterval(intervalId1);
            } else {
                setCount1(count1 + 1);
            }
        }, 75);
        return () => {
            clearInterval(intervalId1);
        };
    }, [count1]);
    function pad(n) {
        return n < 10 ? "0" + n : n;
    }

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <section className="data_container" data-AOS="fade-up" id='scroll_target'>
            <span class="material-symbols-outlined data_icon">
                handshake
            </span>
            <p className="data_counting">Team kami telah membantu sebanyak <span>{pad(count1)}</span> orang mulai dari <span>Remaja</span> hingga <span>Dewasa</span> yang memiliki masalah dari segi apapun.</p>
        </section>
    );
}
export default Data