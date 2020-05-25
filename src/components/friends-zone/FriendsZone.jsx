import React from 'react';

import { FlexBox } from 'components/shared/SharedStyles';
import Avatar from 'components/avatar/Avatar';
import { BsHeart } from 'react-icons/bs';

import { UserInfo } from './FriendsZoneStyles';

const FriendsZone = ({ name, mutual, pd = false }) => {
  return (
    <FlexBox
      justify-content="space-between"
      align-items="center"
      margin-bottom="20px"
      pd={pd}
    >
      <FlexBox align-items="center">
        <Avatar />
        <UserInfo>
          <h5>{name}</h5>
          <p>{mutual} Mutual</p>
        </UserInfo>
      </FlexBox>
      <div>
        <BsHeart />
      </div>
    </FlexBox>
  );
};

export default FriendsZone;
