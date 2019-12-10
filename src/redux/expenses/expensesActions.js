import types from '../types';

export const addExpense = expenseObj => ({
  type: types.SAVE_EXPENSE,
  payload: {
    expense: expenseObj,
  },
});

export const deleteExpense = deleteId => ({
  type: types.DELETE_EXPENSE,
  payload: {
    id: deleteId,
  },
});
