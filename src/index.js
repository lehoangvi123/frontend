import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; 
import './i18n'; // 👈 Import ở đây

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
     </BrowserRouter>
   </React.StrictMode>
);




