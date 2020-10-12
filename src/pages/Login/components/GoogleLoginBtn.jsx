import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

import firebase from 'firebase';
import { useHistory, useLocation } from 'react-router-dom';

const provider = new firebase.auth.GoogleAuthProvider();

function GoogleLoginBtn() {
  const location = useLocation();
  const history = useHistory();

  const onClick = () => {
    const { from } = location.state || { from: { pathname: '/profile' } };
    firebase.auth().signInWithPopup(provider).then(() => {
      history.push(from);
    });
  };

  return (
    <Button onClick={onClick} style={{ width: '100%' }} icon={<GoogleOutlined />}>
      Entrar com o Google
    </Button>
  );
}


export default GoogleLoginBtn;
