import React, { useState } from "react";
import "./expenseform.css";

const ExpenseForm = ({ onSaveExpanse, closeForm }) => {
  const [formData, setFormData] = useState({
    expenseDate: "",
    expenseTitle: "",
    expenseAmount: "",
  });

  const { expenseTitle, expenseAmount, expenseDate } = formData;

  const inputHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const closeFormHandler = () => {
    closeForm(false);
  };

  const postData = (e) => {
    e.preventDefault();
    const expenseData = {
      expenseDate: new Date(expenseDate),
      expenseTitle,
      expenseAmount: Number(expenseAmount),
    };
    onSaveExpanse(expenseData);
    setFormData({
      expenseTitle: "",
      expenseAmount: "",
      expenseDate: "",
    });
  };

  return (
    <form onSubmit={postData}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={inputHandler}
            value={expenseTitle}
            name="expenseTitle"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="expenseAmount"
            min="0.01"
            step="0.01"
            onChange={inputHandler}
            value={expenseAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="expenseDate"
            min="2019-01-01"
            max="2022-12-31"
            value={expenseDate}
            onChange={inputHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Submit</button>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={closeFormHandler}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
