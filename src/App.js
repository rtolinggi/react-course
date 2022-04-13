import Expenses from "./components/Expenses";
import ListItems from "./components/ListItems";

function App() {
  return (
    <div style={{ padding: "10px" }}>
      <h1>Ayo Mulai</h1>
      <Expenses ListItems={ListItems} />
    </div>
  );
}

export default App;
