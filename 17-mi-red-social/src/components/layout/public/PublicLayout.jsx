import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Header } from './Header';

export const PublicLayout = () => {

  const { auth } = useAuth();

  return (
    <>
      {/* LAYOUT */}
      <Header />

      {/* Contenido principal */}
      <section className="layout__content">
        {/* Renderiza las rutas  */}

        {/* Control de usuario en sesión: si auth._id es null, permite entrar en la página de loguin
              de lo contrario se redirecciona a Social
           */}
        {!auth._id
          ?
          <Outlet />
          :
          <Navigate to='/social' />
        }

      </section>

    </>
  )
}
