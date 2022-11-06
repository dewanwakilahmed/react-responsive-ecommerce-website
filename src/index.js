import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

//  Main APP Component
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
