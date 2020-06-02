import React from 'react';
import { MessageWrapper } from './ChatMessageStyles';

const ChatMessage = props => {
  return <MessageWrapper my={props.my}>{props.children}</MessageWrapper>;
};

export default ChatMessage;
