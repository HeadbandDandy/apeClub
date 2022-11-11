import React, {useContext} from "react";
import { ExerciseContext } from "../..";

const Shoulders = () => {
const [exercises, setExercises] = useContext(ExerciseContext);

let shoulderExercises = exercises.filter(obj => {
    return obj.bodyPart === 'shoulders';
});
console.log(shoulderExercises);
  
    return (
        <div className='exercise-page'>
            <h1>Shoulders</h1>
            
        </div>
    )
}

export default Shoulders;