import React, { Fragment, Suspense, lazy } from 'react';
import { Route, useLocation, Redirect, Switch } from 'react-router-dom';

import GlobalStyle, { AppWrapper } from 'styles/global-styles';
import ProtectedRoute from 'components/routes/ProtectedRoute';
import Loading from 'components/loading-component/Loading';
import Header from 'components/header/Header';

const Landing = lazy(() => import('pages/landing/Landing'));
const Dashboard = lazy(() => import('pages/dashboard/Dashboard'));
const Profile = lazy(() => import('pages/profile/Profile'));
const NotFoundPage = lazy(() => import('pages/not-found/NotFoundPage'));

function App() {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <AppWrapper>
        <Route render={() => pathname !== '/landing' && <Header />} />
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </AppWrapper>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
