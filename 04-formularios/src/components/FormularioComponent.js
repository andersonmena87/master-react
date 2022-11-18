import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({});
    const conseguirDatosFormulario = e => {
        //Evita que se envie el formulario y se recargue la pagina
        e.preventDefault();
        let datos = e.target;

        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            biografia: datos.biografia.value,
            enviar: true
        }
        setUsuario(usuario);
    }

    const cambiarDatos = e => {
        //Caputura el nombre del campo
        let name_input = e.target.name;


        //estado_previo es lo que tenía el objeto usuario anterior
        //Se retorna un objeto nuevo pasandole las propiedades del estado_previo: ...estado_previo
        //Se le asigna el nuevo valor a la propiedad modificada: [name_input]: e.target.value

        //Con return
        // setUsuario(estado_previo => {
        //     return {
        //         ...estado_previo,
        //         [name_input]: e.target.value
        //     }
        // })

        //Return abbreviado
        setUsuario(estado_previo => ({
            ...estado_previo,
            [name_input]: e.target.value
            })
        )


    }

    return (
        <div>
            <h1>Formularios en React</h1>
            {usuario.enviar &&
                <div className='label label-light'>
                    Mi nombre es {usuario.nombre} {usuario.apellido}, soy {usuario.genero}.
                    <br />
                    Mi historia es:
                    <div>
                        {
                            usuario.biografia.split('\n').map(
                                (bio) =>  <div>{bio}</div> 
                            )
                        }
                    </div>
                </div>
            }

            <form onSubmit={conseguirDatosFormulario}>
                <input name="nombre"
                    type="text"
                    placeholder='Nombre'
                    onChange={cambiarDatos}
                />
                <input
                    name="apellido"
                    type="text"
                    placeholder='Apellido'
                    onChange={cambiarDatos}
                />
                <select name="genero" onChange={cambiarDatos}>
                    <option value="">Seleccionar genero</option>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea name="biografia" placeholder='Biografia' onChange={cambiarDatos}>
                </textarea>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}
