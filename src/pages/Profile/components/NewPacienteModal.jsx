import { Modal } from 'antd';
import React from 'react';

export default function NewPacienteModal(props) {
  const { visible, onCancel } = props;
  return (
    <Modal visible={visible} onCancel={onCancel}>
      Modal
    </Modal>
  );
}

