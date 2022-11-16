import React, {useState, useEffect, useContext, useRef} from "react";
import { ExerciseContext } from "../..";
import { ADD_WORKOUT } from "../../utils/mutations";
import { QUERY_ME, QUERY_USER } from "../../utils/queries";
import { useMutation, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';

const Arms = () => {
    const [exercises, setExercises] = useContext(ExerciseContext);
    let [currentExercise, setCurrentExercise] = useState(0);
// filter below searches for exercises that include upper arm and lower arms
    const pageExercises = exercises.filter(obj => {
        return obj.bodyPart === 'upper arms' && 'lower arms';
    });

    const changeExercise = (num) => {
        setCurrentExercise(currentExercise + num);
    }
    const [addWorkout] = useMutation(ADD_WORKOUT)
    const { username: userParam } = useParams();
    const { loading, error, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    })
    if(loading) return 'Loading...'
    if(error) return `Error ${error.message}`
    const user = data?.me||data?.user

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

    return (
        <div className='exercise-page'>
            <h1>Arms</h1>
            <div className="card text-center">
                <div className="card-header">{pageExercises[currentExercise]?.name}</div>
                <div className="card-body">
                    <img src={pageExercises[currentExercise]?.gifUrl} alt='Demonstration of Bicep Curl' />
                </div>
                <div className="card-footer">
                    <span className="badge badge-info">{pageExercises[currentExercise]?.target}</span>
                    <span onClick={() => saveExercise()} className="badge badge-info save-badge">Save</span>
                    <span className="badge badge-info">{pageExercises[currentExercise]?.equipment}</span>
                </div>
            </div>
            <div className="exercise-page-navigation">
                <button onClick={() => changeExercise(-1)}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>
                <a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16"><path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/></svg></a>
                <button onClick={() => changeExercise(1)}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>
            </div>
        </div>
    )
}

export default Arms;