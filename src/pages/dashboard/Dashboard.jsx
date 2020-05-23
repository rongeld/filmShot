import React from 'react';

import { Aside, Feed } from './DashboardStyles';
import { Wrapper } from 'components/shared/SharedStyles';
import { Container } from 'components/shared/SharedStyles';
import UserInfo from 'components/user-info-aside/UserInfo';
import SharePost from 'components/share-post/SharePost';
import Posts from 'components/posts/Posts';
import InfoBlock from 'components/info-block/InfoBlock';
import FriendsZone from 'components/friends-zone/FriendsZone';

const DATA = [
  {
    name: 'Allan Wats',
    mutual: 10,
  },
  {
    name: 'Eldar Broadwej',
    mutual: 1,
  },
  {
    name: 'Nill Tayson',
    mutual: 12,
  },
  {
    name: 'Bill Gates',
    mutual: 2,
  },
];

const WrappedInfo = InfoBlock(FriendsZone);

const Dashboard = () => {
  return (
    <Wrapper>
      <Container>
        <Aside>
          <UserInfo />
        </Aside>
        <Feed>
          <SharePost />
          <Posts />
        </Feed>
        <Aside>
          <WrappedInfo title="Friends Zone" data={DATA} />
          <WrappedInfo title="Recent Notifications" data={DATA} />
        </Aside>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
