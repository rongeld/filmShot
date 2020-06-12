import React, {
  Fragment,
  Suspense,
  lazy,
  useEffect,
  useState,
  useRef
} from 'react';
import { Route, useLocation, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import GlobalStyle, { AppWrapper } from 'styles/global-styles';
import ProtectedRoute from 'components/routes/ProtectedRoute';
import Loading from 'components/loading-component/Loading';
import Header from 'components/header/Header';
import PeerConnection from 'rest/PeerConnection';
import NotificationBar from 'components/notification-bar/NotificationBar';
import { selectCurrentUser } from 'redux/user/user-selector';
import { fetchUnreadMessagesStart } from 'redux/notifications/notifications-actions';
import VideoCallNotification from 'components/video-call-notification/VideoCallNotification';
import { videoCallNotificationReset } from 'redux/notifications/notifications-actions';
import socket from 'rest/socket';

const Landing = lazy(() => import('pages/landing/Landing'));
const Dashboard = lazy(() => import('pages/dashboard/Dashboard'));
const Profile = lazy(() => import('pages/profile/Profile'));
const NotFoundPage = lazy(() => import('pages/not-found/NotFoundPage'));
const Messages = lazy(() => import('pages/messages/Messages'));
const VideoCall = lazy(() => import('pages/video-call/VideoCall'));

function App() {
  const [firstAccess, setFirstAccess] = useState(true);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [callAccepted, setCallAccepted] = useState(false);
  const [localSrc, setLocalSrc] = useState(null);
  const [peerSrc, setPeerSrc] = useState(null);
  const [status, setStatus] = useState(false);
  const isUser = useSelector(selectCurrentUser);
  let pc = useRef();

  const endCall = isStarter => {
    if (pc.current) {
      pc.current.stop(isStarter);
    }
    dispatch(videoCallNotificationReset());
    setStatus(false);
    setCallAccepted(false);
    pc.current = {};
  };

  useEffect(() => {
    if (!pathname.includes('/landing') && firstAccess) {
      dispatch(fetchUnreadMessagesStart('messages=unread'));
      setFirstAccess(false);
    }
  }, [pathname]);

  useEffect(() => {
    socket.on('call', data => {
      if (data.sdp) {
        if (pc.current) {
          pc.current.setRemoteDescription(data.sdp);
        }
        if (data.sdp.type === 'offer') {
          if (pc.current) {
            pc.current.createAnswer();
          }
        }
      } else {
        setCallAccepted(true);
        if (pc.current) {
          pc.current.addIceCandidate(data.candidate);
        }
      }
    });
    socket.on('end', () => endCall(false));
  }, []);

  const callPeer = (isCaller, id) => {
    if (!isCaller) setCallAccepted(true);
    pc.current = new PeerConnection(id, isUser.id)
      .on('localStream', src => {
        setStatus(true);
        setLocalSrc(src);
      })
      .on('peerStream', src => {
        setPeerSrc(src);
      })
      .start(isCaller, { video: true, audio: true });
  };

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
            <ProtectedRoute
              path="/video-call/:id?"
              component={() => (
                <VideoCall
                  callPeer={callPeer}
                  endCall={endCall}
                  localSrc={localSrc}
                  peerSrc={peerSrc}
                  status={status}
                />
              )}
            />
            {isUser && (
              <Redirect from="/profile/" to={`/profile/${isUser._id}`} />
            )}

            <ProtectedRoute component={NotFoundPage} />
          </Switch>
        </Suspense>
        <VideoCallNotification callPeer={callPeer} />
      </AppWrapper>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
