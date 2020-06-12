import React, { useEffect, useRef } from 'react';
import Avatar from 'components/avatar/Avatar';
import { useSelector } from 'react-redux';
import { selectOnlineUsers } from 'redux/notifications/notifications-selector';
import { selectCurrentUser } from 'redux/user/user-selector';
import { Wrapper, Container, FlexBox } from 'components/shared/SharedStyles';
import { Video } from './VideoCallStyles';

const VideoCall = ({ peerSrc, localSrc, endCall, callPeer, status }) => {
  const userVideo = useRef();
  const partnerVideo = useRef();

  useEffect(() => {
    if (partnerVideo.current && peerSrc)
      partnerVideo.current.srcObject = peerSrc;
    if (userVideo.current && localSrc) userVideo.current.srcObject = localSrc;
  });

  const onlineUsers = useSelector(selectOnlineUsers);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Wrapper>
      <Container>
        <FlexBox flex="1" position="relative" height="400px">
          <Video ref={userVideo} playsInline muted autoPlay />
          {!status && (
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
        <FlexBox flex="1" position="relative" height="400px">
          {status ? (
            <div style={{ width: '100%', height: '100%' }}>
              <Video playsInline ref={partnerVideo} autoPlay />
              <button
                style={{ position: 'absolute', bottom: '0', left: '50%' }}
                onClick={() => endCall(true)}
              >
                End call
              </button>
            </div>
          ) : (
            <div style={{ padding: '0 40px' }}>
              {onlineUsers.length < 2 ? (
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
          )}
        </FlexBox>
      </Container>
    </Wrapper>
  );
};

export default VideoCall;
