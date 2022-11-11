import logo from '../../img/ApeFrontFacingPose.png';

const SignIn = () => {
  return (
    <div className='menu-screen'>
      <img src={logo} className='large-logo' alt='Muscular ape with hands on hips.'></img>
      <form className='signIn-form mt-3'>
      <input className='sub-form-field fade-left' type='text' name='username' placeholder='Username' id='username-form-field' />
        <input className='sub-form-field fade-right' type='text' name='email' placeholder='Email' id='email-form-field' />
        <input className='sub-form-field fade-left' type='password' name='password' placeholder='Password' id='pass-form-field' />
        <input className='sub-form-field fade-right' type='password' name='passwordConfirmation' placeholder='Confirm Password ' id='pass-conf-form-field' />
      </form>
      <div className='signIn-btns'>
        <button className="btn btn-light btn-lg home-btn home-btn-regular signIn-btn-1">SUBMIT</button>
        <button className="btn btn-info btn-lg home-btn register-btn signIn-btn-2">CLEAR</button>
      </div>
      <a href='/signIn' className="btn btn-secondary btn-lg home-btn go-back-btn signIn-btn-3">GO BACK</a>
    </div>
  )
}

export default SignIn