import { useCallback, useState } from 'react';
import { Empleados } from './Empleados';

export const Gestion = () => {

    const [nombre, setNombre] = useState();
    const [pagina, setPagina] = useState(1);

    const asignarNombre = e => {
        setNombre(e.target.value);
    }

    //Hook useCallback: memoriza la función para no ser llamada cada vez que cambie algo en el componente Gestion
    //Solo se ejeuctará cuando la pagina se modifique
    const mensaje = useCallback(() => { console.log('Mensaje ejecutado desde componente empleado')}, []);

    return (
        <div>
            <h1>Nombre del gestor: {nombre}</h1>
            <h2>Listado de empleados:</h2>
            <p>Los usuarios asignados a {nombre} vienen de jsonplaceholder</p>
            <input
                type='text'
                placeholder='Ingresa tu nombre de gestor'
                onChange={ asignarNombre }
            />
            <button onClick={() => setPagina(1)}>Página 1</button>
            <button onClick={() => setPagina(2)}>Página 2</button>
            <p>Mostrando página: {pagina}</p>
            <Empleados page={pagina} mensaje={mensaje}/>
        </div>
    )
}
