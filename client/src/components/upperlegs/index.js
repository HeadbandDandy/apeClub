import React, {useState, useEffect, useContext, useRef} from "react";
import { ExerciseContext } from "../..";
import Auth from '../../utils/auth';
import { ADD_WORKOUT } from "../../utils/mutations";
import { QUERY_ME, QUERY_USER } from "../../utils/queries";
import { useMutation, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';

const UpperLegs = () => {
    const [exercises, setExercises] = useContext(ExerciseContext);
    let [currentExercise, setCurrentExercise] = useState(0);
// filter below searches for exercises that include upper legs
    const pageExercises = exercises.filter(obj => {
        return obj.bodyPart === 'upper legs';
    });

    const [addWorkout] = useMutation(ADD_WORKOUT)
    const { username: userParam } = useParams();
    const { loading, error, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    })
    if(loading) return 'Loading...'
    //if(error) return `Error ${error.message}`
    const user = data?.me||data?.user

    const changeExercise = (num) => {
        if(currentExercise + num < 0) {
            setCurrentExercise(pageExercises.length - 1)
        } else if(currentExercise + num > pageExercises.length -1) {
            setCurrentExercise(0)
        } else {
            setCurrentExercise(currentExercise + num);
        }
    }
    async function saveExercise() {
        
        const exercise = {
            user_id: user._id,
            exercise_id: pageExercises[currentExercise].id
        }
        console.log(exercise);
        try {
            const { data } = await addWorkout({
            variables: { user_id: user._id, exercise_id: pageExercises[currentExercise].id},
            });
            console.log(data)
        } catch (e) {
            console.error(e);
        }
    }
    function isExerciseSaved() {
        console.log(typeof pageExercises[currentExercise] !== "undefined")
        if(Auth.loggedIn()) {
            if(typeof pageExercises[currentExercise] !== "undefined" ){
                const i = user.workouts.findIndex(e => e.exercise_id == pageExercises[currentExercise].id);
                if (i > -1) {
                    console.log('true')
                    return true
                } else {
                    console.log('false')
                    return false
                }
            } else {
                console.log('try again')
            }
            return false
        }
    }

    return (
        <div className='exercise-page'>
            <h1>Upper Legs</h1>
            <div className="card text-center">
                <div className="card-header">{pageExercises[currentExercise]?.name}</div>
                <div className="card-body">
                    <img src={pageExercises[currentExercise]?.gifUrl} alt='Demonstration a Squat' />
                </div>
                <div className="card-footer">
                    <span className="badge badge-info">{pageExercises[currentExercise]?.target}</span>
                    {Auth.loggedIn() && isExerciseSaved() ? (
                        <button className="btn btn-success">Saved</button>
                    ) : (Auth.loggedIn() ? (<button onClick={() => saveExercise()} className="btn btn-danger">Add Workout</button>)
                    :((<span className="badge badge-info">{pageExercises[currentExercise]?.bodyPart}</span>)))
                    }
                    <span className="badge badge-info">{pageExercises[currentExercise]?.equipment}</span>
                </div>
            </div>
            <div className="exercise-page-navigation">
                <button onClick={() => changeExercise(-1)}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>
                <a href={Auth.loggedIn() ? ('/homepage'):('/')}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16"><path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/></svg></a>
                <button onClick={() => changeExercise(1)}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>
            </div>
        </div>
    )
}

export default UpperLegs;