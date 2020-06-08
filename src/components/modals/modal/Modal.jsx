import React, { Fragment, useCallback, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { closeModal } from 'redux/modal/modal-actions';
import BGOverlay from 'components/modals/bg-overlay/BGOverlayStyles';
import Loading from 'components/loading-component/Loading';
import {
  selectModalStatus,
  selectModalComponent
} from 'redux/modal/modal-selector';
import { Wrapper } from './ModalStyles';

const Modal = () => {
  const isActive = useSelector(selectModalStatus);
  const modalComponent = useSelector(selectModalComponent);
  const dispatch = useDispatch();
  let LazyComponent;

  const closeModalHandler = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);

  if (isActive) {
    LazyComponent = React.lazy(() =>
      import(`../modalsComponents/${modalComponent}`)
    );
  }
  const content = (
    <Fragment>
      {isActive && <BGOverlay onClick={closeModalHandler} />}
      <CSSTransition
        in={isActive}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <Wrapper widthBox={modalComponent}>
          <Suspense fallback={<Loading />}>
            {isActive && <LazyComponent />}
          </Suspense>
        </Wrapper>
      </CSSTransition>
    </Fragment>
  );

  return createPortal(content, document.getElementById('modal-hook'));
};

export default Modal;
