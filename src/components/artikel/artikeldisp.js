import './artikel.css';

function Artikeldisp() {
    return (
        <div className='artikel_display_container'>
            <div className='artikel_box_display'>
                <p className='artikel_display_header'>1.Kesulitan Mengendalikan Emosi</p>
                <p className='artikel_display_desc'>Kekerasan yang dialami anak akan berdampak
                    sangat besar pada pengendalian emosi anak.
                    Setelah mengalami kekerasan, anak akan cenderung
                    kesulitan mengendalikan emosinya sehingga lebih mudah
                    dan sering merasa sedih, marah, maupun ketakutan secara
                    berlebihan. Selain itu,
                </p>
                <a href='#' className='artikel_link' target='_blank'>Lanjutkan baca</a>
                <p className='artikel_display_header'>2. Melakukan penarikan diri</p>
                <p className='artikel_display_desc'>Sebagai korban yang mengalami kekerasan oleh orangtua,
                    maka biasanya  anak cenderung memiliki pemikiran negatif
                    terhadap suatu persoalan yang dihadapinya seperti curiga
                    dan mengalami kesulitan untuk mempercayai orang lain.
                    Perilaku ini dapat mengakibatkan anak sulit untuk
                </p>
                <a href='#' className='artikel_link' target='_blank'>Lanjutkan baca</a>
            </div>
            <div className='button_container'>
                <button className="button_artikel">Lainnya</button>
            </div>
        </div>
    );
}

export default Artikeldisp