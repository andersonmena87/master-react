import './App.css';
import { Gestion } from './components/Gestion';
import { Tareas } from './components/Tareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tareas />
        <Gestion />
      </header>
    </div>
  );
}

export default App;
