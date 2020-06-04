import React, { Fragment, Suspense, lazy, useEffect, useState } from 'react';
import { Route, useLocation, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import socketIOClient from 'socket.io-client';
import { useDispatch } from 'react-redux';
import GlobalStyle, { AppWrapper } from 'styles/global-styles';
import ProtectedRoute from 'components/routes/ProtectedRoute';
import Loading from 'components/loading-component/Loading';
import Header from 'components/header/Header';
import NotificationBar from 'components/notification-bar/NotificationBar';
import { selectCurrentUser } from 'redux/user/user-selector';
import {
  addMessageSocket,
  fetchDialogStart
} from 'redux/messages/messages-actions';
import {
  addMessageNotification,
  fetchUnreadMessagesStart
} from 'redux/notifications/notifications-actions';

const Landing = lazy(() => import('pages/landing/Landing'));
const Dashboard = lazy(() => import('pages/dashboard/Dashboard'));
const Profile = lazy(() => import('pages/profile/Profile'));
const NotFoundPage = lazy(() => import('pages/not-found/NotFoundPage'));
const Messages = lazy(() => import('pages/messages/Messages'));

function App() {
  const [firstAccess, setFirstAccess] = useState(true);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_URL);

    socket.on('messages', data => {
      if (
        !window.location.href.includes('messages/') &&
        data.from !== isUser?.id
      ) {
        dispatch(addMessageNotification(data));
      }
    });

    return () => {
      socket.removeListener('messages');
    };
  }, []);

  useEffect(() => {
    if (!pathname.includes('/landing') && firstAccess) {
      dispatch(fetchUnreadMessagesStart('messages=unread'));
      setFirstAccess(false);
    }
  }, [pathname]);

  return (
    <Fragment>
      <AppWrapper>
        <Route render={() => pathname !== '/landing' && <Header />} />
        <Route render={() => pathname !== '/landing' && <NotificationBar />} />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route
              path="/landing"
              component={() =>
                isUser ? <Redirect to="/dashboard" /> : <Landing />
              }
            />
            <ProtectedRoute
              path="/"
              exact
              component={() => <Redirect to="/dashboard" />}
            />
            <ProtectedRoute path="/dashboard" exact component={Dashboard} />
            <ProtectedRoute path="/profile/:id" component={Profile} />
            <ProtectedRoute path="/messages/:id?" component={Messages} />
            {isUser && (
              <Redirect from="/profile/" to={`/profile/${isUser._id}`} />
            )}

            <ProtectedRoute component={NotFoundPage} />
          </Switch>
        </Suspense>
      </AppWrapper>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
