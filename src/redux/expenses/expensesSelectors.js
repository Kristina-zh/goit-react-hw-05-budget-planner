export const getExpenses = state => state.expenses;

export const getAmount = state => state.expenses.amount;

export const getTotalAmount = () => {
  const amounts = getAmount(state);
  return amounts.reduce((acc, amount) => acc + amount, 0);
};

export const getSelectedExpense = state => state.expenses.id;

// export const getBalance = () => {
//   return;
// };
