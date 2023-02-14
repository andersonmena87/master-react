import './App.css';
import { MiComponente } from './components/MiComponente';
import { MiFormulario } from './components/MiFormulario';
import { PruebaHookCustom } from './components/PruebaHookCustom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
