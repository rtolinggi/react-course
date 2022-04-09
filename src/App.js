import Expenseltem from "./components/Expenseltem";

function App() {
  const expenses = [
    {
      id: 1,
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Car Insurance",
      expenseAmount: 294.67,
    },
    {
      id: 2,
      expenseDate: new Date(2021, 3, 12),
      expenseTitle: "Credit Card",
      expenseAmount: 112.51,
    },
    {
      id: 3,
      expenseDate: new Date(2021, 4, 22),
      expenseTitle: "Apartement",
      expenseAmount: 2335.12,
    },
    {
      id: 4,
      expenseDate: new Date(2021, 5, 5),
      expenseTitle: "Bank",
      expenseAmount: 87.2,
    },
  ];
  return (
    <div style={{ padding: "10px" }}>
      <h1>Ayo Mulai</h1>
      {expenses.map((el) => {
        return (
          <Expenseltem
            title={el.expenseTitle}
            amount={el.expenseAmount}
            date={el.expenseDate}
          />
        );
      })}
    </div>
  );
}

export default App;
