import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import { Modal, Form, Input, Button, Divider, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import moment from 'moment';

import { PacienteContext } from '../../../contexts/paciente';

export default function AddEventoDiarioModal() {
  const paciente = useContext(PacienteContext);
  const { id: pacienteId } = paciente;

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  const db = firebase.firestore();
  const pacienteDoc = db.collection('pacientes').doc(pacienteId);

  const onFinish = async (values) => {
    setLoading(true);

    const evento = {
      nome: values.nome,
      inicio: values.inicio.toDate(),
      fim: values.fim.toDate(),
      horaDia: {
        hora: moment(values.hora).hour(),
        minutos: moment(values.hora).minutes(),
      }
    }

    await pacienteDoc.update({
      eventosDiarios: firebase.firestore.FieldValue.arrayUnion(evento),
    });

    setLoading(false);
    toggleVisibility();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button type="primary" icon={<PlusOutlined />} onClick={toggleVisibility}>Adicionar Evento</Button>
      <Modal
        visible={visible}
        onCancel={toggleVisibility}
        title="Cadastrar Evento Diário"
        style={{ minWidth: '30vw' }}
        footer={null}
        destroyOnClose
      >
        <Form
          size="large"
          name="cadastro-evento"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Nome do Evento"
            name="nome"
            rules={[{ required: true, message: 'Insira o nome do paciente!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Início"
            name="inicio"
            rules={[{ required: true, message: 'Insira a data de início!' }]}
          >
            <DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} placeholder="Selecione uma data" />
          </Form.Item>
          <Form.Item
            label="Fim"
            name="fim"
            rules={[{ required: true, message: 'Insira data de fim!' }]}
          >
            <DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} placeholder="Selecione uma data" />
          </Form.Item>
          <Form.Item
            label="Hora"
            name="hora"
            rules={[{ required: true, message: 'Insira a hora!' }]}
          >
            <DatePicker picker="time" />
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

