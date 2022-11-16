import logo from '../../img/apeWithArmDumbells.png';
import auth from '../../utils/auth'

const Exercises = () => {
  return (
    <div className='menu-screen'>
      <img src={logo} className='logo' alt='Muscular ape with hands on hips.'></img>
      <a href='/upperbody' className="btn btn-light btn-lg home-btn home-btn-regular home-btn-1">UPPER BODY</a>
      <a href='/lowerbody' className="btn btn-light btn-lg home-btn home-btn-regular home-btn-1">LOWER BODY</a>
      <button className="btn btn-danger btn-lg home-btn home-btn-ape home-btn-3">FULL BODY</button>
      <a href={auth.loggedIn() ? ('/homepage'):('/')} className="btn btn-secondary btn-lg home-btn go-back-btn home-btn-4">GO BACK</a>
    </div>
  )
}

export default Exercises