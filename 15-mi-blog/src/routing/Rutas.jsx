import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Nav } from '../components/layout/Nav';
import { Articulos } from '../components/pages/Articulos';
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
                </Routes>
            </section>
        </BrowserRouter>
    )
}