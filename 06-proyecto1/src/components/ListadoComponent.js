import React, { useEffect, useState } from 'react'
import { ObtenerDatosStorage } from '../helpers/LocalStorage';

export const ListadoComponent = ({pelisState, setPelisState}) => {

    //Poner useState y useEffect siempre al principio por buenas practicas
    //const [pelisState, setPelisState] = useState([]);

    useEffect(() => {
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let pelis = ObtenerDatosStorage('pelis');
        setPelisState(pelis);
    }

    return (
        <>
            {pelisState && pelisState.length > 0 ?
                pelisState.map(peli => {
                    return (<article key={peli.id} className="peli-item">
                        <h3 className="title">
                            {peli.titulo}
                        </h3>
                        <p className="description">
                            {peli.descripcion}
                        </p>
                        <button className="edit">Editar</button>
                        <button className="delete">Borrar</button>
                    </article>)
                })
                : <h2>No hay peliculas para mostrar</h2>
            }
        </>
    )
}
