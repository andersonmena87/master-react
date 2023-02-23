import React from 'react'

export const Editar = ({articulo}) => {
  const { formulario, enviar } = useForm();
  const [cargando, setCargando] = useState(false);
  const navegar = useNavigate();

  useEffect(() => {
    if(Object.hasOwn(formulario, '_id')){
      guardarArticulo();
    }
  }, [formulario]);

  const guardarArticulo = async () => {
    let { datos, cargando } = await Ajax(Global.urlApi + 'crear/' + formulario["_id"], 'PUT', formulario);

    if (datos.status === 'success') {
      alert('Articulo actualizado!');
    }

    setCargando(cargando);
    navegar('/articulos');
  }

  return (
    <div>
      <h1>Editar articulo</h1>
      {!cargando && 
        <form onSubmit={enviar} className='mi-formulario'>
        <input type='hidden' name='_id' value={articulo._id}/>
        <input name='titulo' placeholder='Titulo' value={articulo.titulo}/>
        <textarea name='contenido' placeholder='contenido' value={articulo.contenido}/>
        <input type='submit' value='Enviar' />
      </form>
      }
    </div>
  )
}
