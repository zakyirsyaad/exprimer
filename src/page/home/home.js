import './home.css';
import Navbar from '../../components/navbar/navbar';
import Banner from '../../components/banner/banner';
import Data from '../../components/aboutdata/data';
import Sharingcont from '../../components/sharing/sharingcont';
import Artikelcont from '../../components/artikel/artikelcont';
import Layanan from '../../components/layanan/layanan';
import Faq from '../../components/faq/faq';
import Footer from '../../components/footer/footer';


function Home() {
    return (
        <section className="container">
            <section className="navbar_banner">
                <Navbar />
                <Banner />
            </section>
            <Data />
            <Sharingcont />
            <Artikelcont />
            <Layanan />
            <Faq />
            <Footer />
        </section>
    );
}

export default Home