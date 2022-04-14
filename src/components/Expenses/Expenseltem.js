import React from "react";
import "./expensltem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";

const Expenseltem = ({ date, title, amount }) => {
  const [newTitle, setNewTitle] = React.useState(title);
  const clickHandler = () => {
    setNewTitle("Updated");
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{newTitle}</h2>
        <div className='expense-item__price'>Rp. {amount}</div>
        <button className='tombol' onClick={clickHandler}>
          Change Title
        </button>
      </div>
    </Card>
  );
};

export default Expenseltem;
