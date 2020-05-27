import React, { Suspense, lazy } from 'react';
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
import Loading from 'components/loading-component/Loading';

import {
  ProfileBG,
  UserPicWrapper,
  UserPic,
  EditContainer
} from './ProfileStyles';

const PhotosPage = lazy(() => import('pages/profile/photos-page/PhotosPage'));
const FriendsPage = lazy(() =>
  import('pages/profile/friends-page/FriendsPage')
);
const AboutPage = lazy(() => import('pages/profile/about-page/AboutPage'));
const EditProfile = lazy(() =>
  import('pages/profile/edit-profile/EditProfile')
);

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
      <Suspense fallback={<Loading />}>
        <Route path={`${url}/photos`} exact component={PhotosPage} />
        <Route path={`${url}/friends`} exact component={FriendsPage} />
        <Route path={`${url}/`} exact component={AboutPage} />
        <Route path={`${url}/edit-profile`} exact component={EditProfile} />
      </Suspense>
    </Wrapper>
  );
};

export default Profile;
