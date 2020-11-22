import React from 'react';
import { Descriptions, Divider } from 'antd';

import moment from 'moment';

export default function PacienteInfo(props) {
  const { pacienteDb = null } = props;

  return (
    <>
      {
        pacienteDb
        && (
          <>
            <Divider>Dados do Paciente</Divider>
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="Nome">{pacienteDb?.nome}</Descriptions.Item>
              <Descriptions.Item label="Nascimento">{moment(pacienteDb?.nascimento.seconds * 1000).format('DD/MM/YYYY')}</Descriptions.Item>
            </Descriptions>
          </>
        )
      }
    </>
  );
}
