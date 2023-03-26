import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const myElement = document.getElementById('root');
if (myElement) {
const root = ReactDOM.createRoot(myElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
}