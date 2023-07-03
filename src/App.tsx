import "./App.css";
import { AuthProvider } from "./state-management/auth/";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvier } from "./state-management/tasks";

function App() {
  return (
    <AuthProvider>
      <TasksProvier>
        <Counter />
        <NavBar />
        <HomePage />
      </TasksProvier>
    </AuthProvider>
  );
}

export default App;
