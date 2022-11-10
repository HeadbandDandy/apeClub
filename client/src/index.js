import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/home';
import SignIn from './components/signIn';
import Exercises from './components/exercises';
import UpperBody from './components/upperbody';
import Register from './components/register';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

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
    path: '/upperbody',
    element: <UpperBody />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

/* <RouterProvider router={router} /> 
 0:"back"
2:"chest"
3:"lower arms"
4:"lower legs"
6:"shoulders"
7:"upper arms"
8:"upper legs"
*/