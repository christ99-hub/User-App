import './bootstrap/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './bootstrap/css/bootstrap.min.css';
import { DashboardRoutes } from './routes/AppRouter';
import './styles/style.css';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   < DashboardRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

