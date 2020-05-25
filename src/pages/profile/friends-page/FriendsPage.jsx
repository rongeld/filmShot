import React from 'react';
import { Container } from 'components/shared/SharedStyles';
import ProfileHead from 'components/profile-head/ProfileHead';
import FriendsZone from 'components/friends-zone/FriendsZone';
import { FriendsGrid } from './FriendsPageStyles';

const DATA = [
  {
    name: 'Allan Wats',
    mutual: 10
  },
  {
    name: 'Eldar Broadwej',
    mutual: 1
  },
  {
    name: 'Nill Tayson',
    mutual: 12
  },
  {
    name: 'Bill Gates',
    mutual: 2
  }
];

const FriendsPage = () => {
  return (
    <Container column>
      <ProfileHead
        title="Friends"
        amount={23}
        navs={['All', 'Recent', 'Request']}
      />
      <FriendsGrid>
        {DATA.map((item, idx) => (
          <FriendsZone key={idx} name={item.name} mutual={item.mutual} pd />
        ))}
      </FriendsGrid>
    </Container>
  );
};

export default FriendsPage;
