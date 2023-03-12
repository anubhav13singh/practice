import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context from './Context';

// import axios from 'axios';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Context/>
    

    </React.StrictMode>
);


