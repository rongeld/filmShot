import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { Route, useLocation, Redirect } from 'react-router-dom';

import GlobalStyle, { AppWrapper } from 'styles/global-styles';
import ProtectedRoute from 'components/routes/ProtectedRoute';

import Landing from 'pages/landing/Landing';
import Dashboard from 'pages/dashboard/Dashboard';
import Header from 'components/header/Header';
import Profile from 'pages/profile/Profile';
import NotFoundPage from 'pages/not-found/NotFoundPage';

function App() {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <AppWrapper>
        <Route render={() => pathname !== '/landing' && <Header />} />
        <Switch>
          <Route path="/landing" component={Landing} />
          <ProtectedRoute
            path="/"
            exact
            component={() => <Redirect to="/dashboard" />}
          />
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute component={NotFoundPage} />
        </Switch>
      </AppWrapper>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
