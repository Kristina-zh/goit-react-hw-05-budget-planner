import types from '../types';

const expenseReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.SAVE_EXPENSE:
      return [payload.expense, ...state];

    case types.DELETE_EXPENSE:
      return state.filter(expense => expense.id !== payload);

    default:
      return state;
  }
};

export default expenseReducer;
