import React from 'react';
import { NavLink, useRouteMatch, Route, useLocation } from 'react-router-dom';

import profileImage from 'assets/profile-1.jpg';
import profileBanner from 'assets/profile-banner.jpg';
import {
  Nav,
  FlexBox,
  Container,
  Wrapper
} from 'components/shared/SharedStyles';

import CustomBtn from 'components/form/btn/CustomBtn';

import PhotosPage from 'pages/profile/photos-page/PhotosPage';
import FriendsPage from 'pages/profile/friends-page/FriendsPage';
import AboutPage from 'pages/profile/about-page/AboutPage';
import EditProfile from 'pages/profile/edit-profile/EditProfile';
import {
  ProfileBG,
  UserPicWrapper,
  UserPic,
  EditContainer
} from './ProfileStyles';

const Profile = () => {
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <ProfileBG bg={profileBanner} />
      <FlexBox position="relative">
        <Container jc="space-between">
          <UserPicWrapper>
            <UserPic upperPosition={pathname.includes('edit-profile')}>
              <img src={profileImage} alt="profileImage" />
            </UserPic>
          </UserPicWrapper>
          <Nav>
            <NavLink exact to={`${url}`}>
              About
            </NavLink>
            <NavLink to={`${url}/photos`}>Photos</NavLink>
            <NavLink to={`${url}/friends`}>Friends</NavLink>
          </Nav>
          <EditContainer>
            <NavLink to={`${url}/edit-profile`}>
              <CustomBtn edit>Edit Profile</CustomBtn>
            </NavLink>
          </EditContainer>
        </Container>
      </FlexBox>

      <Route path={`${url}/photos`} exact component={PhotosPage} />
      <Route path={`${url}/friends`} exact component={FriendsPage} />
      <Route path={`${url}/`} exact component={AboutPage} />
      <Route path={`${url}/edit-profile`} exact component={EditProfile} />
    </Wrapper>
  );
};

export default Profile;
