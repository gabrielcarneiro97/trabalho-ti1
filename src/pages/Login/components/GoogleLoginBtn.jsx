import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

import firebase from 'firebase';

const provider = new firebase.auth.GoogleAuthProvider();

function GoogleLoginBtn() {
  const onClick = () => {
    firebase.auth().signInWithPopup(provider).then((data) => {
      console.log(data);
    });
  };

  return (
    <Button onClick={onClick} style={{ width: '100%' }} icon={<GoogleOutlined />}>
      Entrar com o Google
    </Button>
  );
}


export default GoogleLoginBtn;
