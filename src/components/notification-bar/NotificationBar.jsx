import React from 'react';
import { Container } from 'components/shared/SharedStyles';
import { useSelector } from 'react-redux';
import { selectMessagesNotifications } from 'redux/notifications/notifications-selector';
import Avatar from 'components/avatar/Avatar';
import {
  Wrapper,
  Body,
  UserMessage,
  NumberOfUnreadMessages
} from './NotificationBarStyles';

const NotificationBar = () => {
  const notifications = useSelector(selectMessagesNotifications);

  return (
    notifications.length && (
      <Wrapper>
        <Container>
          <Body>
            {notifications.map(({ senderInfo, numberOfMessages }) => (
              <UserMessage to={`/messages/${senderInfo.id}`}>
                <Avatar image={senderInfo.photo} />
                <NumberOfUnreadMessages>
                  {numberOfMessages}
                </NumberOfUnreadMessages>
              </UserMessage>
            ))}
          </Body>
        </Container>
      </Wrapper>
    )
  );
};

export default NotificationBar;
