import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import Input from 'components/form/Input/Input';
import CustomBtn from 'components/form/btn/CustomBtn';
import { useSelector, useDispatch } from 'react-redux';
import forgotAnimation from 'assets/forgot.gif';
import {
  selectForgotPasswordLoading,
  selectForgotPasswordStatus
} from 'redux/user/user-selector';
import { forgotPasswordStart } from 'redux/user/user-actions';

import { FormWrapper } from './ForgotPasswordStyles';

const ForgotPassword = () => {
  const { register, errors, handleSubmit } = useForm();
  const isLoading = useSelector(selectForgotPasswordLoading);
  const emailSent = useSelector(selectForgotPasswordStatus);
  const dispatch = useDispatch();

  const onSubmit = ({ email }) => {
    dispatch(forgotPasswordStart(email));
  };
  return (
    <FormWrapper>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
          maxWidth: '572px'
        }}
      >
        <img src={forgotAnimation} alt="" />
        {emailSent ? (
          <h3>SUCCESS! Check your mail</h3>
        ) : (
          <Fragment>
            <Input
              register={register}
              type="text"
              name="email"
              error={errors.email}
              data={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Enter a valid email address'
                }
              }}
              required
              placeholder="Email"
            />
            <CustomBtn isLoading={isLoading} type="submit">
              Reset password
            </CustomBtn>
          </Fragment>
        )}
      </form>
    </FormWrapper>
  );
};

export default ForgotPassword;
