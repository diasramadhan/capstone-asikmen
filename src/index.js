import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Style & Bootstrap
import './styles/style.scss';

// For Bootstrap functionality
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
