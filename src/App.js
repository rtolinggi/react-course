import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ListItems from "./components/ListItems";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  const [expensesData, setExpensesData] = useState(ListItems);
  const addExpenseHandler = (expanse) => {
    const pushExpanse = {
      id: expensesData.length + 1,
      ...expanse,
    };
    setExpensesData((prevState) => {
      return [pushExpanse, ...prevState];
    });
  };

  return (
    <div style={{ padding: "10px" }}>
      <NewExpenses onAddExpanse={addExpenseHandler} />
      <Expenses ListItems={expensesData} />
    </div>
  );
}

export default App;
