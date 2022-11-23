import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <span>A</span>
        <h2>nderson Mena WEB</h2>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to='/inicio' className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/portafolio' className={({isActive}) => isActive ? 'active' : ''}>Portafolio</NavLink>
          </li>
          <li>
            <NavLink to='/servicios' className={({isActive}) => isActive ? 'active' : ''}>Servicios</NavLink>
          </li>
          <li>
            <NavLink to='/curriculum' className={({isActive}) => isActive ? 'active' : ''}>Curriculum</NavLink>
          </li>
          <li>
            <NavLink to='/contacto' className={({isActive}) => isActive ? 'active' : ''}>Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
