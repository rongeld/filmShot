import React, { Suspense, lazy, useEffect } from 'react';
import {
  NavLink,
  useRouteMatch,
  Route,
  useLocation,
  useParams,
  Redirect
} from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import profileBanner from 'assets/profile-banner.jpg';
import {
  Nav,
  FlexBox,
  Container,
  Wrapper
} from 'components/shared/SharedStyles';

import CustomBtn from 'components/form/btn/CustomBtn';
import Loading from 'components/loading-component/Loading';
import { getSingleUserStart, removeSingleUser } from 'redux/user/user-actions';
import { selectSingleUser } from 'redux/user/user-selector';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from 'redux/user/user-selector';
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
  const { id } = useParams();
  const dispatch = useDispatch();

  const user = useSelector(selectSingleUser);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(getSingleUserStart(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(removeSingleUser());
    };
  }, [dispatch]);

  return (
    <Wrapper>
      <ProfileBG
        bg={
          user?.profileCover &&
          `${process.env.REACT_APP_FILES_API}/${user.profileCover}`
        }
      >
        {user?.profileCover ? null : <PulseLoader color={'white'} />}
      </ProfileBG>
      <FlexBox position="relative">
        <Container jc="space-between">
          <UserPicWrapper>
            <UserPic
              imagUrl={
                user?.photo &&
                `${process.env.REACT_APP_FILES_API}/${user.photo}`
              }
              upperPosition={pathname.includes('edit-profile')}
            >
              {user?.photo ? null : <PulseLoader color={'white'} />}
            </UserPic>
          </UserPicWrapper>
          <Nav>
            <NavLink exact to={`${url}`}>
              About
            </NavLink>
            <NavLink to={`${url}/photos`}>Photos</NavLink>
            <NavLink to={`${url}/friends`}>Friends</NavLink>
          </Nav>
          {currentUser?.id === id ? (
            <EditContainer>
              <NavLink to={`${url}/edit-profile`}>
                <CustomBtn edit>Edit Profile</CustomBtn>
              </NavLink>
            </EditContainer>
          ) : (
            <h4>
              {!user ? (
                <PulseLoader size="5" color={'lightgrey'} />
              ) : (
                user.firstName + ' ' + user.lastName
              )}
            </h4>
          )}
        </Container>
      </FlexBox>
      <Suspense fallback={<Loading />}>
        <Route
          path={`${url}/photos`}
          exact
          component={() => <PhotosPage posts={user.posts} />}
        />
        <Route path={`${url}/friends`} exact component={FriendsPage} />
        <Route
          path={`${url}/`}
          exact
          component={() => <AboutPage {...user} />}
        />
        <Route path={`${url}/edit-profile`} exact component={EditProfile} />
      </Suspense>
    </Wrapper>
  );
};

export default Profile;
