import React from 'react';
import firebase from 'firebase';
import { Route, Redirect, useHistory } from 'react-router-dom';

function PrivateRoute(props) {
  const { currentUser } = firebase.auth();
  const history = useHistory();

  if (!currentUser) {
    return <Redirect to={{
      pathname: '/login',
      state: {
        goTo: history.location,
      }
    }} />;
  }

  return <Route {...props} />;
}

export default PrivateRoute;
