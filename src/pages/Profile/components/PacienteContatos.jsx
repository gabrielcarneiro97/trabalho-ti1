import React from 'react';
import { Divider, Row, Col } from 'antd';
import AddContatoPacienteModal from './AddContatoPacienteModal';
import ContatoCard from './ContatoCard';


export default function PacienteContatos(props) {
  const { pacienteDb = null } = props;

  return (
    <div>
      {
        pacienteDb
        && (
          <>
            <Divider>Contatos</Divider>
            <Row justify="end">
              <Col>
                <AddContatoPacienteModal />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                {
                  pacienteDb.contatos.map((contato, i) => <ContatoCard contato={contato} key={i} />)
                }
              </Col>
            </Row>
          </>
        )
      }
    </div>
  )
}
