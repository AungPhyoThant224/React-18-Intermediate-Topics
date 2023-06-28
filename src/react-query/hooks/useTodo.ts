import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODO } from "../constant";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodo = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODO,
    queryFn: fetchTodos,
    staleTime: 10 * 1000, //10s
  });
};

export default useTodo;
