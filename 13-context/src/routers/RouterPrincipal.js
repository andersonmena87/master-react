/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
} from 'react-router-dom'
import { Acerca } from '../components/Acerca'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Inicio } from '../components/Inicio'
import { Login } from '../components/Login'
import { PruebaContext } from '../context/PruebaContext'

export const RouterPrincipal = () => {

  const { usuario, setUsuario } = useContext(PruebaContext);

  return (
    <BrowserRouter>
      <header>
        {/* MENÚ DE NAVEGACIÓ */}
        <nav>
            <div className='logo'>
                <h1>Aprendiendo useContext</h1>
            </div>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/articulos">Articulos</NavLink>
            </li>
            <li>
              <NavLink to="/acerca-de">Acerca de</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
            {
              usuario.hasOwnProperty('userName') && usuario.userName !== null ?  
                <>
                  <li>
                    <NavLink to="/">{usuario.userName}</NavLink>
                  </li>
                  <li>
                    <a href='#' onClick={
                      e => {
                        e.preventDefault();
                        setUsuario({});  
                      }
                    }>Cerrar sesión</a>
                  </li>
                </>
              :
                <NavLink to="/login">Login</NavLink>
            }
          </ul>
        </nav>
      </header>

      <section className="content">
        {/* CONFIGURAR RUTAS */}
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/inicio" element={<Inicio />}></Route>
          <Route path="/articulos" element={<Articulos />}></Route>
          <Route path="/acerca-de" element={<Acerca />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="*"
            element={
              <div>
                <h1>ERROR ESTA PÁGINA NO EXISTE</h1>
              </div>
            }
          ></Route>
        </Routes>
      </section>
    </BrowserRouter>
  )
}
