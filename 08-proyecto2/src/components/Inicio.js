import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Anderson Mena</strong> y soy desarrollador Web en colombia,
        y ofrezco mis servicios de programación y <strong>desarrollo en proyectos web con Angular o React.</strong>
      </h1>

      <h2 className='title'>
        Te ayudo a crear tu sitio web.
        <Link to='/contacto'>Contacta conmigo</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
        <ListadoTrabajos limite='2' />
      </section>
    </div>
  )
}
