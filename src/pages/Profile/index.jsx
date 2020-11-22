import React, { useContext } from 'react';
import { PageHeader } from 'antd';

import PacienteProvider, { PacienteContext } from '../../contexts/paciente';
import PacienteSelector from './components/PacienteSelector';
import PacienteContatos from './components/PacienteContatos';
import PacienteInfo from './components/PacienteInfo';

function Profile() {
  const paciente = useContext(PacienteContext);
  const { pacienteDb } = paciente;

  return (
    <PageHeader
      ghost={false}
      title="Ficha do Paciente"
      extra={[
        <PacienteSelector key="1" />
      ]}
    >
      <PacienteInfo pacienteDb={pacienteDb} />
      <PacienteContatos pacienteDb={pacienteDb} />
    </PageHeader>
  );
}

export default () => <PacienteProvider><Profile/></PacienteProvider>;
