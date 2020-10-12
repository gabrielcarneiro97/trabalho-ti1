import React from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'antd';

import LoginForm from './components/LoginForm';

function Login() {
  const location = useLocation();
  console.log(location.state);
  return (
    <Row justify="center" align="middle" style={{ minHeight: '80vh' }}>
      <Col span={12}>
        <LoginForm />
      </Col>
    </Row>
  );
}

export default Login;
