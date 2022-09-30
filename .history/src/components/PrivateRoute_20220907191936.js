import React from 'react';
import { Route } from 'react-router';

function PrivateRoute({ children, ...routeProps }) {
  const profile = false;
  if (!profile) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routeProps}>{children}</Route>;
}

export default PrivateRoute;
