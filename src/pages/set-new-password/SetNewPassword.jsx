import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import Input from 'components/form/Input/Input';
import CustomBtn from 'components/form/btn/CustomBtn';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import forgotAnimation from 'assets/forgot.gif';
import { selectForgotPasswordLoading } from 'redux/user/user-selector';
import { updatePasswordStart } from 'redux/user/user-actions';

import { FormWrapper } from '../forgot-password/ForgotPasswordStyles';

const SetNewPassword = () => {
  const { register, errors, handleSubmit } = useForm();
  const { id } = useParams();
  const isLoading = useSelector(selectForgotPasswordLoading);
  const dispatch = useDispatch();

  const onSubmit = ({ password }) => {
    dispatch(updatePasswordStart({ password, id }));
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
        <Input
          register={register}
          name="password"
          type="password"
          error={errors.password}
          required
          placeholder="Set new password"
        />
        <CustomBtn isLoading={isLoading} type="submit">
          Update password
        </CustomBtn>
      </form>
    </FormWrapper>
  );
};

export default SetNewPassword;
