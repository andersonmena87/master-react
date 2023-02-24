import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const navegar = useNavigate();
  const [buscar, setBuscar] = useState("");

  const hacerBusqueda = (e) => {
    e.preventDefault();
    const palabra = e.target.buscar.value;
    
    //EL SEGUNDO PARAMETRO REPLACE ES PARA ASEGURAR QUE LA RUTA SE ESTABLEZCA OBLIGATORIAMENTE
    navegar('/buscar/'+palabra, {replace: true});
  }

  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form onSubmit={ hacerBusqueda }>
          <input type="text" name='buscar' />
          <button type='submit'>Buscar</button>
        </form>
      </div>
    </aside>
  )
}
