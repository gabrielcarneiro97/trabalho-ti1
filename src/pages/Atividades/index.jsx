import React from 'react';
import { Typography, Col, Row } from 'antd';

const { Title, Paragraph } = Typography;

export default function Atividades() {
  return (
    <>
      <Row>
        <Col>
          <Title level={3}>
            Atividades
          </Title>
        </Col>
      </Row>
      <Row gutter={16} style={{ textAlign: 'justify' }}>
        <Col span={12}>
          <Title level={4}>Exercícios básicos</Title>
          <Paragraph>
            Nos estágios iniciais do Alzheimer os exercícios recomendados principalmente são os exercícios aeróbicos
            se beneficiar através de exercícios como por exemplo pilates , exercícios em grupo, ciclismo, hidroginástica e entre outros.
          </Paragraph>
          <Title level={4}>Exercícios para Alzheimer intermediário</Title>
          <Paragraph>
            Os exercícios para pessoas com Alzheimer em nível intermediário indicados são:
            <ul>
              <li>Andar pelo quintal ou dançar; </li>
              <li>Colocar uma bola de plástico em cima da cabeça e tentar equilibrar-se;  </li>
              <li>Treinar o escovar o dentes e pentear o seu próprio cabelo e do cuidador; </li>
              <li>Apertar os botões da blusa;  </li>
              <li>Ficar num pé só; </li>
              <li>Andar de lado e também em forma de circuito; </li>
              <li>Elevação de braços usando pesinhos de 2-3 kg; </li>
              <li>Agachamentos encostado na parede; </li>
              <li>Caminhar colocando um pé à frente do outro; </li>
              <li>Rebolar usando um bambolê; </li>
              <li>Prancha abdominal com apoio dos joelhos no chão; </li>
              <li>Ponte abdominal. </li>
            </ul>
          </Paragraph>
        </Col>
        <Col span={12}>
          <Title level={4}>Exercícios para Alzheimer avançado</Title>
          <Paragraph>
            No caso do Alzheimer mais avançado a maioria dos idosos não conseguem nem ficar de pé e isso se torna uma dificuldade muito grande para os familiares e cuidadores.
            Algumas formas de ajudar as pessoas nesse estado são os cuidados e ensinamentos
            transmitidos por fisioterapeutas diariamente de preferência para evitar que o doente tenha atrofia muscular e perca grande
            parte da sua força através da realização de exercícios simples
          </Paragraph>
        </Col>
      </Row>
      <Row>
        <Col>
          <Title level={3}>
            Vídeos
          </Title>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <iframe
            height="500"
            width="100%"
            src="https://www.youtube.com/embed/_0g2dmJ0zNs"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Col>
      </Row>
    </>
  );
}
