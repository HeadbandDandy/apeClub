import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

export const ExerciseContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
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