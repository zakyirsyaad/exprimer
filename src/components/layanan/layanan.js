import './layanan.css';
import './layananbutton.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import imageReader from './img/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg';
import imageReader2 from './img/imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg';
import imageReader3 from './img//jeffery-erhunse-Z9lbmEjyYjU-unsplash.jpg';
import imageReader4 from './img/ospan-ali-6xv4A1VA1rU-unsplash.jpg';

function Layanan() {
    return (
        <section className='layanan_container' id='service_target'>
            <div className='layanan_box_text'>
                <p className='layanan_header'>Profil Psikolog</p>
                <p className='layanan_desc'>Yuk kenali 10 psikolog yang ahli
                    dalam permasalahan keluarga & siap membantumu
                    menemukan jalan keluar.
                </p>
            </div>
            <div className='layanan_slide_container'>
                <Swiper
                    spaceBetween={80}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className='layanan_profile'>
                            <img src={imageReader} className='layanan_image'></img>
                            <p className='layanan_name'>Joana Novena Putri, M.Psi., Psikolog</p>
                            <button class="btn">
                                my profile
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='layanan_profile'>
                            <img src={imageReader2} className='layanan_image'></img>
                            <p className='layanan_name'>Joana Novena Putri, M.Psi., Psikolog</p>
                            <button class="btn">
                                my profile
                            </button>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className='layanan_profile'>
                            <img src={imageReader3} className='layanan_image'></img>
                            <p className='layanan_name'>Joana Novena Putri, M.Psi., Psikolog</p>
                            <button class="btn">
                                my profile
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='layanan_profile'>
                            <img src={imageReader4} className='layanan_image'></img>
                            <p className='layanan_name'>Joana Novena Putri, M.Psi., Psikolog</p>
                            <button class="btn">
                                my profile
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='layanan_profile'>
                            <img src={imageReader4} className='layanan_image'></img>
                            <p className='layanan_name'>Joana Novena Putri, M.Psi., Psikolog</p>
                            <button class="btn">
                                my profile
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='layanan_profile'>
                            <img src={imageReader4} className='layanan_image'></img>
                            <p className='layanan_name'>Joana Novena Putri, M.Psi., Psikolog</p>
                            <button class="btn">
                                my profile
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Layanan