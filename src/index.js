import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';

import firebaseConfig from './firebase.config.json';
import './index.css';
import App from './App';

// AntD
import 'antd/dist/antd.css';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
