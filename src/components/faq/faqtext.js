import React, { useState } from 'react';
import './faq.css';

function Faqtext() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);

    return (
        <div className='box_container'>
            <div className='box_faq'>
                <div className='box_header'>Apa saja yang akan saya dapatkan setelah konseling?</div>
                <button className='box_button' onClick={() => setExpanded1(!expanded1)}>
                    {expanded1}
                    Jawaban
                </button>
                <div className='box_answer'>{expanded1
                    ? 'Setiap sesi konseling tentunya akan berbeda. Tapi, kamu bisa berekspektasi untuk mendapatkan suasana hati yang lebih tenang, pikiran yang lebih jernih, dan/atau pemetaan masalah serta perencanaan tindakan untuk menyelesaikan masalah yang kamu hadapi dengan tuntas sampai ke akarnya.'
                    : ''}
                </div>
            </div>
            <div className='box_faq'>
                <div className='box_header'>Konseling itu prosesnya seperti apa?</div>
                <button className='box_button' onClick={() => setExpanded2(!expanded2)}>
                    {expanded2}
                    Jawaban
                </button>
                <div className='box_answer'>{expanded2
                    ? 'Konseling adalah proses kolaboratif antara kamu & psikolog. Ruang konseling adalah safe space atau ruang yang aman untukmu bercerita tentang apapun yang sedang membebanimu. Psikolog akan mendengarkan dengan atentif dan memberimu ruang untuk bercerita dengan bebas. Setelah itu, kamu dapat bersama-sama merancang pemetaan masalah, serta rencana untuk menyelesaikan masalah tersebut dengan tuntas sampai ke akarnya, dengan dampingan psikolog.'
                    : ''}
                </div>
            </div>
            <div className='box_faq'>
                <div className='box_header'>Apakah saya nanti akan diberi obat?</div>
                <button className='box_button' onClick={() => setExpanded3(!expanded3)}>
                    {expanded3}
                    Jawaban
                </button>
                <div className='box_answer'>{expanded3
                    ? 'Tidak. Hanya psikiater yang dapat memberikan obat, dan psikolog kami hanya akan merujuk kamu untuk bertemu dengan psikiater apabila segala pendekatan psikologis sudah dicoba dan memang ditemukan bahwa diperlukan bantuan obat untuk proses pemulihan psikologismu. Namun, obat seharusnya tidak menjadi pilihan pertama, karena berbagai resiko efek samping yang bisa ditimbulkan oleh obat dan juga beragam masalah yang sesungguhnya tidak bisa diselesaikan hanya dengan intervensi berupa obat. Pada beberapa kasus, dibutuhkan kolaborasi antara psikolog & psikiater untuk penanganan yang maksimal.'
                    : ''}
                </div>
            </div>
        </div>
    );
}

export default Faqtext;