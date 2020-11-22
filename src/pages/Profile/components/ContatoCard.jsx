import React from 'react';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

export default function ContatoCard(props) {
  const { contato } = props;
  const { nome, grau, telefone, email } = contato;

  return (
    <Card style={{ marginTop: 16 }}>
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={`${nome} - ${grau}`}
        description={`${telefone} ${email}`}
      />
    </Card>
  );


}
