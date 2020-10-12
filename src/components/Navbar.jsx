import React from 'react';
import { Col, Row } from 'antd';
import LoginLogoutBtn from './LoginLogoutBtn';

function Navbar() {
  return (
    <Row  justify="space-between" style={{ color: '#fff' }}>
      <Col>
        REMEMBER
      </Col>
      <Col>
        <LoginLogoutBtn />
      </Col>
    </Row>
  );
}

export default Navbar;
