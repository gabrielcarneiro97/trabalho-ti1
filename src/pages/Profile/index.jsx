import React, { useContext } from 'react';
import { PageHeader, Descriptions } from 'antd';
import moment from 'moment';

import PacienteProvider, { PacienteContext } from '../../contexts/paciente';
import PacienteSelector from './components/PacienteSelector';

function Profile() {
  const paciente = useContext(PacienteContext);
  const { pacienteDb } = paciente;

  return (
    <>
      <PageHeader
        ghost={false}
        title="Ficha do Paciente"
        extra={[
          <PacienteSelector key="1" />
        ]}
      >
        {
          pacienteDb
          && (
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="Nome">{pacienteDb?.nome}</Descriptions.Item>
              <Descriptions.Item label="Nascimento">{moment(pacienteDb?.nascimento.seconds * 1000).format('DD/MM/YYYY')}</Descriptions.Item>
            </Descriptions>
          )
        }

      </PageHeader>
    </>
  );
}

export default () => <PacienteProvider><Profile/></PacienteProvider>;
