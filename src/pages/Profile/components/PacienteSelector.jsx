import React, { useState } from 'react';
import { Select } from 'antd';
import firebase from 'firebase';

import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../contexts/user';
import NewPacienteModal from './NewPacienteModal';

export default function PacienteSelector() {
  const db = firebase.firestore();
  const { userDb } = useContext(UserContext);

  const [pacientes, setPacientes] = useState([]);
  const [value, setValue] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const pacientesCollection = db.collection('pacientes');
    Promise.all(
      userDb?.pacientes.map(
        async (pacienteId) => {
          return (await pacientesCollection.doc(pacienteId).get()).data();
        },
      ) || [],
    ).then(setPacientes);
  }, [userDb]);

  const select = (value) => {
    if (value === 'add') {
      setShowModal(true);
      return setValue('');
    }
    setValue(value);
  }

  const closeModal = () => setShowModal(false);

  const options = pacientes.map((e) => ({ label: e.nome, value: e.id }));
  options.push({ label: 'Adicionar Paciente', value: 'add' });

  return (
    <>
    <Select
      style={{ width: '30vw' }}
      onChange={select}
      value={value}
      options={options}
    />
    <NewPacienteModal visible={showModal} onCancel={closeModal} />
    </>
  );
}
