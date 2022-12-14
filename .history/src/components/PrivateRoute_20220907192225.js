import React from 'react';
import { Navigate, Route } from 'react-router';

function PrivateRoute({ children, ...routeProps }) {
  const profile = false;
  if (!profile) {
    return <Navigate to="/signin" />;
  }

  return <Route {...routeProps}>{children}</Route>;
}

export default PrivateRoute;
