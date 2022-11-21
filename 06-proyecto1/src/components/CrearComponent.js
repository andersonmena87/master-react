import React, { useState } from 'react'
import { GuardarElementoEnStorage } from '../helpers/LocalStorage';

export const CrearComponent = ({ setPelisState  }) => {
    const tituloComponente = 'Añadir pelicula';

    const [peliState, setPeliState ] = useState({
        id: 0,
        titulo: '',
        descripcion: ''
    });

    const {titulo, descripcion } = peliState;

    const conseguirDatosForm = e => {
        //Evita que el formulario guarde y recargue la página
        e.preventDefault();

        // Conseguir datos formulario
        let target = e.target;
        let titulo = target.titulo.value
        let descripcion = target.descripcion.value; 
        
        // Crear objeto de pelicual a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        // Guardar estado
        setPeliState(peli);

        //Actualizar el estado del listado principal
        setPelisState(elementos => {
            return [...elementos, peli]
        });

        // Guardar en el almacenamiento local
        GuardarElementoEnStorage('pelis', peli);
    }

    

    return (
        <div className="add">
            <h3 className="title">{ tituloComponente }</h3>

            <strong>
                {(titulo && descripcion) && 
                    `Has creado la pelicual ${titulo}`
                }
            </strong>
            
            <form onSubmit={ conseguirDatosForm }>
                <input
                    type="text"
                    placeholder="Título"
                    name="titulo"
                />
                <textarea
                    placeholder="Descripción"
                    name="descripcion"
                ></textarea>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}
