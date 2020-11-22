import React from 'react';
import { PageHeader, Descriptions } from 'antd';

import moment from 'moment';

import PacienteSelector from './PacienteSelector';


export default function PacienteInfo(props) {
  const { pacienteDb = null } = props;

  return (
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
  );
}
