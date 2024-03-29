import React from 'react';
import styled from 'styled-components';
import BudgetForm from './BudgetFormContainer';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';
import Values from './Values';
import { connect } from 'react-redux';
import { getExpenses } from '../redux/Selectors';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({ expenses }) => (
  <Container>
    <BudgetForm />
    <Values />
    <ExpenseForm />
    {expenses.length > 0 && <ExpensesTable />}
  </Container>
);

const mapStateToProps = store => ({
  expenses: getExpenses(store),
});

export default connect(mapStateToProps, null)(App);
