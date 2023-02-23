import React from 'react';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>Bienvenido a mi blog</h1>
      <p>Blog desarrollado con el MERN Stack (Mongo, Express, React y NodeJs)</p>
      <Link to='/articulos' className='button'>Ver articulos</Link>
    </div>
  )
}
