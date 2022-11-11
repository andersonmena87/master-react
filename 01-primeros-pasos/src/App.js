import logo from './logo.svg';
import './App.css';
import MiPrimerCoponente from './components/MiPrimerComponente'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/*Comentario dentro del html de react */}
        <MiPrimerCoponente />
      </header>
    </div>
  );
}

export default App;
