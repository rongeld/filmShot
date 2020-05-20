import React from 'react';
import { Wrapper } from './AvatarStyles';
import { MdCameraAlt } from 'react-icons/md';

const Avatar = ({ url, name }) => (
  <Wrapper>{url ? <img src={url} alt={name} /> : <MdCameraAlt />}</Wrapper>
);

export default Avatar;
