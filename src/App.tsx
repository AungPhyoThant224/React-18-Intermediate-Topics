import "./App.css";
import { AuthProvider } from "./state-management/auth/";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvier } from "./state-management/tasks";

function App() {
  return (
    <AuthProvider>
      <TasksProvier>
        <NavBar />
        <HomePage />
      </TasksProvier>
    </AuthProvider>
  );
}

export default App;
