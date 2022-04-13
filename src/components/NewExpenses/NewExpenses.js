import ExpenseForm from "./ExpenseForm";
import "./newexpenses.css";
import ListItems from "../ListItems";

const NewExpenses = ({ onAddExpanse }) => {
  const saveExpenseHandler = (dataExpanse) => {
    const result = {
      id: ListItems.length + 1,
      ...dataExpanse,
    };
    onAddExpanse(result);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpanse={saveExpenseHandler} />
    </div>
  );
};

export default NewExpenses;
