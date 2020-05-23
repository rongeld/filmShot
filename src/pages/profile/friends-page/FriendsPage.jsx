import React from 'react';
import { Container } from 'components/shared/SharedStyles';
import ProfileHead from 'components/profile-head/ProfileHead';

const FriendsPage = () => {
  return (
    <Container>
      <ProfileHead
        title="Friends"
        amount={23}
        navs={['All', 'Recent', 'Request']}
      />
    </Container>
  );
};

export default FriendsPage;
