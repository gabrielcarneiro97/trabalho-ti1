import React from 'react';
import { Col, Row, Menu } from 'antd';
import LoginLogoutBtn from './LoginLogoutBtn';
import { useHistory } from 'react-router-dom';

function Navbar() {
  const history = useHistory();
  const { location } = history;
  const { pathname } = location;

  const goto = (href) => () => history.push(href);

  return (
    <Row
      justify="space-between"
      style={{ color: '#fff' }}
    >
      <Col>
        REMEMBER
      </Col>
      <Col>
        <Row gutter={24}>
          <Col>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[pathname]}>
            <Menu.Item key="/" onClick={goto('/')}>Início</Menu.Item>
            <Menu.Item key="/historia" onClick={goto('/historia')}>História</Menu.Item>
            <Menu.Item key="/clinicas">Clínicas</Menu.Item>
            <Menu.Item key="/profile" onClick={goto('/profile')}>Perfil</Menu.Item>
          </Menu>
          </Col>
          <Col>
            <LoginLogoutBtn />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Navbar;
