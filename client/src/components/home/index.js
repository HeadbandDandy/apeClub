import logo from '../../img/ApeFlexing.png';

const Header = () => {
  return (
    <div className='menu-screen'>
      <img src={logo} className='logo' alt='Muscular ape with hands on hips.'></img>
      <a href='/signIn' className="btn btn-light btn-lg home-btn home-btn-regular home-btn-1">SIGN IN</a>
      <button className="btn btn-light btn-lg home-btn home-btn-regular hidden">VIEW WORKOUTS</button>
      <a href='/exercises' className="btn btn-light btn-lg home-btn home-btn-regular home-btn-2">VIEW EXERCISES</a>
      <a href='/exercises' className="btn btn-danger btn-lg home-btn home-btn-ape home-btn-3">GO APE SHIT!</a>
    </div>
  )
}

export default Header