import types from '../types';

const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.SAVE_BUDGET:
      return payload.budget;

    default:
      return state;
  }
};

export default budgetReducer;
