import React from 'react';

import { InputWrapper, InputForm } from './InputStyles';

const Input = ({ handleChange, ...otherProps }) => (
  <InputWrapper>
    <InputForm onChange={handleChange} {...otherProps} />
  </InputWrapper>
);

export default Input;
