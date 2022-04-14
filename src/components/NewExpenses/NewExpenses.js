import ExpenseForm from "./ExpenseForm";
import "./newexpenses.css";

const NewExpenses = ({ onAddExpanse }) => {
  const saveExpenseHandler = (dataExpanse) => {
    onAddExpanse(dataExpanse);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpanse={saveExpenseHandler} />
    </div>
  );
};

export default NewExpenses;
