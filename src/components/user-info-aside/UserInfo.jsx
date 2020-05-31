import React from 'react';
import { useSelector } from 'react-redux';
import { FlexBox } from 'components/shared/SharedStyles';
import Avatar from 'components/avatar/Avatar';
import { selectCurrentUser } from 'redux/user/user-selector';

import { Header, Quote } from './UserInfoStyles';

const UserInfo = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <FlexBox flex-direction="column" background="white" shadow>
      <Header
        bg={`${process.env.REACT_APP_FILES_API}/${currentUser.profileCover}`}
      >
        <Avatar image={currentUser.photo} />
      </Header>
      <Quote>
        <h3>{`${currentUser?.firstName} ${currentUser?.lastName}`}</h3>
        <p style={{ fontSize: '12.5px', lineHeight: '20px' }}>
          Any one can join with but Social network us if you want Any one can
          join with us if you want
        </p>
      </Quote>
    </FlexBox>
  );
};

export default UserInfo;
