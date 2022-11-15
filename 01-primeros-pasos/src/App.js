import logo from './logo.svg'
import './App.css'
import MiPrimerCoponente from './components/MiPrimerComponente'
import { SegundoComponente } from './components/SegundoComponente'
import { TercerComponente } from './components/TercerComponente'
import { CuartoComponente } from './components/CuartoComponente'

function App() {

  const otrosDatos = {
    altura: "1.74 m",
    peso: "78 kg"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/*Comentario dentro del html de react */}
        <div className="componentes">
          <hr />
          <CuartoComponente />
          <hr />
          <TercerComponente nombre="Anderson" apellidos="Mena Serna" otros={otrosDatos} />
          <hr />
          <SegundoComponente />
          <hr />
          <MiPrimerCoponente />
        </div>
      </header>
    </div>
  )
}

export default App
