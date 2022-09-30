import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';

function PrivateRoute({ children, ...routeProps }) {
  const profile = useContext(profile);

  if (!profile) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routeProps}>{children}</Route>;
}

export default PrivateRoute;
