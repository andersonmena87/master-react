import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const endPointUsuarios = 'https://reqres.in/api/users?page=1';
    const [usuarios, setUsuarios]= useState([]);

    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                id: 7,
                email: "michael.lawson@reqres.in",
                first_name: "Michael",
                last_name: "Lawson",
                avatar: "https://reqres.in/img/faces/7-image.jpg"
                },
                {
                id: 8,
                email: "lindsay.ferguson@reqres.in",
                first_name: "Lindsay",
                last_name: "Ferguson",
                avatar: "https://reqres.in/img/faces/8-image.jpg"
                },
                {
                id: 9,
                email: "tobias.funke@reqres.in",
                first_name: "Tobias",
                last_name: "Funke",
                avatar: "https://reqres.in/img/faces/9-image.jpg"
                },
        ])
    }

    //Obtine los datos por promesa
    const getUsuariosAjaxPms = () => {
        fetch(endPointUsuarios)
        .then(respuesta => respuesta.json())
        .then(respuesta_final => {
            setUsuarios(respuesta_final.data);
        },
        error => {
            console.log('Error en petición: ' + error);
        })
        
    }

    //Obtine datos con async-await
    const getUsuariosAW = async() => {
        const peticion = await fetch(endPointUsuarios);
        const {data} = await peticion.json();
        setUsuarios(data);
    }

    useEffect(() => {
        //getUsuariosEstaticos();
        //getUsuariosAjaxPms();
        getUsuariosAW();
    }, [])

    return (
        <div>
            <h2>Listado de usuarios via AJAX</h2>
            <ol>
            {
                usuarios.map((usuario) => {
                    return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
                })
            }
            </ol>
        </div>
    )
}
