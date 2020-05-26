import produce from 'immer';
import ModalActionTypes from './modal-types';

const modalReducer = produce((draft = false, action) => {
  switch (action.type) {
    case ModalActionTypes.OPEN_MODAL:
      draft = true;
      return draft;
    case ModalActionTypes.CLOSE_MODAL:
      draft = false;
      return draft;
    default:
      return draft;
  }
});

export default modalReducer;
