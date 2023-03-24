import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const PublicLayout = () => {
  return (
    <>
        {/* LAYOUT */}
        <Header />

        {/* Contenido principal */}
        <section className="layout__content">
           {/* Renderiza las rutas  */}
          <Outlet />
        </section>

    </>
  )
}
