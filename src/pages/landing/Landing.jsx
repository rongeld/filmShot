/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LandingBG from 'assets/landingBG.jpg';
import Logo from 'components/logo/Logo';
import Input from 'components/form/Input/Input';
import CustomBtn from 'components/form/btn/CustomBtn';
import SelectForm from 'components/form/select/SelectForm';
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUserLoading } from 'redux/user/user-selector';
import {
  signUpStart,
  emailSignInStart,
  forgotPasswordClear
} from 'redux/user/user-actions';
import { age, gender, country } from 'utils/enums';
import {
  Header,
  Container,
  Body,
  LandingWrapper,
  FromWrapper,
  FormHeader,
  SignUpForm,
  Col2
} from './LandingStyles';

const Landing = () => {
  const { register, errors, handleSubmit } = useForm();
  const isLoading = useSelector(selectCurrentUserLoading);
  const dispatch = useDispatch();
  const {
    register: register2,
    errors: errors2,
    handleSubmit: handleSubmit2,
    control: control2
  } = useForm({
    mode: 'onBlur'
  });

  useEffect(() => {
    forgotPasswordClear();
  }, [forgotPasswordClear]);

  const onSubmit = ({ email, password }) => {
    dispatch(emailSignInStart({ email, password }));
  };

  const onSignUp = data => {
    const dataToSend = {
      ...data,
      age: data.age.value,
      gender: data.gender.value,
      country: data.country.value
    };

    dispatch(signUpStart(dataToSend));
  };

  return (
    <LandingWrapper>
      <Header>
        <Container flex-start hideOnSmallScreen>
          <Logo />
          <p style={{ marginLeft: '20px', fontWeight: '500' }}>
            Connect and share with other people
          </p>
        </Container>
        <Container invert center>
          <form
            key={1}
            onSubmit={handleSubmit(onSubmit)}
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              maxWidth: '572px'
            }}
          >
            <Input
              register={register}
              invert
              type="text"
              name="email"
              width="35"
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
            <Input
              register={register}
              invert
              name="password"
              type="password"
              error={errors.password}
              required
              width="35"
              placeholder="Password"
            />
            <CustomBtn isLoading={isLoading[1]} inverted type="submit">
              Login
            </CustomBtn>
          </form>
        </Container>
      </Header>
      <Body>
        <Container center bg={LandingBG} hideOnSmallScreen />
        <Container center column bgOnSmallScreen={LandingBG}>
          {/* <MainText>Create An Account</MainText> */}
          <FromWrapper>
            <FormHeader>
              <h2>Welcome to FilmShot</h2>
            </FormHeader>
            <SignUpForm key={2} onSubmit={handleSubmit2(onSignUp)}>
              <Input
                type="text"
                placeholder="Email"
                name="email"
                error={errors2.email}
                data={{
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Enter a valid email address'
                  }
                }}
                register={register2}
              />
              <Col2>
                <Input
                  type="text"
                  required
                  error={errors2.firstName}
                  placeholder="First Name"
                  name="firstName"
                  register={register2}
                />
                <Input
                  type="text"
                  required
                  error={errors2.lastName}
                  placeholder="Last Name"
                  name="lastName"
                  register={register2}
                />
              </Col2>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                error={errors2.password}
                required
                register={register2}
              />
              <Col2>
                <Controller
                  as={
                    <SelectForm
                      options={gender}
                      placeholder="Gender"
                      error={errors2.gender}
                    />
                  }
                  name="gender"
                  control={control2}
                  rules={{ required: true }}
                />
                <Controller
                  as={
                    <SelectForm
                      options={age}
                      placeholder="Age"
                      error={errors2.age}
                    />
                  }
                  name="age"
                  control={control2}
                  rules={{ required: true }}
                />
              </Col2>
              <Controller
                as={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <SelectForm
                    options={country}
                    placeholder="Country"
                    error={errors2.country}
                  />
                }
                name="country"
                control={control2}
                rules={{ required: true }}
              />
              <CustomBtn isLoading={isLoading[0]} type="submit" fullwidth>
                Create Account
              </CustomBtn>
              <Link to="/forgot-password">Forgot password</Link>
            </SignUpForm>
          </FromWrapper>
        </Container>
      </Body>
    </LandingWrapper>
  );
};

export default Landing;
