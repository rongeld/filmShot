import React from 'react';
import { ReactComponent as Preloader } from 'assets/preloader.svg';

import Wrapper from './LoadingStyles';

const Loading = ({ noPadding }) => {
  return (
    <Wrapper noPadding={noPadding}>
      <Preloader />
    </Wrapper>
  );
};

export default Loading;
