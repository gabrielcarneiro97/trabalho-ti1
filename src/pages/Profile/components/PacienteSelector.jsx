import React, { useState } from 'react';
import { Select } from 'antd';

import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../contexts/user';
import NewPacienteModal from './NewPacienteModal';
import { PacienteContext } from '../../../contexts/paciente';

export default function PacienteSelector() {
  const { dbUser } = useContext(UserContext);
  const { changePaciente } = useContext(PacienteContext);

  const [pacientes, setPacientes] = useState([]);
  const [value, setValue] = useState('');
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    Promise.all(
      dbUser?.pacientes.map(
        async (pacienteDoc) => {
          const paciente = (await pacienteDoc.get()).data();
          return {
            nome: paciente.nome,
            id: pacienteDoc.id,
          }
        },
      ) || [],
    ).then(setPacientes);
  }, [dbUser]);

  const select = (value) => {
    if (value === 'add') {
      setShowModal(true);
      return setValue('');
    }
    changePaciente(value);
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
    <NewPacienteModal visible={showModal} onCancel={closeModal} onEnd={closeModal} />
    </>
  );
}
