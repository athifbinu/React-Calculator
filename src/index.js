import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Generel from './Components/Generel'
import './Components/Generel.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Generel/>

  </React.StrictMode>
);

