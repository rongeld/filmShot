import React from 'react';
import { FlexBox } from 'components/shared/SharedStyles';
import Avatar from 'components/avatar/Avatar';
import { Header, Quote } from './UserInfoStyles';

const UserInfo = () => {
  return (
    <FlexBox flex-direction="column" background="white" shadow>
      <Header>
        <Avatar />
      </Header>
      <Quote>
        <h3>Madison Howard</h3>
        Any one can join with but Social network us if you want Any one can join
        with us if you want
      </Quote>
    </FlexBox>
  );
};

export default UserInfo;