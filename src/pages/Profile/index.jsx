import React, { useContext } from 'react';

import PacienteProvider, { PacienteContext } from '../../contexts/paciente';
import PacienteInfo from './components/PacienteInfo';

function Profile() {
  const paciente = useContext(PacienteContext);
  const { pacienteDb } = paciente;

  return (
    <>
      <PacienteInfo pacienteDb={pacienteDb} />
    </>
  );
}

export default () => <PacienteProvider><Profile/></PacienteProvider>;
