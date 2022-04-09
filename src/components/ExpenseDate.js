import "./expenseDate.css";

function ExpenseDate({ date }) {
  return (
    <div className='expense-date'>
      <div className='expense month'>{date.getMonth()}</div>
      <div className='expense date'>{date.getDate()}</div>
      <div className='expense year'>{date.getFullYear()}</div>
    </div>
  );
}

export default ExpenseDate;
