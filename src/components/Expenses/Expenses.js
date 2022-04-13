import Expenseltem from "./Expenseltem";
import "./expenses.css";
import Card from "../Ui/Card";

const Expenses = ({ ListItems }) => {
  return (
    <Card className='expenses'>
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
