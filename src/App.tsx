import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import tasksReducer from "./state-management/reducer/taskReducer";
import TasksContext from "./state-management/context/tasksContext";
import authReducer from "./state-management/reducer/authReducer";
import AuthContext from "./state-management/context/authContext";

function App() {
  const [tasks, taskDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
      <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
        <NavBar />
        <HomePage />
      </AuthContext.Provider>
    </TasksContext.Provider>
  );
}

export default App;
