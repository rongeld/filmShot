import React from 'react';
import moment from 'moment';
import { FlexBox } from 'components/shared/SharedStyles';
import Avatar from 'components/avatar/Avatar';
import { BsHeart } from 'react-icons/bs';

import { UserInfo } from './FriendsZoneStyles';
import { Link } from 'react-router-dom';

const FriendsZone = ({
  firstName,
  lastName,
  photo,
  createdAt,
  _id,
  pd = false
}) => {
  const currentDate = moment();
  return (
    <Link to={`/profile/${_id}`}>
      <FlexBox
        justify-content="space-between"
        align-items="center"
        margin-bottom="20px"
        pd={pd}
      >
        <FlexBox align-items="center">
          <Avatar image={photo} id={_id} />
          <UserInfo>
            <h5 style={{ color: 'black' }}>{`${firstName} ${lastName}`}</h5>
          </UserInfo>
        </FlexBox>
        <div>
          <span style={{ fontSize: '10px' }}>
            {moment.duration(currentDate.diff(createdAt)).humanize()} ago
          </span>
        </div>
      </FlexBox>
    </Link>
  );
};

export default FriendsZone;
