import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';

import { Container, FlexBox } from 'components/shared/SharedStyles';
import Logo from 'components/logo/Logo';
import ProfileDropdown from 'components/profile-dropdown/ProfileDropdown';
import Input from 'components/form/Input/Input';

import { HeaderWrapper, Nav } from './HeaderStyles';

const Header = () => (
  <HeaderWrapper>
    <Container jc="space-between">
      <Nav>
        <NavLink to="/dashboard">Home</NavLink>
        <NavLink to="/messages">Message</NavLink>
        <NavLink to="/notifications">Notifications</NavLink>
      </Nav>
      <Logo />
      <FlexBox align-items="center" align-self="center" position="relative">
        <Input type="text" name="search" placeholder="Search">
          <GoSearch />
        </Input>
        <ProfileDropdown />
      </FlexBox>
    </Container>
  </HeaderWrapper>
);

export default Header;
