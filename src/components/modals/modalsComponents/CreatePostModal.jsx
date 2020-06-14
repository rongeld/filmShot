import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import Input from 'components/form/Input/Input';
import { Title } from 'components/info-block/InfoBlockStyles';
import { selectCurrentUser } from 'redux/user/user-selector';
import CustomBtn from 'components/form/btn/CustomBtn';
import { FlexBox } from 'components/shared/SharedStyles';
import { createPostStart } from 'redux/post/post-actions';
import { selectPostLoading } from 'redux/post/post-selector';
import {
  ButtonWrapper,
  Description
} from '../create-post-modal/CreatePostModalStyles';

const CreatePostModal = () => {
  const isLoading = useSelector(selectPostLoading);
  const { _id: author } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [file, setFile] = useState();

  const { register, errors, handleSubmit, reset } = useForm();

  const onPhotoChangeHandler = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const resetIndividualField = field => {
    reset({ [field]: '' });
    if (field === 'photo') setFile('');
  };

  const onSubmit = async data => {
    data.author = author;
    data.photo = data.photo[0];
    await dispatch(createPostStart(data));
    setFile(null);
  };
  return (
    <Fragment>
      <Title>Create post</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Description>
          <textarea
            style={{
              resize: 'none',
              marginBottom: '20px',
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI'"
            }}
            id=""
            rows="5"
            ref={register({ required: true })}
            name="description"
            placeholder="Describe photo..."
          />
        </Description>
        <ButtonWrapper>
          <Input
            name="photo"
            isValid={errors.photo}
            register={register}
            type="file"
            onChangeHandler={onPhotoChangeHandler}
            element="input"
            noBorder
            resetFile={() => {
              resetIndividualField('photo');
            }}
            file={file}
          />
        </ButtonWrapper>

        <FlexBox justify-content="flex-end">
          <CustomBtn type="submit" isLoading={isLoading}>
            Post
          </CustomBtn>
        </FlexBox>
      </form>
    </Fragment>
  );
};

export default CreatePostModal;
