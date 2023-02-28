import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Ajax } from '../../helpers/Ajax';
import { Global } from '../../helpers/Global';
import { ListadoArticulos } from './ListadoArticulos';

export const Busqueda = () => {
  const { palabra } = useParams();
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, [palabra]);

  const conseguirArticulos = async () => {
    if(palabra){
      let { datos, cargando } = await Ajax(Global.urlApi + 'buscar/' + palabra);

      if (datos.status === 'success') {
        setArticulos(datos.articulos);
      }else{
        setArticulos([]);
      }
  
      setCargando(cargando);
    }else{
      setCargando(false);
    }
    
  }

  return (
    <div>
      <h1>Resultado con la palabra {palabra}</h1>
      {cargando ?
          <h1>Cargando..</h1>
        :
          articulos.length > 0 
            ? 
              <ListadoArticulos articulos={ articulos } setArticulos={ setArticulos } />
            : 
              <h1>No hay artículos</h1>
      }
    </div>
  )
}
