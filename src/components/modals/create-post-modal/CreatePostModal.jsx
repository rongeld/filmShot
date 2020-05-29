import React, { Fragment, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Input from 'components/form/Input/Input';
import { closeModal } from 'redux/modal/modal-actions';
import { Title } from 'components/info-block/InfoBlockStyles';
import BGOverlay from 'components/modals/bg-overlay/BGOverlayStyles';
import modalSelector from 'redux/modal/modal-selector';
import { selectCurrentUser } from 'redux/user/user-selector';
import CustomBtn from 'components/form/btn/CustomBtn';
import { FlexBox } from 'components/shared/SharedStyles';
import { createPostStart } from 'redux/post/post-actions';
import { selectPostLoading } from 'redux/post/post-selector';
import { Wrapper, ButtonWrapper, Description } from './CreatePostModalStyles';

const CreatePostModal = () => {
  const isActive = useSelector(modalSelector);
  const isLoading = useSelector(selectPostLoading);
  const { _id: author } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [file, setFile] = useState();

  const { register, errors, handleSubmit, reset } = useForm();

  const closeModalHandler = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);

  const onPhotoChangeHandler = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const resetIndividualField = field => {
    reset({ [field]: '' });
    if (field === 'photo') setFile('');
  };

  const onSubmit = data => {
    data.author = author;
    data.photo = data.photo[0];
    dispatch(createPostStart(data));
  };

  const content = (
    <Fragment>
      {isActive && <BGOverlay onClick={closeModalHandler} />}
      <CSSTransition
        in={isActive}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
          <Title>Create post</Title>
          <Description>
            <textarea
              style={{ resize: 'none', marginBottom: '20px' }}
              id=""
              rows="5"
              ref={register}
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
        </Wrapper>
      </CSSTransition>
    </Fragment>
  );

  return createPortal(content, document.getElementById('modal-hook'));
};

export default CreatePostModal;
