import React, {useState, useRef} from 'react';
import logo from '../../img/ApeFlexing.png';

const SignIn = () => {
  const username = useRef(null);
  const password = useRef(null);

  function signIn() {
    const credentials = {
      username: username.current.value,
      password: password.current.value
    }
    console.log(credentials);
    //Send Credentials to back and check. 
  }

  return (
    <div className='menu-screen'>
      <img src={logo} className='logo' alt='Muscular ape with hands on hips.'></img>
      <form className='signIn-form'>
        <input className='form-field mt-3' type='text' name='userName' placeholder='Username' id='username-form-field'/>
        <input className='form-field' type='password' name='password' placeholder='Password' id='password-form-field' />
      </form>
      <div className='signIn-btns'>
        <button onClick={signIn} className="btn btn-light btn-lg home-btn home-btn-regular signIn-btn-1">SIGN IN</button>
        <a href='/' className="btn btn-secondary btn-lg home-btn go-back-btn signIn-btn-2">GO BACK</a>
      </div>
      <a href='/register' className="btn btn-info btn-lg home-btn register-btn signIn-btn-3">REGISTER</a>
    </div>
  )
}

export default SignIn;