import produce from 'immer';
import ModalActionTypes from './modal-types';

const INITIAL_STATE = {
  status: false,
  component: null,
  additionalData: null
};

const modalReducer = produce((draft = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.OPEN_MODAL:
      draft.status = true;
      draft.component = action.payload.name;
      draft.additionalData = action.payload.additionalData;
      return draft;
    case ModalActionTypes.ADD_DATA_TO_MODAL:
      draft.additionalData.comments.push(action.payload);
      return draft;
    case ModalActionTypes.CLOSE_MODAL:
      draft = INITIAL_STATE;
      return draft;
    default:
      return draft;
  }
});

export default modalReducer;
