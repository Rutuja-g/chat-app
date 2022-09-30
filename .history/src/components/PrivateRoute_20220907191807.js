import React from 'react';

function PrivateRoute({ children, ...routeProps }) {
    const profile=false;
    if(!profile){
        return <Redirect to="/signin"
    }
  return <div />;
}

export default PrivateRoute;
