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
  return Object.keys(notifications).length ? (
    <Wrapper>
      <Container>
        <Body>
          {Object.keys(notifications).map(item => (
            <UserMessage to={`/messages/${item}`} key={item}>
              <Avatar image={notifications[item].senderInfo.photo} />
              <NumberOfUnreadMessages>
                {notifications[item].numberOfMessages}
              </NumberOfUnreadMessages>
            </UserMessage>
          ))}
        </Body>
      </Container>
    </Wrapper>
  ) : null;
};

export default NotificationBar;
