import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Header } from './Header';
import { SideBar } from './SideBar';

export const PrivateLayout = () => {

  const { auth, loading } = useAuth();

  if (loading) {
    return <h1>Cargando...</h1>
  } else {

    return (
      <>
        {/* LAYOUT */}

        {/* Cabecera y navegacion */}
        <Header />

        {/* Contenido principal */}
        <section className="layout__content">
          {/* Renderiza las rutas  */}

          {/* Control de sesión, si auth._id es diferente de null el usuario puede acceder a las rutas privadas
        de lo contrario se redirecciona a login */}
          {auth._id
            ?
            <Outlet />
            :
            <Navigate to='/login' />
          }

        </section>

        {/* Barra lateral */}
        <SideBar />
      </>
    )
  }
}
