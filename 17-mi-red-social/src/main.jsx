import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Importar assets (recursos: Hojas de estilo, imagenes, fuentes)
import './assets/fonts/fontawesome-free-6.1.2-web/css/all.css';
// normalize quita estilos por defecto
import './assets/css/normalize.css';
import './assets/css/styles.css';
import './assets/css/responsive.css';

// Cargar configuración react time ago
import TimeAgo from 'javascript-time-ago';
import es from 'javascript-time-ago/locale/es.json';

// Pone el idioma de la librería en español por defecto
TimeAgo.addDefaultLocale(es);
TimeAgo.addLocale(es);

// Arrancar app de react
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
