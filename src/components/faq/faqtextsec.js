import React, { useState } from 'react';
import './faq.css';

function Faqtextsec() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);

    return (
        <div className='box_container'>
            <div className='box_faq'>
                <div className='box_header'>Berapa kali saya harus konsuling?</div>
                <button className='box_button' onClick={() => setExpanded1(!expanded1)}>
                    {expanded1}
                    Jawaban
                </button>
                <div className='box_answer'>{expanded1
                    ? 'Masalah yang terbentuk selama bertahun-tahun tidak akan bisa diselesaikan hanya dalam sekejap sesi konseling. Tujuannya di sini bukan untuk konseling sesingkat-singkatnya, melainkan untuk menyelesaikan masalah yang kamu hadapi sampai ke akarnya, sehingga kamu tidak perlu kembali ke psikolog untuk masalah yang sama di lain waktu, dan terlebih supaya dirimu sebagai individu juga bisa bertumbuh.'
                    : ''}
                </div>
            </div>
            <div className='box_faq'>
                <div className='box_header'>Apa yang saya harus lakukan setelah konsuling?</div>
                <button className='box_button' onClick={() => setExpanded2(!expanded2)}>
                    {expanded2}
                    Jawaban
                </button>
                <div className='box_answer'>{expanded2
                    ? 'Setelah konseling, psikolog tentunya akan memberikan poin refleksi ataupun PR yang bisa dikerjakan sebelum sesi selanjutnya. Tapi tidak musti, karena konseling adalah proses pemulihan psikologis yang seringkali terjadi in the background tanpa kita sadari. Yang penting adalah komitmen untuk terus berproses sampai pulih, dan kerjasama erat antara kamu dengan psikolog pendamping.'
                    : ''}
                </div>
            </div>
            <div className='box_faq'>
                <div className='box_header'>Bagaimana cara mempertahankan kondisi mental yang baik setelah konseling?</div>
                <button className='box_button' onClick={() => setExpanded3(!expanded3)}>
                    {expanded3}
                    Jawaban
                </button>
                <div className='box_answer'>{expanded3
                    ? 'Kamu bisa rutin melakukan kebiasaan-kebiasaan baik yang mendukung kesehatan mental yang optimal seperti journaling, meditasi, latihan pernafasan, dan lainnya. Ketiga aktivitas pertama yang barusan disebutkan juga tersedia secara gratis di aplikasi Bicarakan.id loh.'
                    : ''}
                </div>
            </div>
        </div>
    );
}

export default Faqtextsec;