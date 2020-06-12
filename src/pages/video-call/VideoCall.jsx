import React, { useEffect, useRef, useState } from 'react';
import io from 'rest/socket';
import Avatar from 'components/avatar/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { videoCallNotificationReset } from 'redux/notifications/notifications-actions';
import { useLocation } from 'react-router-dom';
import {
  selectOnlineUsers,
  selectVideoCallNotification
} from 'redux/notifications/notifications-selector';
import { videoCallNotification } from 'redux/notifications/notifications-actions';
import { selectCurrentUser } from 'redux/user/user-selector';
import Peer from 'simple-peer';
import PeerConnection from 'rest/PeerConnection';
import { Wrapper, Container, FlexBox } from 'components/shared/SharedStyles';
import { Video } from './VideoCallStyles';

const VideoCall = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const socket = useRef();
  const userVideo = useRef();
  const partnerVideo = useRef();
  const onlineUsers = useSelector(selectOnlineUsers);
  const currentUser = useSelector(selectCurrentUser);
  const [callAccepted, setCallAccepted] = useState(false);
  let pc = useRef();

  useEffect(() => {
    socket.current = io;
    socket.current.on('call', data => {
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
    socket.current.on('end', () => {
      endCall(false);
    });

    return () => {
      endCall();
    };
  }, []);

  const callPeer = (isCaller, id) => {
    if (!isCaller) setCallAccepted(true);
    pc.current = new PeerConnection(id, currentUser.id)
      .on('localStream', src => {
        userVideo.current.srcObject = src;
      })
      .on('peerStream', src => {
        partnerVideo.current.srcObject = src;
      })
      .start(isCaller, { video: true, audio: true });
  };

  useEffect(() => {
    if (location.state?.params) {
      callPeer(false, location.state.params.userId);
    }
  }, [location]);

  const endCall = isStarter => {
    if (pc.current && callAccepted) {
      pc.current.stop(isStarter);
    }
    dispatch(videoCallNotificationReset());
    setCallAccepted(false);
    pc.current = {};
  };

  const PartnerVideo = (
    <div>
      <Video playsInline ref={partnerVideo} autoPlay />
      <button onClick={() => endCall(true)}>End call</button>
    </div>
  );

  return (
    <Wrapper>
      <Container>
        <FlexBox flex="1" position="relative">
          <Video ref={userVideo} playsInline muted autoPlay />

          {!callAccepted && (
            <div
              style={{
                background: 'lightgrey',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                position: 'absolute'
              }}
            >
              <h4>Choose user to call</h4>
            </div>
          )}
        </FlexBox>
        <FlexBox flex="1">
          <div style={{ padding: '0 40px' }}>
            {callAccepted ? (
              PartnerVideo
            ) : onlineUsers.length < 2 ? (
              <p>No users online</p>
            ) : (
              onlineUsers
                .filter(item => item.id !== currentUser.id)
                .map(user => (
                  <FlexBox
                    align-items="center"
                    padding="10px 20px"
                    cursor="pointer"
                    onClick={() => callPeer(true, user.id)}
                  >
                    <Avatar image={user.photo} id={user.id} />{' '}
                    <h3
                      style={{ marginLeft: '20px' }}
                    >{`${user.firstName} ${user.lastName}`}</h3>
                  </FlexBox>
                ))
            )}
          </div>
        </FlexBox>
      </Container>
    </Wrapper>
  );
};

export default VideoCall;
