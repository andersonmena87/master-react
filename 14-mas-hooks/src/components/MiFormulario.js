import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const MiFormulario = () => {
    const {formulario, enviar, cambiado} = useForm();
    return (
        <div>
            <h1>Formualario</h1>
            <p>Formulario para guardar un curso</p>
            <p>Curso guardado: {formulario.titulo}</p>
            <pre className='codigo'>{JSON.stringify(formulario)}</pre>

            <form onSubmit={enviar} className='mi-formulario'>
                <input type='text' name='titulo' onChange={cambiado} placeholder='Título' />
                <input type='number' name='anio' onChange={cambiado} placeholder='Año de publicación' />
                <textarea name='descripcion' onChange={cambiado} placeholder='Descripción' />
                <input type='text' name='autor' onChange={cambiado} placeholder='Autor' />
                <input type='email' name='email' onChange={cambiado} placeholder='Correo de contacto' />

                <input type='submit' value='Enviar' />
            </form>
        </div>
    )
}
