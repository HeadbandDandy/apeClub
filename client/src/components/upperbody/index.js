import React, {useContext} from "react";
import { ExerciseContext } from "../..";

const UpperBody = () => {
//   const [exercises, setExercises] = useContext(ExerciseContext)
  
  return (
    <div className='menu-screen upper-body-menu'>
      <a href='/' className="btn btn-light btn-lg home-btn home-btn-regular home-btn-1">SHOULDERS</a>
      <button className="btn btn-light btn-lg home-btn home-btn-regular home-btn-2">CHEST</button>
      <button className="btn btn-light btn-lg home-btn home-btn-regular home-btn-3">BACK</button>
      <button className="btn btn-light btn-lg home-btn home-btn-regular home-btn-4">ARMS</button>
      <button className="btn btn-light btn-lg home-btn home-btn-regular home-btn-5">ABS</button>
      <a href='/' className="btn btn-secondary btn-lg home-btn go-back-btn home-btn-6">GO BACK</a>
    </div>
  )
}

export default UpperBody