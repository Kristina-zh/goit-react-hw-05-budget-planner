import { connect } from 'react-redux';
import { saveBudget } from '../redux/budget/budgetActions';
import BudgetForm from './BudgetForm';

const mapDispatchToProps = dispatch => ({
  onSave: budget => dispatch(saveBudget(budget)),
});

export default connect(null, mapDispatchToProps)(BudgetForm);
