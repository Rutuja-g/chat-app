import React from 'react';
import { Redirect, Route } from 'react-router';
import { useProfile } from '../context/profile.contacts';

function PublicRoute({ children, ...routeProps }) {
  const profile = useProfile();

  if (profile) {
    return <Redirect to="/home" />;
  }

  return <Route {...routeProps}>{children}</Route>;
}

export default PublicRoute;
