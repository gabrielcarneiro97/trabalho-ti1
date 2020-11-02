import React, { useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import {
  Input, Button, Form, Row, Col,
} from 'antd';

import GoogleLoginBtn from './GoogleLoginBtn';

import { UserContext } from '../../../contexts/user';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

function LoginForm() {
  const location = useLocation();
  const { isAuth } = useContext(UserContext);

  const { from } = location.state || { from: { pathname: '/profile' } };

  if (isAuth !== false) {
    return <Redirect to={from} />;
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      labelAlign="left"
      size="large"
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="username"
        rules={[{ required: true, message: 'Insira um e-mail válido!', pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }]}
      >
        <Input disabled />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Insira sua senha!' }]}
      >
        <Input.Password disabled />
      </Form.Item>

      <Row justify="center">
        <Col span={16}>
          <Form.Item style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button disabled style={{ width: '100%' }} type="primary" htmlType="submit">
              Entrar
            </Button>
          </Form.Item>
        </Col>
      </Row>

      <Row justify="center">
        <Col span={16}>
          <Form.Item style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <GoogleLoginBtn />
          </Form.Item>
        </Col>
      </Row>

    </Form>
  );
}

export default LoginForm;
