import React from 'react';
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Persona } from '../components/Persona';
import { Error } from '../components/Error';
import { PanelControl } from '../components/PanelControl';
import { Inicio as InicioPanel} from '../components/panel/Inicio';
import { Crear } from '../components/panel/Crear';
import { Gestionar } from '../components/panel/Gestionar';

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>

            <header>
                <h1>Cabecera</h1>
            </header>
            <hr />
            <div className='menu'>
                <ul>
                    <li>
                        <NavLink
                            to='/inicio'
                            className={(datosNavegacion) => {
                                let { isActive } = datosNavegacion;
                                return isActive ? 'activo' : ''
                            }}
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/articulos'
                            className={({ isActive }) => isActive ? 'activo' : ''}
                        >
                            Articulos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/contacto'
                            className={({ isActive }) => isActive ? 'activo' : ''}
                        >
                            Contacto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/persona'
                            className={({ isActive }) => isActive ? 'activo' : ''}
                        >
                            Persona
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/panel'
                            className={({ isActive }) => isActive ? 'activo' : ''}
                        >
                            Panel de control
                        </NavLink>
                    </li>
                </ul>
            </div>
            <hr />
            <section className='layout'>
                {/* Cargar el componente */}
                {/* Aqui se carga el componente que coincide con el path */}
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/articulos' element={<Articulos />} />
                    <Route path='/contacto' element={<Contacto />} />

                    {/* Para pasar parametros se agrega /:nombreParametro */}
                    <Route path='/persona/:nombre/:apellido' element={<Persona />} />
                    <Route path='/persona/:nombre' element={<Persona />} />
                    <Route path='/persona' element={<Persona />} />
                    {/*Cualquier ruta que no este definida*/}

                    {/*Se puede colocar el html dentro de la propiedad element*/}
                    {/* <Route path='*' element={
                <>
                    <h1>Error 404</h1>
                    <p>La ruta ingresada no existe!</p>
                </>
            } /> */}
                    <Route path='/redirigir' element={<Navigate to='/persona/Anderson/Mena' />} />

                    {/* Rutas anidadas o submenus */}
                    <Route path='/panel/*' element={<PanelControl />} >
                        {/* index indica que es la pagina por defecto, no es necesario poner el path */}
                        <Route index element={<InicioPanel />} />
                        <Route path='inicio' element={<InicioPanel />} />
                        <Route path='crear-usuario' element={<Crear />} />
                        <Route path='gestionar-usuario' element={<Gestionar />} />
                        <Route path='*' element={<Error />} />
                    </Route>
                    <Route path='*' element={<Error />} />
                </Routes>
            </section>
            <hr />
            <footer>
                Pie de página
            </footer>

        </BrowserRouter>
    )
}
