import React from 'react';
import { FlexBox } from 'components/shared/SharedStyles';
import Avatar from 'components/avatar/Avatar';
import CustomBtn from 'components/form/btn/CustomBtn';

import { Textarea } from './SharePostStyles';

const SharePost = () => {
  return (
    <FlexBox
      padding="20px"
      position="relative"
      background="white"
      align-items="center"
    >
      <Avatar margin-right="20px" transform="scale(1.5)" />
      <Textarea aria-disabled="true" name="share" />
      <CustomBtn share>Share</CustomBtn>
    </FlexBox>
  );
};

export default SharePost;
