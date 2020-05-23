import React from 'react';
import { Nav, FlexBox } from 'components/shared/SharedStyles';

const ProfileHead = ({ title, amount, navs }) => {
  return (
    <FlexBox
      width="100%"
      padding-left="325px"
      padding-right="30px"
      align-items="center"
      justify-content="space-between"
      margin-top="30px"
    >
      <h3>
        {title} {amount ? `(${amount})` : ''}
      </h3>
      <Nav small>
        {navs.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </Nav>
    </FlexBox>
  );
};

export default ProfileHead;
