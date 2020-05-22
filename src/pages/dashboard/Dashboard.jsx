import React from 'react';
import { Wrapper, Aside, Feed } from './DashboardStyles';
import { Container } from 'components/shared/SharedStyles';
import UserInfo from 'components/user-info-aside/UserInfo';
import SharePost from 'components/share-post/SharePost';
import Posts from 'components/posts/Posts';

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
        <Aside></Aside>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
