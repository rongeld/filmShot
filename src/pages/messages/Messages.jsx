import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useImmer } from 'use-immer';
import useSocket from 'use-socket.io-client';
import { selectCurrentUser } from 'redux/user/user-selector';
import { Wrapper, Container } from 'components/shared/SharedStyles';
import Conversations from 'components/conversations/Conversations';
import Chat from 'components/chat/Chat';
import { Box } from './MessagesStyles';

const Message = () => {
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
