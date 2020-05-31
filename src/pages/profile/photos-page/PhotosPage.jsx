import React from 'react';

import { Container } from 'components/shared/SharedStyles';
import ProfileHead from 'components/profile-head/ProfileHead';

import { ImagesGrid } from './PhotosPageStyles';

const PhotosPage = ({ posts }) => {
  return (
    <Container column>
      <ProfileHead
        title="Photos"
        amount={posts.length}
        navs={['All', 'Most Popular']}
      />
      {posts.length ? (
        <ImagesGrid>
          {posts.map((item, idx) => (
            <img
              key={idx}
              src={`${process.env.REACT_APP_FILES_API}/${item.photo}`}
              alt="test"
            />
          ))}
        </ImagesGrid>
      ) : (
        <h3>No photos yet</h3>
      )}
    </Container>
  );
};

export default PhotosPage;
