import React, { useEffect } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Avatar from 'components/avatar/Avatar';
import { setCoSpeakerData } from 'redux/messages/messages-actions';
import { selectCurrentUser } from 'redux/user/user-selector';
import { FlexBox } from 'components/shared/SharedStyles';
import { UserName, Time, LastMessage, Wrapper } from './DialogStyles';

const Dialog = ({ user, updatedAt, lastMessage, noConvo, ...otherProps }) => {
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
  return (
    <Wrapper to={`/messages/${_id}`}>
      <FlexBox background="none" align-items="center">
        <Avatar width="50px" height="50px" image={photo} flex="0 0 50px" />
        <FlexBox background="none" flex-direction="column" margin-left="25px">
          <FlexBox background="none" align-items="flex-end">
            <UserName>{`${firstName} ${lastName}`}</UserName>
            {!noConvo && (
              <Time>
                {moment.duration(currentDate.diff(updatedAt)).humanize()} ago
              </Time>
            )}
          </FlexBox>
          <LastMessage>{lastMessage}</LastMessage>
        </FlexBox>
      </FlexBox>
    </Wrapper>
  );
};

export default Dialog;
