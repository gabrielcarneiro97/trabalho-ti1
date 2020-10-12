import React from 'react';
import { Col, Row } from 'antd';
import LoginLogoutBtn from './LoginLogoutBtn';

import { UserContext } from '../contexts/user';

function Navbar() {
  const user = React.useContext(UserContext);
  console.log(user);

  return (
    <Row  justify="space-between" style={{ color: '#fff' }}>
      <Col>
        Nav
      </Col>
      <Col>
        <LoginLogoutBtn />
      </Col>
    </Row>
  );
}

export default Navbar;
