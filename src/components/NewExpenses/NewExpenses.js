import { useState } from "react";
import Card from "../Ui/Card";
import ExpenseForm from "./ExpenseForm";
import "./newexpenses.css";

const NewExpenses = ({ onAddExpanse }) => {
  const [activeForm, setActiveForm] = useState(false);
  const saveExpenseHandler = (dataExpanse) => {
    onAddExpanse(dataExpanse);
  };

  const openFormHandler = () => {
    setActiveForm(!activeForm);
  };

  const closeFormHandler = (close) => {
    setActiveForm(close);
  };

  const openFormButton = <button onClick={openFormHandler}>Add Expense</button>;

  return (
    <Card className="new-expense">
      {activeForm ? (
        <ExpenseForm
          onSaveExpanse={saveExpenseHandler}
          closeForm={closeFormHandler}
        />
      ) : (
        openFormButton
      )}
    </Card>
  );
};

export default NewExpenses;
