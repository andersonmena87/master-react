import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Panel de control</h1>
        <p>Submenus anidados</p>
        <ul>
            <li>
                <NavLink to='inicio'>Inicio</NavLink>
            </li>
            <li>
                <NavLink to='crear-usuario'>Crear</NavLink>
            </li>
            <li>
                <NavLink to='gestionar-usuario'>Gestionar</NavLink>
            </li>
        </ul>
        {/* Carga de componentes */}
        <div>
            <Outlet />
        </div>
    </div>
  )
}
