import "./expenseDate.css";

function ExpenseDate({ date }) {
  const monthName = new Intl.DateTimeFormat("id-ID", { month: "long" }).format(
    date
  );
  const dayName = new Intl.DateTimeFormat("id-ID", { day: "2-digit" }).format(
    date
  );
  return (
    <div className='expense-date'>
      <div className='expense month'>{monthName}</div>
      <div className='expense date'>{dayName}</div>
      <div className='expense year'>{date.getFullYear()}</div>
    </div>
  );
}

export default ExpenseDate;
