import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ajax } from '../../helpers/Ajax';
import { Global } from '../../helpers/Global';
import { ListadoArticulos } from './ListadoArticulos';

export const Inicio = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    let { datos, cargando } = await Ajax(Global.urlApi + 'articulos/2');

    if (datos.status === 'success') {
      setArticulos(datos.articulos);
    }

    setCargando(cargando);
  }

  return (
    <div className='card'>
      <h1>Bienvenido a mi blog</h1>
      <p>Blog desarrollado con el MERN Stack (Mongo, Express, React y NodeJs)</p>
      <h2>Últimos articulos agregados</h2>
      {cargando ?
          <h1>Cargando..</h1>
        :
          articulos.length > 0 ? <ListadoArticulos articulos={ articulos } setArticulos={ setArticulos } />: <h1>No hay artículos</h1>
      }
      <br />
      <Link to='/articulos' className='button'>Ver articulos</Link>
    </div>
  )
}
