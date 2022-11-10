import logo from '../../img/ApeFrontFacingPose.png';

const SignIn = () => {
  return (
    <div className='menu-screen'>
      <img src={logo} className='large-logo' alt='Muscular ape with hands on hips.'></img>
      <form className='signIn-form mt-3'>
        <input type='text' placeholder='First Name' name='firstName' id='first-name-form-field'/>
        <input type='password' name='password' id='password-form-field' />
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