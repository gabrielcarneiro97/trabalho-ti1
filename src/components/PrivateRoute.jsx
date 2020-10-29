/* eslint-disable */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/user';

function PrivateRoute(props) {
  const { isAuth } = useContext(UserContext);

  const { component: Component, ...rest } = props;
  const toRender = (propsRender) => (
    isAuth
      ? <Component {...propsRender} />
      : (
        <Redirect to={{
          pathname: '/login',
        }}
        />
      )
  );

  return <Route {...rest} render={toRender} />;
}

export default PrivateRoute;
