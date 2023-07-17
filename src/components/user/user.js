import './user.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos'
import videoBg from './www.ytmp4.Net--Pink-Blue-Gradient-Free-Background-Videos-Motion-Graphics-No-Copyright-All-Background-Videos-www-youtube-com-1080p-d7276a44cf33e51983dec8f201af74ab-1080p.mp4';

function User() {
    const [modal, setModal] = useState(false);
    const [loginModal, setLoginmodal] = useState(false);
    const [registerModal, setRegistermodal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const toggleLoginmodal = () => {
        setLoginmodal(!loginModal);
        setModal(false); // tambahkan kode ini untuk menutup popup lain ketika membuka popup login
    };

    const toggleRegistermodal = () => {
        setRegistermodal(!registerModal);
        setModal(false); // tambahkan kode ini untuk menutup popup lain ketika membuka popup register
    };

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <section className='user_container'>
            <video src={videoBg} autoPlay loop muted />
            <div className='user_box_container'>
                <p className='welcome_header'>WELCOME TO EXPRIMER</p>
                <button onClick={toggleModal} className='welcome_button' data-Aos="zoom-in">
                    WELCOME CLICK HERE
                </button>
                <div className='modal_container'>
                    {modal && (
                        <div className='user_modal_container' data-Aos="zoom-in">
                            <NavLink to='dashboard'><button className='toggle_button'>Login as Guest</button>
                            </NavLink>
                            <button className='toggle_button' onClick={toggleLoginmodal}>
                                Login
                            </button>
                            <button className='toggle_button' onClick={toggleRegistermodal}>
                                Register
                            </button>
                            <button className='toggle_button' onClick={toggleModal}>
                                Cancel
                            </button>
                        </div>
                    )}
                    {loginModal && (
                        <div className='user_modal_container'>
                            <form>
                                <div className='sign_box_container'>
                                    <button onClick={toggleLoginmodal} className='cancel_button' >
                                        Cancel
                                    </button>
                                    <label className='header_sign'>Login</label>
                                    <input type={Text} placeholder='Username'></input>
                                    <input type={'password'} placeholder='Password'></input>
                                    <button className='submit_button'>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    {registerModal && (
                        <div className='user_modal_container'>
                            <div className='sign_box_container'>
                                <button onClick={toggleRegistermodal} className='cancel_button'>
                                    Cancel
                                </button>
                                <label className='header_sign'>Register</label>
                                <input type={Text} placeholder='Username'></input>
                                <input type={Text} placeholder='Name'></input>
                                <input type={'password'} placeholder='Password'></input>
                                <input type={'password'} placeholder='Re-Password'></input>
                                <button className='submit_button'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default User;
