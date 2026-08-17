import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Formulario from './Formulario';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<App />} />
  <Route path="/mapeamento" element={<App />} />
  <Route path="/formulario" element={<Formulario />} />
</Routes>
    </BrowserRouter>
  </React.StrictMode>,
);