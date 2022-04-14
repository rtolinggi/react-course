import Expenseltem from "./Expenseltem";
import "./expenses.css";
import Card from "../Ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = ({ ListItems }) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {ListItems.map((el) => {
        return (
          <Expenseltem
            key={el.id}
            title={el.expenseTitle}
            amount={el.expenseAmount}
            date={el.expenseDate}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
