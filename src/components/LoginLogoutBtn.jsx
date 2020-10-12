import React, { useContext, useState } from 'react';
import firebase from 'firebase';
import { Button } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/user';

function LoginLogoutBtn() {
  const history = useHistory();
  const user = useContext(UserContext);

  const onClick = () => {
    if (user) {
      firebase.auth().signOut();
    }

    history.push('/login');
  };

  return <Button onClick={onClick} type="link" icon={ user ? <LogoutOutlined /> : <LoginOutlined /> }/>;
}

export default LoginLogoutBtn;
