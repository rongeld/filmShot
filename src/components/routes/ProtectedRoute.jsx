import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !auth ? <Component {...props} /> : <Redirect to="/landing" />
    }
  />
);

export default PrivateRoute;

// PrivateRoute.propTypes = {
//   auth: PropTypes.object.isRequired
// };
