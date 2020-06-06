import React from 'react';
import { useSelector } from 'react-redux';
import { MdCameraAlt } from 'react-icons/md';
import { selectOnlineUsers } from 'redux/notifications/notifications-selector';
import { Wrapper } from './AvatarStyles';

const Avatar = ({ image, id, ...otherProps }) => {
  const onlineUsers = useSelector(selectOnlineUsers);
  const isOnline = onlineUsers.some(item => item._id === id);
  return (
    <Wrapper imageUrl={image} isOnline={isOnline} {...otherProps}>
      {!image && <MdCameraAlt />}
    </Wrapper>
  );
};

export default Avatar;
