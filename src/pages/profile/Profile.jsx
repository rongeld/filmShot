import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProtectedRoute from 'components/routes/ProtectedRoute';
import profileBanner from 'assets/profile-banner.jpg';
import { Route } from 'react-router-dom';

import { Wrapper } from 'components/shared/SharedStyles';

import PhotosPage from 'pages/profile/photos-page/PhotosPage';

import { ProfileBG } from './ProfileStyles';

const Profile = () => {
  const { url } = useRouteMatch();
  return (
    <Wrapper>
      <ProfileBG bg={profileBanner} />
      <Link to={`/profile/photos`}>Photos</Link>
      <Route path={`${url}/photos`} exact component={PhotosPage} />
    </Wrapper>
  );
};

export default Profile;
