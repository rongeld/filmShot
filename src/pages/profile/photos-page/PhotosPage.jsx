import React from 'react';
import { Container } from 'components/shared/SharedStyles';
import ProfileHead from 'components/profile-head/ProfileHead';

import imageHolder from 'assets/photo-1.jpg';

import { ImagesGrid } from './PhotosPageStyles';

const DATA = new Array(22).fill(imageHolder);

const PhotosPage = () => {
  return (
    <Container column>
      <ProfileHead title="Photos" amount={23} navs={['All', 'Most Popular']} />
      <ImagesGrid>
        {DATA.map((item, idx) => (
          <img key={idx} src={item} alt="test" />
        ))}
      </ImagesGrid>
    </Container>
  );
};

export default PhotosPage;
