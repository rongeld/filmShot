import React from 'react';
import { ReactComponent as Preloader } from 'assets/preloader.svg';

import Wrapper from './LoadingStyles';

const Loading = () => {
  return (
    <Wrapper>
      <Preloader />
    </Wrapper>
  );
};

export default Loading;
