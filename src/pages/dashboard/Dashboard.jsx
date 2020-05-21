import React from 'react';
import { Wrapper, Aside, Feed } from './DashboardStyles';
import { Container } from 'components/shared/SharedStyles';
import UserInfo from 'components/user-info-aside/UserInfo';

const Dashboard = () => {
  return (
    <Wrapper>
      <Container>
        <Aside>
          <UserInfo />
        </Aside>
        <Feed></Feed>
        <Aside></Aside>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
