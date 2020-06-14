import React from 'react';
import { Nav, FlexBox } from 'components/shared/SharedStyles';
import { Wrapper } from './ProfileHeadStyles';

const ProfileHead = ({ title, amount, navs }) => {
  return (
    <Wrapper>
      <h3>
        {title} {amount ? `(${amount})` : ''}
      </h3>
      <Nav small>
        {navs.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </Nav>
    </Wrapper>
  );
};

export default ProfileHead;
