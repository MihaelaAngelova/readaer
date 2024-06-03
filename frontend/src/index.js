import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

