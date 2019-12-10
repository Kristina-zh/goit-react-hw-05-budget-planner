import types from '../types';

export const saveBudget = budget => ({
  type: types.SAVE_BUDGET,
  payload: {
    budget,
  },
});
