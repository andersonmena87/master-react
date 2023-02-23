import React from 'react'

export const Sidebar = () => {
  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form>
          <input type="text" />
          <button>Buscar</button>
        </form>
      </div>

      {/* <div className="add">
        <h3 className="title">Añadir pelicula</h3>
        <form>
          <input type="text" placeholder="Título" />
          <textarea placeholder="Descripción"></textarea>
          <button type="submit">Guardar</button>
        </form>
      </div> */}
    </aside>
  )
}
