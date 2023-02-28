import { useEffect, useState } from 'react';
import { Ajax } from '../../helpers/Ajax';
import { Global } from '../../helpers/Global';
import { ListadoArticulos } from './ListadoArticulos';
import { useParams } from 'react-router-dom';

export const Articulo = () => {

  const [articulo, setArticulo] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    let { datos, cargando } = await Ajax(Global.urlApi + 'articulo/' + id);

    if (datos.status === 'success') {
      setArticulo(datos.articulo);
    }

    setCargando(cargando);
  }

  return (
    <>
      {cargando ?
        <h1>Cargando..</h1>
        :
        Object.hasOwn(articulo, '_id')
          ?
          (
            <div className='card'>
              <div className='mascara'>
                {articulo.imagen &&
                  <img src={Global.urlApi + 'imagen/' + articulo.imagen} />
                }
              </div>
              <h1>{articulo.titulo}</h1>
              <span>{articulo.fecha}</span>
              <pre>{articulo.contenido}</pre>
            </div>
          )
          :
          <h1>No hay artículos</h1>
      }
    </>
  )
}
