export const getBudget = state => state.budget;

export const getExpenses = state => state.expenses;

export const getTotalAmount = state => {
  const expenses = getExpenses(state);
  return expenses.reduce((acc, el) => acc + Number(el.amount), 0);
};

export const getSelectedExpense = state => state.expenses.id;

export const getBalance = state => {
  return Number(getBudget(state)) - getTotalAmount(state);
};
