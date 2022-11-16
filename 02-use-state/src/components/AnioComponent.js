import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AnioComponent = ({ anioActual }) => {

    const [anio, setAnio] = useState(anioActual);
    const anterior = e => setAnio(anio - 1);
    const proximo = e => setAnio(anio + 1);
    const ingresarAnio = (e, value) => {
        let nAnio = parseInt(value);
        if(Number.isInteger(nAnio)){
            nAnio = anioActual;    
        }

        setAnio(nAnio)
    };

    return (
        <div>
            <h1>Componente: Año</h1>

            <strong>Año: {anio}</strong>
            <div>
                <input type="number" placeholder='Ingresar año' onChange={ e => ingresarAnio(e, e.target.value)} value={anio} />
            </div>
            <p>
                <button onClick={ anterior }>Anterior</button>
                <button onClick= { proximo }>Próximo</button>
            </p>
        </div>
    )
}

AnioComponent.prototypes = {
    anioActual: PropTypes.number.isRequired,
}