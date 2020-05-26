import React, { Fragment, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { closeModal } from 'redux/modal/modal-actions';
import { Title } from 'components/info-block/InfoBlockStyles';
import BGOverlay from 'components/modals/bg-overlay/BGOverlayStyles';
import modalSelector from 'redux/modal/modal-selector';
import { Wrapper } from './CreatePostModalStyles';

const CreatePostModal = () => {
  const isActive = useSelector(modalSelector);
  const dispatch = useDispatch();

  const closeModalHandler = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);

  const content = (
    <Fragment>
      {isActive && <BGOverlay onClick={closeModalHandler} />}
      <CSSTransition
        in={isActive}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <Wrapper>
          <Title>Create post</Title>
          <div>SOME TEXT TO FILL</div>
        </Wrapper>
      </CSSTransition>
    </Fragment>
  );

  return createPortal(content, document.getElementById('modal-hook'));
};

export default CreatePostModal;
