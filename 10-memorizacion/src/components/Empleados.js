import React, { useEffect, useState } from 'react'

//React.memo evita que el componente se este cargando y solo lo hará si tiene un cambio
export const Empleados = React.memo(
    ({ page }) => {
        const [empleados, setEmpleados] = useState([]);

        useEffect(() => {
            conseguirEmpleados(page);
        }, [page])

        const conseguirEmpleados = async (page) => {
            let url = `https://reqres.in/api/users?page=${page}`;
            const peticion = await fetch(url);
            const { data: listEmpleados } = await peticion.json();
            setEmpleados(listEmpleados);
        }

        return (
            <div>
                <h1>Empleados</h1>
                <ul>
                    {empleados.length > 0 &&
                        empleados.map(empleado => {
                            return <li key={empleado.id}>{empleado.first_name} {empleado.last_name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
)

