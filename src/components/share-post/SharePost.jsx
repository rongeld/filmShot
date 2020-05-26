import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FlexBox } from 'components/shared/SharedStyles';
import Avatar from 'components/avatar/Avatar';
import { MdAddAPhoto } from 'react-icons/md';
import { openModal } from 'redux/modal/modal-actions';
import CreatePostModal from 'components/modals/create-post-modal/CreatePostModal';
import { AddWrapper } from './SharePostStyles';

const SharePost = () => {
  const dispatch = useDispatch();

  const openModalHandler = useCallback(() => dispatch(openModal()), [dispatch]);

  return (
    <FlexBox
      padding="20px"
      position="relative"
      background="white"
      align-items="center"
      justify-content="space-between"
    >
      <Avatar margin-right="20px" transform="scale(1.5)" />
      {/* <Textarea aria-disabled="true" name="share" /> */}
      <AddWrapper onClick={openModalHandler}>
        <MdAddAPhoto />
      </AddWrapper>
      <CreatePostModal />
    </FlexBox>
  );
};

export default SharePost;
