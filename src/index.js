import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Style & Bootstrap
import './styles/style.scss';

// For Bootstrap functionality
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
