import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { SideBar } from './SideBar';

export const PrivateLayout = () => {
  return (
    <>
      {/* LAYOUT */}

      {/* Cabecera y navegacion */}
      <Header />

      {/* Contenido principal */}
      <section className="layout__content">
        {/* Renderiza las rutas  */}
        <Outlet />
      </section>

      {/* Barra lateral */}
      <SideBar />
    </>
  )
}
