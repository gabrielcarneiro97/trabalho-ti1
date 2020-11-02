import React, { useState } from 'react';
import firebase from 'firebase';
import { Modal, Form, Input, Button, DatePicker, Divider } from 'antd';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/user';

export default function NewPacienteModal(props) {
  const { visible, onCancel, onEnd } = props;

  const [loading, setLoading] = useState(false);
  const userContext = useContext(UserContext);
  const { userId } = userContext;

  const db = firebase.firestore();
  const pacientesCollection = db.collection('pacientes');
  const usersCollection = db.collection('users');

  const onFinish = async (values) => {
    setLoading(true);

    const doc = await pacientesCollection.add({
      nome: values.nome,
      nascimento: values.nascimento.toDate(),
    });

    await usersCollection.doc(userId).update({
      pacientes: firebase.firestore.FieldValue.arrayUnion(doc),
    });

    setLoading(false);
    if (onEnd) onEnd();
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
        <Button type="primary" htmlType="submit" loading={loading}>
          Cadastrar
        </Button>
      </Form.Item>
      </Form>
    </Modal>
  );
}

