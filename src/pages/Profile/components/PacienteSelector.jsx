import React, { useState } from 'react';
import { Select } from 'antd';
import firebase from 'firebase';

import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../contexts/user';

const { Option } = Select;

export default function PacienteSelector() {
  const db = firebase.firestore();
  const { userDb } = useContext(UserContext);

  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const pacientesCollection = db.collection('pacientes');
    const pacientesData = Promise.all(
      userDb?.pacientes.map(
        async (pacienteId) => {
          return (await pacientesCollection.doc(pacienteId).get()).data();
        },
      ) || [],
    );
    setPacientes(pacientesData);
  }, [userDb]);

  const select = (value) => {
    console.log(v);
  }

  return (
    <Select onChange={select} style={{ width: '30vw' }}>

      <Option value="add">
        Adicionar Paciente
      </Option>
    </Select>
  );
}
