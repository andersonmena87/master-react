import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Global } from '../../helpers/Global';

export const ListadoArticulos = ({ articulos }) => {
  const navegar = useNavigate();

  const editar = (e, articulo) => {
    console.log(articulo);
    navegar('/editar-articulo/' + articulo._id);
  }
  return (
    articulos.map(articulo => {
      return (
        <article key={articulo._id} className="articulo-item">
          <div className='mascara'>
            {articulo.imagen &&
              <img src={Global.urlApi + 'imagen/' + articulo.imagen} />
            }
          </div>
          <div className='datos'>
            <h3 className="title">
              {articulo.titulo}
            </h3>
            <pre className="description">
                {articulo.contenido}
            </pre>
            <button className="edit" onClick={e => editar(e, articulo)}>Editar</button>
            <button className="delete">Borrar</button>
          </div>
        </article>
      );
    })
  )
}
