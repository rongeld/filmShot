import React from 'react';
import { useForm, Controller } from 'react-hook-form';

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
import { age, gender, country } from 'utils/enums';

import { FormWrapper, Col2, Form, FormLeft } from './EditProfileStyles';

const EditProfile = () => {
  const { register, errors, handleSubmit, control } = useForm({
    defaultValues: {
      firstName: 'Madison',
      lastName: 'Howard',
      gender: { value: 'man', label: 'Man' },
      age: { value: 'adult', label: '+18' }
    }
  });

  const onSubmit = data => {
    console.log(data);
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
                <CustomBtn type="submit">Apply</CustomBtn>
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
                <Col2>
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    error={errors.name}
                    register={register}
                    data={{ minLength: 2 }}
                  />
                  <Input
                    type="text"
                    placeholder="Surname"
                    name="surname"
                    error={errors.surname}
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
