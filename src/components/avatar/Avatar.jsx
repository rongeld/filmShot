import React from 'react';
import { MdCameraAlt } from 'react-icons/md';
import { Wrapper } from './AvatarStyles';

const Avatar = ({ image, ...otherProps }) => {
  return (
    <Wrapper imageUrl={image} {...otherProps}>
      {!image && <MdCameraAlt />}
    </Wrapper>
  );
};

export default Avatar;
