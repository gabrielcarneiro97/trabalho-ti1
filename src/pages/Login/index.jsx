import React from 'react';
import { Row, Col } from 'antd';

import LoginForm from './components/LoginForm';

function Login() {
  return (
    <Row justify="center" align="middle" style={{ minHeight: '80vh' }}>
      <Col span={12}>
        <LoginForm />
      </Col>
    </Row>
  );
}

export default Login;
