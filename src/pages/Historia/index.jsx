import React from 'react';
import { Typography, Col, Row } from 'antd';

const { Title, Paragraph } = Typography;

export default function Historia() {
  return (
    <>
      <Row>
        <Col>
          <Title level={3}>
            História da Doença de Alzheimer
          </Title>
        </Col>
      </Row>
      <Row gutter={16} style={{ textAlign: 'justify' }}>
        <Col span={12}>
          <Paragraph>
            A doença Alzheimer foi “descoberta” em 1906 pelo psiquiatra e neuropatologista Alois Alzheimer nascido na Alemanha e ao
            fazer uma autópsia descobriu no cérebro do morto, lesões que ninguém nunca havia visto em mais ninguém.
            Era um problema de dentro dos neurônios, os quais apareciam atrofiados em vários locais do cérebro, e cheios de placas
            estranhas e fibras retorcidas, entrelaçadas umas nas outras.
          </Paragraph>
          <Paragraph>
            A Doença de Alzheimer, conhecida como demência é a mais comum patologia que a mais conhecida pela população como "esclerose".
            É uma doença degenerativa do cérebro, no qual os neurônios se degeneram de forma lenta e progressiva, provocando uma atrofia do cérebro.
          </Paragraph>
          <Paragraph>
            A doença afeta a memória e o funcionamento mental por exemplo:
            a incapacidade de raciocinar, de compreender e falar com outras pessoas.
            Também pode gerar outros problemas, como confusão e mudanças de humor repentinas.
          </Paragraph>
          <Paragraph>
            A doença faz diminuir a capacidade da pessoa de se cuidar,
            tal pessoa perde princípios e aprendizados adquiridos durante toda a sua vida,
            até mesmo as mais básicas como por exemplo: tomar banho, se higienizar no geral e entre outras coisas.
          </Paragraph>
        </Col>
        <Col span={12}>
          <Paragraph>
            A doença de Alzheimer é uma doença terminal que causa uma deterioração geral da saúde e não é contagiosa.
            A causa da morte mais frequente dessas pessoas é a pneumonia, porque à medida que a doença progride o sistema
            imunológico sofre diversas mudanças se tornando mais fraco cada dia mais e com isso ocorre a perda de peso,
            que aumenta o risco de infecções da garganta e dos pulmões.
          </Paragraph>
          <Paragraph>
            Geralmente essa doença ocorre geralmente em pessoas com idade mais avançada que no caso são idosos,
            mas ocorrem casos atípicos em pessoas mais novas. Quanto maior a idade de tal idoso maior
            será a porcentagem de adquirir essa doença.
          </Paragraph>
          <Paragraph>
            Alguns estudos apontam que as pessoas nascidas em mães que lhe tiveram com idade superior aos 40 anos de idade
            apresenta maior porcentagem de risco de adquirir o Alzheimer no futuro.
          </Paragraph>
          <Paragraph>
            Infelizmente os estudos atuais ainda não conseguiram descobrir a causa principal da
            degeneração do cérebro nas pessoas afetadas por tal doença. Existem somente algumas teorias não comprovadas rolando na boca de pessoas e estudiosos.
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
            src="https://www.youtube.com/embed/oBqIFoua1Qg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Col>
        <Col span={12}>
          <iframe
            height="500"
            width="100%"
            src="https://www.youtube.com/embed/NhXl0ZrFQXY"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Col>
      </Row>
    </>
  );
}
