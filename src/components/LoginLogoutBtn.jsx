import React, { useContext } from 'react';
import firebase from 'firebase';
import { Button } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/user';

function LoginLogoutBtn() {
  const history = useHistory();
  const { isAuth } = useContext(UserContext);

  const onClick = () => {
    if (isAuth) {
      firebase.auth().signOut();
    }

    history.push('/login');
  };

  return <Button onClick={onClick} type="link" icon={isAuth ? <LogoutOutlined /> : <LoginOutlined />} />;
}

export default LoginLogoutBtn;
