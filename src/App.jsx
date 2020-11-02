import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';

import PrivateRoute from './components/PrivateRoute';

import Login from './pages/Login';
import Main from './pages/Main';
import Profile from './pages/Profile';

import Navbar from './components/Navbar';
import UserProvider from './contexts/user';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <UserProvider>
      <Router>
        <Layout style={{ backgroundColor: '#f0f2f5' }}>
          <Header>
            <Navbar />
          </Header>
          <Content style={{
            minHeight: '80vh', backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: '2vw', padding: '1vw',
          }}
          >
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/profile" component={Profile} />
          </Content>
          <Footer />
        </Layout>
      </Router>
    </UserProvider>
  );
}

export default App;
