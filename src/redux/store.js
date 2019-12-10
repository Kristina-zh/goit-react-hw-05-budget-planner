import { createStore, combineReducers } from 'redux';
import budgetReducers from './budget/budgetReducers';
import expensesReducers from './expenses/expensesReducers';

const rootReducer = combineReducers({
  budget: budgetReducers,
  expenses: expensesReducers,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
