import React from 'react';
import { MessageWrapper } from './ChatMessageStyles';

const ChatMessage = props => {
  return (
    <MessageWrapper
      // photo={!props.my ? props.senderInfo[0].photo : null}
      my={props.my}
    >
      {props.children}
    </MessageWrapper>
  );
};

export default ChatMessage;
