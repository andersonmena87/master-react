import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Importar assets (recursos: Hojas de estilo, imagenes, fuentes)
import './assets/fonts/fontawesome-free-6.1.2-web/css/all.css';
// normalize quita estilos por defecto
import './assets/css/normalize.css';
import './assets/css/styles.css';
import './assets/css/responsive.css';

// Arrancar app de react
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
