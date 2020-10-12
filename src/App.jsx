import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';

import PrivateRoute from './components/PrivateRoute';

import Login from './pages/Login';

const { Header, Content, Footer } = Layout;

function Main() {
  return <div>Main</div>;
}

function Profile() {
  return <div>Profile</div>;
}

function App() {
  return (
    <Layout style={{ backgroundColor: '#f0f2f5' }}>
      <Header></Header>
      <Content style={{ minHeight: '80vh', backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: '2vw', padding: '1vw' }}>
        <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Router>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
