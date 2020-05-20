import React from 'react';
import { CustomButtonContainer } from './CustomBtnStyles';

function CustomBtn({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}

export default CustomBtn;
