import React from 'react'

export const ListadoArticulos = ({articulos}) => {
  const editar = (e, articulo) => {
    navegar('/articulos');
  }
  return (
    articulos.map(articulo => {
        return (
          <article key={articulo._id} className="articulo-item">
            <div className='mascara'>
              <img src='' />
            </div>
            <div className='datos'>
              <h3 className="title">
                {articulo.titulo}
              </h3>
              <p className="description">
                {
                  articulo.contenido.split('\n').map(
                    value => <div>{value}</div>
                  )
                }
              </p>

              <button className="edit" onClick={ e => editar(articulo)}>Editar</button>
              <button className="delete">Borrar</button>
            </div>
          </article>
        );
      })
  )
}
