import _ from 'lodash';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/main.scss';

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
