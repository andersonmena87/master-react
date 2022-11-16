import React, { useEffect } from 'react'

export const AvisoComponent = () => {
    useEffect(() => {
        // Se ejecuta cuando se monta el componente, se agrega [] como segundo parametor
        alert('Componnente AvisoComponent está montado!!');

        //Cuando se desmonta
        return () => {
            alert('Componente desmontado!!!');
        }
    }, [])

    return (
        <div>
            <h3>Saludos Batman!</h3>
            <button onClick={e => alert('Bienvenido!')}>Mostrar alerta</button>
        </div>
    )
}
