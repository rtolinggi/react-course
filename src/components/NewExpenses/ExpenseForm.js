import React, { useState } from "react";
import "./expenseform.css";

const ExpenseForm = ({ onSaveExpanse }) => {
  const [formData, setFormData] = useState({
    expanseDate: "",
    expanseTitle: "",
    expanseAmount: "",
  });

  const { expanseTitle, expanseAmount, expanseDate } = formData;

  const inputHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const postData = (e) => {
    e.preventDefault();
    const expenseData = {
      expanseDate: new Date(expanseDate),
      expanseTitle,
      expanseAmount: Number(expanseAmount),
    };
    onSaveExpanse(expenseData);
    setFormData({
      expanseTitle: "",
      expanseAmount: "",
      expanseDate: "",
    });
  };

  return (
    <form onSubmit={postData}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={inputHandler}
            value={expanseTitle}
            name='expanseTitle'
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            name='expanseAmount'
            min='0.01'
            step='0.01'
            onChange={inputHandler}
            value={expanseAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            name='expanseDate'
            min='2019-01-01'
            max='2022-12-31'
            value={expanseDate}
            onChange={inputHandler}
          />
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
