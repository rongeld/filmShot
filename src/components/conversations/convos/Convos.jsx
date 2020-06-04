import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import socketIOClient from 'socket.io-client';
import { selectConversationsData } from 'redux/messages/messages-selector';
import { useParams } from 'react-router-dom';
import { selectMessagesNotifications } from 'redux/notifications/notifications-selector';
import {
  getConversationsStart,
  removeCoSpeaker
} from 'redux/messages/messages-actions';
import Dialog from 'components/conversations/dialog/Dialog';

const Convos = () => {
  const dispatch = useDispatch();
  const [newConversation, setNewConversation] = useState(null);
  const { id } = useParams();
  const conversations = useSelector(selectConversationsData);
  const notifications = useSelector(selectMessagesNotifications);

  const fetchAllConversations = useCallback(
    () => dispatch(getConversationsStart()),
    [dispatch]
  );
  useEffect(() => {
    fetchAllConversations();
  }, [newConversation]);
  useEffect(() => {
    if (!id) {
      dispatch(removeCoSpeaker());
    }
  }, [id]);

  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_URL);
    socket.on('messages', data => setNewConversation(data));
  }, []);
  return (
    <div>
      {conversations.map(item => (
        <Dialog
          key={item._id}
          user={item.recipientObj}
          updatedAt={item.updatedAt}
          lastMessage={item.lastMessage}
          newMessages={notifications[item.recipients[0]]}
        />
      ))}
    </div>
  );
};

export default Convos;
