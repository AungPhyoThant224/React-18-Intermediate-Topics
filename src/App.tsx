import "./App.css";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvier } from "./state-management/tasks";

function App() {
  return (
    <TasksProvier>
      <Counter />
      <NavBar />
      <HomePage />
    </TasksProvier>
  );
}

export default App;
