import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import SelectForm from 'components/form/select/SelectForm';
import { Container, FlexBox } from 'components/shared/SharedStyles';
import CustomBtn from 'components/form/btn/CustomBtn';
import Input from 'components/form/Input/Input';
import {
  TabListComponent,
  TabsComponent,
  TabPanelComponent,
  TabComponent
} from 'pages/profile/about-page/AboutPageStyles';
import { age, gender } from 'utils/enums';
import {
  selectCurrentUser,
  selectCurrentUserLoading
} from 'redux/user/user-selector';
import { updateMeStart } from 'redux/user/user-actions';
import { FormWrapper, Col2, Form, FormLeft } from './EditProfileStyles';

const EditProfile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectCurrentUserLoading);
  const dispatch = useDispatch();
  const defaultValues = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    gender: gender.find(item => item.value === currentUser.gender),
    age: age.find(item => item.value === currentUser.age),
    photoLink:
      'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'
  };
  const [file, setFile] = useState();

  const { register, errors, handleSubmit, control, reset } = useForm({
    defaultValues
  });

  const onSubmit = data => {
    const dataToSend = {
      ...data,
      token: currentUser.token,
      age: data.age.value,
      gender: data.gender.value
    };
    dispatch(updateMeStart(dataToSend));
  };

  const onPhotoChangeHandler = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const resetIndividualField = field => {
    reset(defaultValues);
    if (field === 'photo') setFile('');
  };
  return (
    <Container>
      <TabsComponent>
        <FlexBox shadow margin-right="30px" max-width="290px" width="100%" pd>
          <TabListComponent>
            <TabComponent>Personal Information</TabComponent>
            <TabComponent>Photos</TabComponent>
            <TabComponent>Password</TabComponent>
            <TabComponent>Contact Details</TabComponent>
          </TabListComponent>
        </FlexBox>

        <TabPanelComponent>
          <div>
            <h3>Personal Information</h3>
          </div>

          <FormWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormLeft>
                <Col2>
                  <Input
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    error={errors.firstName}
                    register={register}
                    data={{ minLength: 2 }}
                  />
                  <Input
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    error={errors.lastName}
                    register={register}
                    data={{ minLength: 2 }}
                  />
                </Col2>
                <Col2>
                  <Controller
                    as={
                      <SelectForm
                        options={gender}
                        placeholder="Gender"
                        error={errors.gender}
                      />
                    }
                    name="gender"
                    control={control}
                  />
                  <Controller
                    as={
                      <SelectForm
                        options={age}
                        placeholder="Age"
                        error={errors.age}
                      />
                    }
                    name="age"
                    control={control}
                  />
                </Col2>
              </FormLeft>
              <FlexBox
                align-items="flex-start"
                justify-content="flex-end"
                padding-left="50px"
              >
                <CustomBtn type="submit" isLoading={isLoading[1]}>
                  Apply
                </CustomBtn>
              </FlexBox>
            </Form>
          </FormWrapper>
        </TabPanelComponent>
        <TabPanelComponent>
          <div>
            <h3>Photos</h3>
          </div>
          <FormWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormLeft>
                <Input
                  name="photo"
                  isValid={errors.photo}
                  // register={register}
                  imageLink={defaultValues.photoLink}
                  type="file"
                  onChangeHandler={onPhotoChangeHandler}
                  element="input"
                  resetFile={() => {
                    resetIndividualField('photo');
                  }}
                  file={file}
                />
              </FormLeft>
              <FlexBox
                align-items="flex-start"
                justify-content="flex-end"
                padding-left="50px"
              >
                <CustomBtn type="submit">Apply</CustomBtn>
              </FlexBox>
            </Form>
          </FormWrapper>
        </TabPanelComponent>
        <TabPanelComponent>
          <div>
            <h3>Interests</h3>
          </div>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search
          </p>
        </TabPanelComponent>
        <TabPanelComponent>
          <div>
            <h3>Contact Details</h3>
          </div>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search
          </p>
        </TabPanelComponent>
      </TabsComponent>
    </Container>
  );
};

export default EditProfile;
