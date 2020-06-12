import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  const { id } = useParams();
  const conversations = useSelector(selectConversationsData);
  const notifications = useSelector(selectMessagesNotifications);

  const fetchAllConversations = useCallback(
    () => dispatch(getConversationsStart()),
    [dispatch]
  );
  useEffect(() => {
    fetchAllConversations();
  }, []);

  useEffect(() => {
    if (!id) {
      dispatch(removeCoSpeaker());
    }
  }, [id]);
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
