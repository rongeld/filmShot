import React from 'react';
import {
  InputWrapper,
  Icon,
  InputForm,
  ImageWrapper,
  DeleteBtn
} from './InputStyles';

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
  file,
  resetFile,
  onChangeHandler,
  imageLink,
  ...otherProps
}) => (
  <InputWrapper width={width} invert={invert} error={error} flex={flex}>
    <Icon>{children}</Icon>
    <InputForm
      ref={register && register(data || { required })}
      invert={invert}
      onChange={onChangeHandler}
      {...otherProps}
    />
    {(file || imageLink) && (
      <ImageWrapper>
        <img style={{ width: '100%' }} src={file || imageLink} alt="" />
        {file && (
          <DeleteBtn
            type="button"
            value="x"
            onClick={() => {
              resetFile();
            }}
          />
        )}
      </ImageWrapper>
    )}
  </InputWrapper>
);

export default Input;
