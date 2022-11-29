import React, { useMemo, useState } from 'react'

export const Tareas = () => {
    const [tareas, setTareas] = useState([]);
    const [contador, setContador] = useState(100);

    const conseguirDatos = e => {
        e.preventDefault();

        let date = new Date();
        const target = e.target;
        const tarea = {
            id: date.getTime(),
            tarea: target.tarea.value,
            descripcion: target.descripcion.value
        }

        setTareas(tareas_almacenadas =>
            [
                ...tareas_almacenadas,
                tarea
            ]
        );
    }

    const borrarTarea = (id) => {
        console.log(id);
        let nuevas_tareas = tareas.filter(tarea => tarea.id !== id);
        setTareas(nuevas_tareas);
    }

    const sumar = e => {
        setContador(contador + 1);
    }

    const acumuladorContador = (contador) => {
        for(let i = 0; i <= contador; i++){
            console.log('--> imprimiendo acumulador....');
        }
    }

    // Recibe dos parametros funcion Anonima + dependencia del campo que lo va ha disparar
    // Solo se ejecutará cuando el campo contador cambie 
    const memoAcumulador = useMemo(() => acumuladorContador(contador), [contador]);

    return (
        <div>
            <h1>Tareas</h1>

            <h2>Contador manual de tareas</h2>
            <h3>Contador: {contador}</h3>
            <h4>Acumulador: {memoAcumulador}</h4>
            <button onClick={sumar}>Sumar</button>

            <form onSubmit={conseguirDatos}>
                <input type='text' name='tarea' placeholder='Tarea' /><br />
                <textarea type='text' name='descripcion' placeholder='Descripción'></textarea><br />
                <button type='submit'>Guardar</button>
            </form>
            <h1>Lista de tareas</h1>

            {tareas.length > 0 ?
                <ul>
                    {tareas.map(tarea => {
                        return (
                            <li key={tarea.id}>
                                <h3>{tarea.tarea}</h3>
                                <p>{tarea.descripcion}</p>
                                <button onClick={e => borrarTarea(tarea.id)}>
                                    Borrar tarea
                                </button>
                            </li>
                        )
                    })
                    }
                </ul>
                :
                <p><strong>No se han cargado tareas</strong></p>}
            <hr />
        </div>
    )
}
