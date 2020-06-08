import ModalActionTypes from './modal-types';

export const openModal = component => ({
  type: ModalActionTypes.OPEN_MODAL,
  payload: component
});

export const closeModal = () => ({
  type: ModalActionTypes.CLOSE_MODAL
});

export const addDataToModal = data => ({
  type: ModalActionTypes.ADD_DATA_TO_MODAL,
  payload: data
});
