import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Initialisera axe-core endast i utvecklingsmiljö
if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
