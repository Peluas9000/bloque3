import React, { useState } from 'react';
function Termostato(props) {
    const [temperatura, setTemperatura] = useState(parseInt(props.temperaturaBase));
    const subirTemperatura = () => {
        setTemperatura(temperatura + 1);
    }
    const bajarTemperatura = () => {
        setTemperatura(temperatura - 1);
    }
   
    
    return (
        <div>
            <h2>Termostato</h2>
            <h3>Grados :{temperatura}</h3>
            <button onClick={subirTemperatura}>Subir temperatura</button>
            <button onClick={bajarTemperatura}>Bajar temperatura</button>
        </div>
    );
}


export default Termostato;