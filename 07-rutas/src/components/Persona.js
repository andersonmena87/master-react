import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

    const parametros = useParams();
    const navegar = useNavigate();

    // Imprime los un objeto con los parametros
    console.log(parametros);

    // const { nombre , apellido} = parametros;

    // Asignando valores por defecto
    const {nombre = 'Batman', apellido = 'Gothan'} = useParams();

    console.log('nombre ->', nombre);

    const enviar = (e) => {
        e.preventDefault();
        const target = e.target;
        let nombre = target.nombre.value;
        let apellido = target.apellido.value;

        if(nombre.length === 0 && apellido.length === 0){
            navegar('/inicio');
            return;
        }
        navegar(`/persona/${nombre}/${apellido}`);
    }

    return (
        <div>
            <h1>Persona: {nombre} {apellido}</h1>
            <p>Esta el la página persona</p>
            <form onSubmit={ enviar }>
                <input type='text' name='nombre' />
                <input type='text' name='apellido' />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}
