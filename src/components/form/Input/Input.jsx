import React from 'react';
import { InputWrapper, Icon, InputForm } from './InputStyles';

const Input = ({
  width,
  invert = false,
  register,
  required,
  error,
  data,
  icon,
  children,
  flex,
  ...otherProps
}) => (
  <InputWrapper width={width} invert={invert} error={error} flex={flex}>
    <Icon>{children}</Icon>
    <InputForm
      ref={register && register(data || { required })}
      invert={invert}
      {...otherProps}
    />
  </InputWrapper>
);

export default Input;
