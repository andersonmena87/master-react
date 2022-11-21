import React, { useEffect, useState } from 'react'
import { BorrarElementoStorage, ObtenerDatosStorage } from '../helpers/LocalStorage';

export const ListadoComponent = ({pelisState, setPelisState}) => {

    //Poner useState y useEffect siempre al principio por buenas practicas
    //const [pelisState, setPelisState] = useState([]);

    useEffect(() => {
        conseguirPeliculas();
    }, []);

    const clavePeliculas = 'pelis';

    const [editar , setEditar ] = useState(0);

    const conseguirPeliculas = () => {
        let pelis = ObtenerDatosStorage(clavePeliculas);
        setPelisState(pelis);
    }

    const borrarPeli = (id) => {
        let nuevas_pelis = BorrarElementoStorage(clavePeliculas, id);
        setPelisState(nuevas_pelis);
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
                        <button className="edit" onClick={ () => setEditar(peli.id) }>Editar</button>
                        <button className="delete" onClick={ () => borrarPeli(peli.id) }>Borrar</button>

                        {/* Aparece formulario para editar */}
                    </article>)
                })
                : <h2>No hay peliculas para mostrar</h2>
            }
        </>
    )
}
