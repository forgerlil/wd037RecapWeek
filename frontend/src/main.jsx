import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='dark:bg-slate-700 dark:text-white h-screen transition-all pt-[1px]'>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
