import React from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebaHookCustom = () => {
    const { estado , mayuscula, minuscula, concatenar } = useMayus('Spiderman');

    return (
        <div>
            <h1>Prueba hook personalizados</h1>
            <p><strong>Texto por defecto: </strong> {estado}</p>
            <button onClick={ mayuscula }>Convertir a mayusculas</button>
            <button onClick={ minuscula }>Convertir a minuscula</button>
            <button onClick={  e => concatenar(' - Porbando hook useMayus') }>Concatenar</button>
        </div>
    )
}
