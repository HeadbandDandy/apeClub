import React, {useState, useRef} from 'react';
import logo from '../../img/ApeFrontFacingPose.png';
import { ADD_USER } from '../../utils/mutations'
import { useMutation } from '@apollo/client'
import Auth from '../../utils/auth'

const Register = () => {
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const [addUser] = useMutation(ADD_USER);

  async function registerUser() {
    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value
    }
    console.log(user);
    if(password.current.value === confirmPassword.current.value) {
      //Send Data To Back End Here
      try {
        const { data } = await addUser({
          variables: { ...user },
        });
  
      Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
        const errorMessage = e.message
        console.log(errorMessage)
        if(errorMessage.includes('email')) {
          alert('Email is already in use')
        } else if (errorMessage.includes('username')){
          alert('Username is already in use')
        } else if(errorMessage.includes('password')) {
          alert('Password must be atleast 5 characters')
        }
      }
    } else {
      alert("Your password does not match");
      
    }
  }

  function clearForm() {
    //Reload page to clear form
  }

  return (
    <div className='menu-screen'>
      <img src={logo} className='large-logo' alt='Muscular ape with hands on hips.'></img>
      <form className='signIn-form mt-3'>
        <input ref={username} className='sub-form-field fade-left' type='text' name='username' placeholder='Username' id='username-form-field' />
        <input ref={email} className='sub-form-field fade-right' type='text' name='email' placeholder='Email' id='email-form-field' />
        <input ref={password} className='sub-form-field fade-left' type='password' name='password' placeholder='Password' id='pass-form-field' />
        <input ref={confirmPassword} className='sub-form-field fade-right' type='password' name='passwordConfirmation' placeholder='Confirm Password ' id='pass-conf-form-field' />
      </form>
      <div className='signIn-btns'>
        <button onClick={registerUser} className="btn btn-light btn-lg home-btn home-btn-regular signIn-btn-1">SUBMIT</button>
        <button onClick={clearForm} className="btn btn-info btn-lg home-btn register-btn signIn-btn-2">CLEAR</button>
      </div>
      <a href='/signIn' className="btn btn-secondary btn-lg home-btn go-back-btn signIn-btn-3">GO BACK</a>
    </div>
  )
}

export default Register