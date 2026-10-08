import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Termostato from './components/Termostato';
import reportWebVitals from './reportWebVitals';
import Contador from './components/Contador';
import EmpleadosOficios from './components/EmpleadosOficios';
import HospitalesMultiple from './components/HospitalesMultiple';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div style={{margin: "auto", width: "50%"}}>
        <HospitalesMultiple/>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
