import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from 'redux/user/user-selector';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const isUser = useSelector(selectCurrentUser);
  return (
    <Route
      {...rest}
      render={props =>
        isUser ? <Component {...props} /> : <Redirect to="/landing" />
      }
    />
  );
};

export default PrivateRoute;
