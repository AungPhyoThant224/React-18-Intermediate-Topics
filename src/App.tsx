import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksProvier from "./state-management/TasksProvier";

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
