import { useEffect, useState } from 'react';
import { Ajax } from '../../helpers/Ajax';
import { Global } from '../../helpers/Global';
import { ListadoArticulos } from './ListadoArticulos';

export const Articulos = () => {

  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    let { datos, cargando } = await Ajax(Global.urlApi + 'articulos');

    if (datos.status === 'success') {
      setArticulos(datos.articulos);
    }

    setCargando(cargando);
  }

  return (
    <>
      {cargando ?
          <h1>Cargando..</h1>
        :
          articulos.length > 0 ? <ListadoArticulos articulos={ articulos } setArticulos={ setArticulos } />: <h1>No hay artículos</h1>
      }
    </>
  )
}
