import React from 'react';
import moment from 'moment';
import { FlexBox } from 'components/shared/SharedStyles';
import Avatar from 'components/avatar/Avatar';
import { BsHeart } from 'react-icons/bs';

import { UserInfo } from './FriendsZoneStyles';

const FriendsZone = ({ firstName, lastName, photo, createdAt, pd = false }) => {
  const currentDate = moment();
  return (
    <FlexBox
      justify-content="space-between"
      align-items="center"
      margin-bottom="20px"
      pd={pd}
    >
      <FlexBox align-items="center">
        <Avatar image={photo} />
        <UserInfo>
          <h5>{`${firstName} ${lastName}`}</h5>
        </UserInfo>
      </FlexBox>
      <div>
        <span style={{ fontSize: '10px' }}>
          {moment.duration(currentDate.diff(createdAt)).humanize()} ago
        </span>
      </div>
    </FlexBox>
  );
};

export default FriendsZone;
