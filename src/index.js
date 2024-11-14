// IE 11 support
import 'react-app-polyfill/stable';
import './assets/js/polyfills/polyfill-includes';
// React
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('wmn-app-name');

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
