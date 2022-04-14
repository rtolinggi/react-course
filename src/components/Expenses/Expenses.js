import Expenseltem from "./Expenseltem";
import "./expenses.css";
import Card from "../Ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = ({ ListItems }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterYear = ListItems.filter((el) => {
    const year = new Intl.DateTimeFormat("id-ID", {
      year: "numeric",
    }).format(el.expenseDate);

    const filter = Number(year) === Number(filteredYear);
    return filter;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const renderItems = () => {
    return (
      <>
        {filterYear.length === 0 ? (
          <p style={{ color: "white", textAlign: "center" }}>No Data Result</p>
        ) : (
          filterYear.map((el) => {
            return (
              <Expenseltem
                key={el.id}
                title={el.expenseTitle}
                amount={el.expenseAmount}
                date={el.expenseDate}
              />
            );
          })
        )}
      </>
    );
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {renderItems()}
    </Card>
  );
};

export default Expenses;
