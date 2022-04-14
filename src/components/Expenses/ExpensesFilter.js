import Card from "../Ui/Card";
import "./expensesfilter.css";

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const dropdownChangeHandler = (e) => {
    onChangeFilter(e.target.value);
  };
  return (
    <Card className='expenses-filter'>
      <h3>Filter By Year</h3>
      <select
        value={selected}
        onChange={dropdownChangeHandler}
        className='expenses-filter__control'>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
      </select>
    </Card>
  );
};

export default ExpensesFilter;
