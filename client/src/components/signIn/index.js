import React, {useState, useRef} from 'react';
import logo from '../../img/ApeFlexing.png';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth'
import {useMutation} from '@apollo/client'

const SignIn = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [login] = useMutation(LOGIN_USER);

  async function signIn() {
    const credentials = {
      email: email.current.value,
      password: password.current.value
    }
    console.log(credentials);
    try {
      const { data } = await login({
        variables: { ...credentials },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className='menu-screen'>
      <img src={logo} className='logo' alt='Muscular ape with hands on hips.'></img>
      <form className='signIn-form'>
        <input ref={email} className='form-field mt-3' type='text' name='email' placeholder='Email' id='username-form-field'/>
        <input ref={password} className='form-field' type='password' name='password' placeholder='Password' id='password-form-field' />
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