import React from 'react';

import { FlexBox } from 'components/shared/SharedStyles';
import { Title } from './InfoBlockStyles';

const InfoBlock = WrappedComponent => ({ title, data }) => {
  return (
    <FlexBox flex-direction="column" shadow pd>
      <Title>{title}</Title>
      <div>
        {data
          .filter((item, index) => index < 4)
          .map((item, idx) => (
            <WrappedComponent key={idx} {...item} />
          ))}
      </div>
    </FlexBox>
  );
};

export default InfoBlock;
