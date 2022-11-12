import React, { useState, useEffect } from 'react';
import Home from './components/home';
import SignIn from './components/signIn';
import Exercises from './components/exercises';
import UpperBody from './components/upperbody';
import Register from './components/register';
import Shoulders from './components/shoulders';
import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import { ExerciseContext } from './index';
import axios from 'axios';
import LowerBody from './components/lowerbody';
import Chest from './components/chest';
import Back from './components/back';
import Arms from './components/arms'
import UpperLegs from './components/upperlegs'
import LowerLegs from './components/lowerlegs'




// below contains the browser routes linked to individual components.

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signIn',
    element: <SignIn />
  },
  {
    path: '/exercises',
    element: <Exercises />
  },

  {
    path: '/register',
    element: <Register />
  },

// below contains upperbody pages/components
  {
    path: '/upperbody',
    element: <UpperBody />
  },
  
  {
    path: '/shoulders',
    element: <Shoulders />
  },
  {
    path: '/lowerbody',
    element: <LowerBody />
  },
  {
    path: '/chest',
    element: <Chest />
  },
  {
    path: 'back',
    element: <Back />
  },
  {
    path: '/arms',
    element: <Arms />
  },
  // below contains lowerbody pages/components
  {
    path: '/upperlegs',
    element: < UpperLegs />
  },
  {
    path: '/lowerlegs',
    element: < LowerLegs />
  }

]);

function App() {
  const [exercises, setExercises] = useState([])

  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_EXERCISE_API,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  const getExercises = () => {
    axios.request(options).then(function (response) {
      setExercises(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };

  useEffect(() => {
    getExercises();
  }, [])
  
  return (
    <div className="App">
      <ExerciseContext.Provider value={[ exercises, setExercises ]}>
        <RouterProvider router={router} />
      </ExerciseContext.Provider>
    </div>
  );
}

export default App;
