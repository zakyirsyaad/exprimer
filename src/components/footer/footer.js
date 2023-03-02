import './footer.css';

function Footer() {
    return (
        <section className='footer_container'>
            <div>
                <p className='footer_brand'>EXPRIMER</p>
                <p className='footer_brand_desc'>Lorem Ipsum dolor sit amet consectetur</p>
            </div>
            <div className='footer_link_container'>
                <p className='footer_link_header'>Company</p>
                <ol>
                    <li>About US</li>
                    <li>Contact</li>
                    <li>Service</li>
                </ol>
            </div>
            <div className='footer_link_container'>
                <p className='footer_link_header'>Feature</p>
                <div>
                    <ol>
                        <li>Sharing</li>
                        <li>Knowledge Article</li>
                        <li>Psikolog Service</li>
                    </ol>
                </div>
            </div>
            <div className='footer_link_container'>
                <p className='footer_link_header'>Join Our NewsLetter</p>
                <div className='subscribe_container'>
                    <input type='text' placeholder='Your Email Addres'></input>
                    <button>Subscribe</button>
                </div>
            </div>
        </section>
    );
}
export default Footer