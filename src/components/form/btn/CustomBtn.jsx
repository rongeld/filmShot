import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { CustomButtonContainer } from './CustomBtnStyles';
import variables from 'styles/variables';

function CustomBtn({ children, isLoading = false, ...props }) {
  return (
    <CustomButtonContainer {...props} disabled={isLoading}>
      {children}
      <PulseLoader
        color={props.inverted ? variables['theme-color'] : ' white'}
        size={5}
        css={{
          marginLeft: '5px'
        }}
        loading={isLoading}
      />
    </CustomButtonContainer>
  );
}

export default CustomBtn;
