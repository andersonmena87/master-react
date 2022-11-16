import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState('Anderson');

    const [fecha, setFecha] = useState('24-12-1987');

    const [contador, setContador] = useState(0);

    const modificarUsaurio = e => setUsuario(e.target.value);

    const cambiarFecha = e => setFecha(Date.now().toLocaleString());

    //Se ejecuta al cargar o modificar un estado
    useEffect(() => {
        console.log('Se ha cargado el componente o modificado un estado');
    });

    //Solo se ejecuta el cargar el componente, se le manda como segundo parametro []
    useEffect( () => {
        console.log('----> Se ha cargado el componente!!');
    }, []);

    //Solo se ejecuta el cambiar el estado de usuario o la fecha
    useEffect( () => {
        setContador(contador+1);
        console.log('Has modificado el usuario!! ' + contador);
    }, [usuario, fecha]);

  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>
        <strong className={contador >= 10 ? 'label-green label' : 'label'}>{usuario}</strong>
        <strong>{fecha}</strong>
        <p>
            <input 
                type="text" 
                placeholder='Ingresar nombre' 
                onChange={ modificarUsaurio }
            />
            <button onClick={ cambiarFecha }>Cambiar fecha</button>
        </p>
        { contador >= 10 && 'Hemos superado los 10 cambios!!'}
        { usuario === 'Batman' && <AvisoComponent />}
    </div>
  )
}
