import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

function Main() {
  return <div>Main</div>;
}

function Profile() {
  return <div>Profile</div>;
}

function App() {
  return (
    <Router>
      <PrivateRoute exact path="/profile" component={Profile} />
      <Route  exact path="/" component={Main} />
    </Router>
  );
}

export default App;
