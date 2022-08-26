// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// React imports
import React from 'react';

// React DOM imports
import ReactDOM from 'react-dom/client';

// Styling imports
import './styles/main.css';

// Component imports
import App from './App';

// Package imports
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


