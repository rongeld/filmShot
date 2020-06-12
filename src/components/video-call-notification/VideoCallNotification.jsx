import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { BsCameraVideoFill } from 'react-icons/bs';
import { MdCallEnd } from 'react-icons/md';
import socket from 'rest/socket';
import { selectVideoCallNotification } from 'redux/notifications/notifications-selector';
import { videoCallNotificationReset } from 'redux/notifications/notifications-actions';
import Avatar from 'components/avatar/Avatar';

import { Wrapper, PersonInfo, Buttons } from './VideoCallNotificationStyles';

const VideoCallNotification = ({ callPeer }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentCall = useSelector(selectVideoCallNotification);

  const resolveCall = () => {
    callPeer(false, currentCall.from.id);
    history.push('/video-call');
    dispatch(videoCallNotificationReset());
  };

  const rejectCall = () => {
    socket.emit('end', { to: currentCall.from.id });
    dispatch(videoCallNotificationReset());
  };
  const content = (
    <Fragment>
      <CSSTransition
        in={currentCall}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <Wrapper>
          {currentCall && (
            <Fragment>
              <p>Incoming video call</p>
              <PersonInfo>
                <Avatar
                  image={currentCall.from.photo}
                  id={currentCall.from.id}
                  transform="scale(1.5)"
                />
                <h4>{`${currentCall.from.firstName} ${currentCall.from.lastName}`}</h4>
              </PersonInfo>

              <Buttons>
                <div onClick={resolveCall}>
                  <BsCameraVideoFill />
                </div>

                <div onClick={rejectCall}>
                  <MdCallEnd />
                </div>
              </Buttons>
            </Fragment>
          )}
        </Wrapper>
      </CSSTransition>
    </Fragment>
  );

  return createPortal(content, document.getElementById('video-call-hook'));
};

export default VideoCallNotification;
