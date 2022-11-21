import { useState } from "react";
import { BuscadorComponent } from "./components/BuscadorComponent";
import { CrearComponent } from "./components/CrearComponent";
import { ListadoComponent } from "./components/ListadoComponent";

function App() {

    const [pelisState, setPelisState] = useState();

    return (
        <div className="layout">
            {/* Cabecera */}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                <h1>Mis pelis</h1>
            </header>

            {/* Barra de navagacion */}
            <nav className="nav">
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Peliculas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>

            {/* Contenido principal */}
            <section className="content">
                {/* Aqui van las peliculas */}
                <ListadoComponent pelisState={ pelisState } setPelisState = { setPelisState } />
            </section>

            {/* Barra lateral */}
            <aside className="lateral">
                <BuscadorComponent />

                <CrearComponent setPelisState = { setPelisState } />
            </aside>

            {/* Pie de pagina */}
            <footer className="footer">
                &copy; Master en Javascript ES12 y TypeScript - <a href="/#">andersonpelisweb.com</a>
            </footer>
        </div>
    );
}

export default App;
