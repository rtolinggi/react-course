import { useState } from "react";
import Card from "../Ui/Card";
import ExpenseForm from "./ExpenseForm";
import "./newexpenses.css";

const NewExpenses = ({ onAddExpanse }) => {
  const [activeForm, setActiveForm] = useState(false);

  const openFormButton = (
    <button onClick={(e) => setActiveForm(!activeForm)}>Add Expense</button>
  );

  return (
    <Card className="new-expense">
      {activeForm ? (
        <ExpenseForm
          onSaveExpanse={(dataExpanse) => onAddExpanse(dataExpanse)}
          closeForm={(e) => setActiveForm(e)}
        />
      ) : (
        openFormButton
      )}
    </Card>
  );
};

export default NewExpenses;
