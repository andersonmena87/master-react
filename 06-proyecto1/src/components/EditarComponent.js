import React from 'react'
import { GuardarArrayEnStorage, LimpiarDatosStorage } from '../helpers/LocalStorage';

export const EditarComponent = ({peli, conseguirPeliculas, setEditar, setPelisState}) => {
    const titulo_componente = "Editar pelicula";

    const guardarEdicion = (e ,id) => {
        e.preventDefault();

        //Conseguir el target del evento
        let target = e.target;

        //Buscar el indice del objeto de la pelicula a actualizar
        const pelis_almacenadas = conseguirPeliculas('');
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        //Crear objeto con ese indice
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,
        }

        //Actualizar elemento con ese indice
        pelis_almacenadas[indice] = peli_actualizada;

        //Guardar el nuevo array de objetos en el localStorage
        GuardarArrayEnStorage('pelis', pelis_almacenadas);

        //Actualizr estados
        setPelisState(pelis_almacenadas);

        setEditar(0);
    }

    return (
        <div className="edit_form">
            <h3 className='title'>
                {titulo_componente}
            </h3>
            <form onSubmit={e => guardarEdicion(e, peli.id)}>
                <input type="text" 
                    name="titulo"
                    className='titulo_editado'
                    defaultValue={peli.titulo}
                />
                <textarea type='text'
                    name='descripcion'
                    defaultValue={peli.descripcion}
                    className='descripcion_editada'
                />
                <button type='submit'>Actualizar</button>
            </form>
        </div>
    )
}
