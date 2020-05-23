import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { Route, useLocation, Redirect } from 'react-router-dom';

import GlobalStyle, { AppWrapper } from 'styles/global-styles';
import ProtectedRoute from 'components/routes/ProtectedRoute';

import Landing from 'pages/landing/Landing';
import Dashboard from 'pages/dashboard/Dashboard';
import Header from 'components/header/Header';
import Profile from 'pages/profile/Profile';

function App() {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Route render={() => pathname !== '/landing' && <Header />} />
        <Switch>
          <Route path="/landing" component={Landing} />
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Redirect to="/landing" />
        </Switch>
      </AppWrapper>
    </Fragment>
  );
}

export default App;
