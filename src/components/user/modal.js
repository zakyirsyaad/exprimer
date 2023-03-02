import './user.css';

function Modal({ openModal, setOpenModal }) {

  return (
    <session className='modal_container'>
      <button className='sign_button'>Sign In as Guest</button>
      <div className='sign_box_container'>
        <label>Login</label>
        <input type={Text} placeholder='Your Name'></input>
        <input type={'password'}></input>
      </div>
      <div className='sign_box_container'>
        <label>Register</label>
        <input type={Text}></input>
        <input type={Text}></input>
        <input type={Text}></input>
        <input type={'password'}></input>
      </div>
    </session>
  );
}

export default Modal