import React, { useEffect } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Avatar from 'components/avatar/Avatar';
import { setCoSpeakerData } from 'redux/messages/messages-actions';
import { selectCurrentUser } from 'redux/user/user-selector';
import { FlexBox } from 'components/shared/SharedStyles';
import { UserName, Time, LastMessage, Wrapper, Box } from './DialogStyles';
import { NumberOfUnreadMessages } from 'components/notification-bar/NotificationBarStyles';
import useWindowWidth from 'utils/windowWidthHook';

const Dialog = ({
  user,
  updatedAt,
  lastMessage,
  newMessages,
  noConvo,
  ...otherProps
}) => {
  let coSpeaker;
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const currentDate = moment();

  if (!noConvo) {
    coSpeaker = user.find(item => item._id !== currentUser.id);
  }
  const { firstName, lastName, photo, _id } = noConvo
    ? otherProps || {}
    : coSpeaker || {};

  useEffect(() => {
    if (_id === id) {
      dispatch(setCoSpeakerData(coSpeaker));
    }
  }, [user, dispatch, id]);

  const width = useWindowWidth();
  return (
    <Wrapper
      to={{
        pathname: `/messages/${_id}`,
        state: {
          guy: coSpeaker
        }
      }}
    >
      <Box>
        <Avatar
          width="50px"
          height="50px"
          image={photo}
          id={_id}
          flex="0 0 50px"
        />
        {width > 700 && (
          <FlexBox background="none" flex-direction="column" margin-left="25px">
            <FlexBox background="none" align-items="flex-end">
              <UserName>{`${firstName} ${lastName}`}</UserName>
              {!noConvo && (
                <Time>
                  {moment.duration(currentDate.diff(updatedAt)).humanize()} ago
                </Time>
              )}
            </FlexBox>
            <LastMessage newMessages={!!newMessages}>
              {lastMessage?.length > 7
                ? lastMessage.slice(0, 7) + '...'
                : lastMessage}
            </LastMessage>
          </FlexBox>
        )}
        {newMessages && (
          <NumberOfUnreadMessages right="auto" left="0">
            {newMessages.numberOfMessages}
          </NumberOfUnreadMessages>
        )}
      </Box>
    </Wrapper>
  );
};

export default Dialog;
