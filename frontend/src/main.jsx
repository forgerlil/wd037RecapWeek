import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='dark:bg-slate-700 dark:text-white h-screen transition-all pt-[1px]'>
      <App />
    </div>
  </React.StrictMode>
);
