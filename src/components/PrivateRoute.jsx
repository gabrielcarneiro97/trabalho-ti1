import React from 'react';
import firebase from 'firebase';
import { Route, Redirect, useHistory } from 'react-router-dom';

function PrivateRoute(props) {
  const { currentUser } = firebase.auth();
  const history = useHistory();

  const { component: Component, ...rest } = props;
  const toRender = (propsRender) => (
    currentUser
      ? <Component {...propsRender} />
      : (
        <Redirect to={{
          pathname: '/login',
          state: {
            goTo: history.location,
          }
        }} />
      )
  );

  return <Route {...rest} render={toRender} />;
}

export default PrivateRoute;
