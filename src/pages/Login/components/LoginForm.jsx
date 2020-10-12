import React from 'react';
import { Input, Button, Form, Row, Col } from 'antd';
import firebase from 'firebase';

import GoogleLoginBtn from './GoogleLoginBtn';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

function LoginForm() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  console.log(firebase.auth().currentUser);

  return (
    <Form
      {...layout}
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
        <Input />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Insira sua senha!' }]}
      >
        <Input.Password />
      </Form.Item>

    <Row justify="center">
      <Col span={16}>
        <Form.Item style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button style={{ width: '100%' }} type="primary" htmlType="submit">
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
