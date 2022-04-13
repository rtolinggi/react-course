import "./expensltem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
const Expenseltem = ({ date, title, amount }) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>Rp. {amount}</div>
      </div>
    </Card>
  );
};

export default Expenseltem;
