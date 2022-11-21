
function App() {
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
            <article className="peli-item">
                <h3 className="title">
                    Desarrollo web
                </h3>
                <p className="description">andersonWeb</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="peli-item">
                <h3 className="title">
                    Desarrollo web
                </h3>
                <p className="description">andersonWeb</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            
            <article className="peli-item">
                <h3 className="title">
                    Desarrollo web
                </h3>
                <p className="description">andersonWeb</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="peli-item">
                <h3 className="title">
                    Desarrollo web
                </h3>
                <p className="description">andersonWeb</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
        </section>

        {/* Barra lateral */}
        <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form>
                    <input type="text" />
                    <button>Buscar</button>
                </form>
            </div>

            <div className="add">
                <h3 className="title">Añadir pelicula</h3>
                <form>
                    <input type="text" placeholder="Título"/>
                    <textarea placeholder="Descripción"></textarea>
                    <button type="submit">Guardar</button>
                </form>
            </div>
        </aside>

        {/* Pie de pagina */}
        <footer className="footer">
            &copy; Master en Javascript ES12 y TypeScript - <a href="/#">andersonpelisweb.com</a>
        </footer>
    </div>
  );
}

export default App;
