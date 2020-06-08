import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { NavLink } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { useSelector, useDispatch } from 'react-redux';
import { Container, FlexBox, Nav } from 'components/shared/SharedStyles';
import Logo from 'components/logo/Logo';
import ProfileDropdown from 'components/profile-dropdown/ProfileDropdown';
import Input from 'components/form/Input/Input';
import { selectTotalAmountOfMessage } from 'redux/notifications/notifications-selector';
import { selectCurrentUser } from 'redux/user/user-selector';
import {
  setOnlineUsers,
  addMessageNotification
} from 'redux/notifications/notifications-actions';
import { NumberOfUnreadMessages } from 'components/notification-bar/NotificationBarStyles';

import {
  addMessageSocket,
  getConversationsStart
} from 'redux/messages/messages-actions';
import {
  HeaderWrapper,
  LogoWrapper,
  SearchWrapper,
  RelativeBox
} from './HeaderStyles';

const Header = () => {
  const dispatch = useDispatch();
  const amountOfMessages = useSelector(selectTotalAmountOfMessage);
  const [messages, setMessages] = useState(amountOfMessages);
  const isUser = useSelector(selectCurrentUser);

  useEffect(() => {
    setMessages(amountOfMessages);
    document.title = `${
      amountOfMessages ? `(${amountOfMessages})` : ''
    } Film Shot`;
  }, [amountOfMessages]);
  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_URL);
    socket.on('logged', data => {
      dispatch(setOnlineUsers(data));
    });

    socket.on('messages', data => {
      if (
        !window.location.href.includes(`messages/${data.from}`) &&
        isUser?._id === data.to
      ) {
        dispatch(addMessageNotification(data));
      } else {
        dispatch(addMessageSocket(data));
      }
      dispatch(getConversationsStart());
    });

    socket.emit('logged', { _id: isUser?._id, photo: isUser?.photo });
  }, []);

  return (
    <HeaderWrapper>
      <Container jc="space-between">
        <Nav>
          <NavLink to="/dashboard">Home</NavLink>
          <NavLink to="/messages">
            <RelativeBox>
              Messages
              {amountOfMessages ? (
                <NumberOfUnreadMessages top="-11px" right="-20px">
                  {messages}
                </NumberOfUnreadMessages>
              ) : null}
            </RelativeBox>
          </NavLink>
          {/* <NavLink to="/notifications">Notifications</NavLink> */}
        </Nav>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <FlexBox
          align-items="center"
          position="relative"
          justify-content="space-between"
        >
          <SearchWrapper>
            <Input type="text" name="search" placeholder="Search" flex="1">
              <GoSearch />
            </Input>
          </SearchWrapper>

          <ProfileDropdown />
        </FlexBox>
      </Container>
    </HeaderWrapper>
  );
};

export default React.memo(Header);
