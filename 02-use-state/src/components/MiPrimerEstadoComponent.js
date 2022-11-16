import React, { useState } from 'react';

export const MiPrimerEstadoComponent = () => {
    /*Problematica: de esta forma no funciona el cambio de nombre
    let nombre = 'Batman';
    const cambiarNombre = e => nombre = 'Superman';
    */

    // Se debe usar useState
    //Destructurar el useState
    const [nombre, setNombre] = useState('Superman');
    const cambiarNombre = (e, nombreFijo) => setNombre(nombreFijo);

    return (
        <div>
            <h3>Componente: Mi primer Estado</h3>
            <strong className={nombre.length > 4 ? 'verde' : 'rojo' }>{nombre}</strong>
            <p>
                <button onClick={e => cambiarNombre(e, 'Batman')}>Cambiar nombre por batman</button>
            </p>
            <input type="text" onChange={ e => cambiarNombre(e, e.target.value)} placeholder='Cambiar nombre' />
        </div>
    )
}
