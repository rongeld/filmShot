import { createSelector } from 'reselect';

const selectModal = state => state.modal;

export const selectModalStatus = createSelector(
  [selectModal],
  modal => modal.status
);

export const selectModalComponent = createSelector(
  [selectModal],
  modal => modal.component
);
export const selectModalData = createSelector(
  [selectModal],
  modal => modal.additionalData
);
