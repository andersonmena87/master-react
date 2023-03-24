import { Nav } from './Nav';

export const Header = () => {
    return (
        <header className="layout__navbar">

            <div className="navbar__header">
                <a href="#" className="navbar__title">MIREDSOCIAL</a>
            </div>

            <Nav />

        </header>
    )
}
