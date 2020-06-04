import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper, Container } from 'components/shared/SharedStyles';
import Conversations from 'components/conversations/Conversations';
import Chat from 'components/chat/Chat';
import { removeMessagesNotification } from 'redux/notifications/notifications-actions';
import { Box } from './MessagesStyles';

const Message = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeMessagesNotification());
  }, []);
  return (
    <Wrapper>
      <Container>
        <Box>
          <Conversations />
          <Chat />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Message;
