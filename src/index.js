import React from 'react';
import ReactDOM from 'react-dom/client';

import './bootstrap/css/bootstrap.min.css';
import { UserApp } from './UserApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserApp />
  </React.StrictMode>
);

