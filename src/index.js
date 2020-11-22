import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import moment from 'moment';
import 'moment/locale/pt-br';

import firebaseConfig from './firebase.config.json';
import './index.css';
import App from './App';

// AntD
import 'antd/dist/antd.css';

moment.locale('pt-br');

firebase.initializeApp(firebaseConfig);
firebase.auth().languageCode = 'pt';

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
  const stop = firebase.auth().onAuthStateChanged(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
    stop();
  });
});
