import React from "react";
import Expenses from "./components/Expenses/Expenses";
import ListItems from "./components/ListItems";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  const addExpenseHandler = (expanse) => {
    ListItems.push(expanse);
    console.log(ListItems);
  };
  return (
    <div style={{ padding: "10px" }}>
      <NewExpenses onAddExpanse={addExpenseHandler} />
      <Expenses ListItems={ListItems} />
    </div>
  );
}

export default App;
