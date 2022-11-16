import logo from './logo.svg';
import './App.css';
import { MiPrimerEstadoComponent } from './components/MiPrimerEstadoComponent';
import { AnioComponent } from './components/AnioComponent';

function App() {
  const anioActual = new Date().getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El estado en React - Hook useState</h1>
        <hr />
        <MiPrimerEstadoComponent />
        <hr />
        <AnioComponent anioActual={anioActual}/>
      </header>
    </div>
  );
}

export default App;
