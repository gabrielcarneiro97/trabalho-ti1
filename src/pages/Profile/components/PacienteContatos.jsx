import React from 'react';
import { Divider } from 'antd';
import AddContatoPacienteModal from './AddContatoPacienteModal';


export default function PacienteContatos(props) {
  const { pacienteDb = null } = props;

  return (
    <div>
      {
        pacienteDb
        && (
          <>
            <Divider>Contatos</Divider>
            <AddContatoPacienteModal />
          </>
        )
      }
    </div>
  )
}
