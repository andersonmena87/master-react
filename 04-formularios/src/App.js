import logo from './logo.svg';
import './App.css';
import { FormularioComponent } from './components/FormularioComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <hr />
        <FormularioComponent />
      </header>
    </div>
  );
}

export default App;
