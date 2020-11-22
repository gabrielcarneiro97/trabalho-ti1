import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import { Modal, Form, Input, Button, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { PacienteContext } from '../../../contexts/paciente';

export default function AddContatoPacienteModal() {
  const paciente = useContext(PacienteContext);
  const { id: pacienteId } = paciente;

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  const db = firebase.firestore();
  const pacienteDoc = db.collection('pacientes').doc(pacienteId);

  const onFinish = async (values) => {
    setLoading(true);

    await pacienteDoc.update({
      contatos: firebase.firestore.FieldValue.arrayUnion(values),
    });

    setLoading(false);
    toggleVisibility();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button type="primary" icon={<PlusOutlined />} onClick={toggleVisibility}>Adicionar Contato</Button>
      <Modal
        visible={visible}
        onCancel={toggleVisibility}
        title="Cadastrar Paciente"
        style={{ minWidth: '30vw' }}
        footer={null}
        destroyOnClose
      >
        <Form
          size="large"
          name="cadastro-contato"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Nome do Contato"
            name="nome"
            rules={[{ required: true, message: 'Insira o nome do paciente!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Grau de Relação com o Paciente"
            name="grau"
            rules={[{ required: true, message: 'Insira o grau de relacionamento!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Telefone"
            name="telefone"
            rules={[{ required: true, message: 'Insira o telefone do contato!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="E-mail"
            name="email"
          >
            <Input />
          </Form.Item>
          <Divider />
          <Form.Item style={{ textAlign: 'end' }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Cadastrar
          </Button>
        </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

