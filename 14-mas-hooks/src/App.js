import './App.css';
import { MiComponente } from './components/MiComponente';
import { PruebaHookCustom } from './components/PruebaHookCustom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PruebaHookCustom />
        <hr />
        <MiComponente />
      </header>
    </div>
  );
}

export default App;
