import './App.css';
import { MiComponente } from './components/MiComponente';
import { MiFormulario } from './components/MiFormulario';
import { MiUsuario } from './components/MiUsuario';
import { PruebaHookCustom } from './components/PruebaHookCustom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MiUsuario />
        <hr />
        <MiFormulario />
        <hr />
        <PruebaHookCustom />
        <hr />
        <MiComponente />
      </header>
    </div>
  );
}

export default App;
