import React from 'react';
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
