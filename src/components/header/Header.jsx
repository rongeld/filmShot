import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { Container, FlexBox, Nav } from 'components/shared/SharedStyles';
import Logo from 'components/logo/Logo';
import ProfileDropdown from 'components/profile-dropdown/ProfileDropdown';
import Input from 'components/form/Input/Input';
import { selectTotalAmountOfMessage } from 'redux/notifications/notifications-selector';
import { NumberOfUnreadMessages } from 'components/notification-bar/NotificationBarStyles';

import {
  HeaderWrapper,
  LogoWrapper,
  SearchWrapper,
  RelativeBox
} from './HeaderStyles';

const Header = () => {
  const amountOfMessages = useSelector(selectTotalAmountOfMessage);
  const [messages, setMessages] = useState(amountOfMessages);

  useEffect(() => {
    setMessages(amountOfMessages);
  }, [amountOfMessages]);

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

export default Header;
