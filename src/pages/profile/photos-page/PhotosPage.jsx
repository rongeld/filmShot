import React from 'react';
import { Container } from 'components/shared/SharedStyles';
import ProfileHead from 'components/profile-head/ProfileHead';

const PhotosPage = () => {
  return (
    <Container>
      <ProfileHead title="Photos" amount={23} navs={['All', 'Most Popular']} />
    </Container>
  );
};

export default PhotosPage;