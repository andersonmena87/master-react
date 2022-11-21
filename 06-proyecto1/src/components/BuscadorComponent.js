import React, { useState } from 'react';
import { ObtenerDatosStorage } from '../helpers/LocalStorage';

export const BuscadorComponent = ({pelisState, setPelisState}) => {

    const [busqueda, setBusqueda] = useState('');
    const [noEncontrado, setNoEncontrado] = useState(false);

    const buscarPeli = (e) => {
        // Crear estado y actualizarlo
        setBusqueda(e.target.value);
        
        //Filtrar para buscar
        let pelis_encontradas = pelisState.filter(peli =>{
            return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
        })

        if(busqueda.length <= 1 || pelis_encontradas.length === 0){
            pelis_encontradas = ObtenerDatosStorage('pelis');
            setNoEncontrado(true);
        }else{
            setNoEncontrado(false);
        }
        
        //Actualizar estado del listado principal con lo que he logrado filtrar
        setPelisState(pelis_encontradas);

    }

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            {(noEncontrado && busqueda.length > 1) && 
                <span className='no-encontrado'>No se ha encontrado coincidecia!</span>
            }
            <form>
                <input type="text"
                    id='search_field'
                    name='busqueda'
                    autoComplete='off'
                    value={busqueda}
                    onChange={buscarPeli}
                />
                <button id='search'>Buscar</button>
            </form>
        </div>
    )
}
