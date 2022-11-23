import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {
    const { id } = useParams();
    const [proyecto, setProyecto] = useState({});

    useEffect(() => {
        let index = trabajos.findIndex(trabajo => trabajo.id === id);
        setProyecto(trabajos[index]);
    }, [id])

    return (
        <div className='page page-work'>
            <div className='mask'>
                <img src={`/images/${proyecto.id}.png`} alt={proyecto.id} />
            </div>
            <h1 className='heading'>{proyecto.nombre}</h1>
            <p>{proyecto.tecnologias}</p>
            <p>{proyecto.descripcion}</p>
            <a href={`https://${proyecto.url}`} target='blank'>Ir al proyecto</a>
        </div>
    )
}
