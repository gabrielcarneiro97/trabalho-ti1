import React from 'react';
import { Modal, Form, Input, Button, DatePicker, Divider } from 'antd';

export default function NewPacienteModal(props) {
  const { visible, onCancel } = props;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      title="Cadastrar Paciente"
      style={{ minWidth: '30vw' }}
      footer={null}
    >
      <Form
        size="large"
        name="cadastro-paciente"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nome do Paciente"
          name="nome"
          rules={[{ required: true, message: 'Insira o nome do paciente!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Data de Nascimento do Paciente"
          name="nascimento"
          rules={[{ required: true, message: 'Insira a data de nascimento do paciente!' }]}
        >
          <DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} placeholder="Selecione uma data" />
        </Form.Item>
        <Divider />
        <Form.Item style={{ textAlign: 'end' }}>
        <Button type="primary" htmlType="submit">
          Cadastrar
        </Button>
      </Form.Item>
      </Form>
    </Modal>
  );
}

