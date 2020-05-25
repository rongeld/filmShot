import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';

import { Container, FlexBox, Nav } from 'components/shared/SharedStyles';
import Logo from 'components/logo/Logo';
import ProfileDropdown from 'components/profile-dropdown/ProfileDropdown';
import Input from 'components/form/Input/Input';

import { HeaderWrapper, LogoWrapper } from './HeaderStyles';

const Header = () => (
  <HeaderWrapper>
    <Container jc="space-between">
      <Nav>
        <NavLink to="/dashboard">Home</NavLink>
        <NavLink to="/messages">Message</NavLink>
        <NavLink to="/notifications">Notifications</NavLink>
      </Nav>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <FlexBox
        align-items="center"
        position="relative"
        width="23.5%"
        justify-content="space-between"
      >
        <Input type="text" name="search" placeholder="Search" flex="1">
          <GoSearch />
        </Input>
        <ProfileDropdown />
      </FlexBox>
    </Container>
  </HeaderWrapper>
);

export default Header;
