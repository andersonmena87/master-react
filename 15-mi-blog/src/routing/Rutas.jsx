import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { Nav } from '../components/layout/Nav';
import { Sidebar } from '../components/layout/Sidebar';
import { Articulos } from '../components/pages/Articulos';
import { Busqueda } from '../components/pages/Busqueda';
import { Crear } from '../components/pages/Crear';
import { Editar } from '../components/pages/Editar';
import { Inicio } from '../components/pages/Inicio';

export const Rutas = () => {

    return (
        <BrowserRouter>
            {/* LAYOUT */}
            <Header />
            <Nav />
            {/* CONTENIDO CENTRAL Y RUTAS */}
            <section className='content'>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/articulos' element={<Articulos />} />
                    <Route path='/crear-articulo' element={<Crear />} />
                    <Route path='/editar-articulo/:id' element={<Editar />} />
                    <Route path='/buscar/:palabra' element={<Busqueda />} />
                    <Route path='*' element={
                        <div className='card'>
                            Error 404 no existe la página ingresada
                        </div>
                    } />
                </Routes>
            </section>
            <Sidebar />
            <Footer />
        </BrowserRouter>
    )
}