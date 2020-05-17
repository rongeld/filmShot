import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { Route, useLocation, Redirect } from 'react-router-dom';

import GlobalStyle from './styles/global-styles';
import ProtectedRoute from './components/routes/ProtectedRoute';

import Landing from './pages/landing/Landing';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './components/header/Header';

function App() {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <GlobalStyle />
      <div className="app-wrapper">
        <div className="app-body">
          <Route render={() => pathname !== '/landing' && <Header />} />
          <Switch>
            <Route path="/landing" component={Landing} />
            <ProtectedRoute path="/dashboard" exact component={Dashboard} />
            <Redirect to="/landing" />
          </Switch>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
