import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Ajax } from '../../helpers/Ajax';
import { Global } from '../../helpers/Global';

export const ListadoArticulos = ({ articulos, setArticulos }) => {
  const navegar = useNavigate();

  const editar = (id) => {
    navegar('/editar-articulo/' + id);
  }

  const eliminar = async (articulo) => {
    const { _id, titulo } = articulo;
    let confirmacion = confirm(`Esta seguro que desea eliminar el articulo ${titulo}`)
    if(confirmacion){
      const { datos } = await Ajax(Global.urlApi + 'articulo/' + _id, 'DELETE');
      
      if(datos.status === 'success'){
        // FORMA DE BORRAR USASANDO ASSING Y SPLICE
        // let copiaArticulos = Object.assign([], articulos);
        
        // const index = copiaArticulos.findIndex( articulo => articulo._id === _id);
        // let articuloEliminado = copiaArticulos.splice(index, 1);
        
        // if(articuloEliminado.length > 0){
        //   setArticulos(copiaArticulos);
        // }

        let arituclosActualizados = articulos.filter(articulo => articulo._id !== _id);
        setArticulos(arituclosActualizados);
        
      }

      alert(datos.mensaje);
    }
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
              <Link to={'/articulo/'+articulo._id}>{articulo.titulo}</Link>
            </h3>
            <pre className="description">
                {articulo.contenido}
            </pre>
            <button className="edit" onClick={() => editar( articulo._id )}>Editar</button>
            <button className="delete" onClick={() => eliminar( articulo )}>Borrar</button>
          </div>
        </article>
      );
    })
  )
}
