import { createSelector } from 'reselect';

const selectModal = state => state.modal;

export default createSelector([selectModal], modal => modal);
