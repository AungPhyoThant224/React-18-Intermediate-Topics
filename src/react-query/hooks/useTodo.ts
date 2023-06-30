import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODO } from "../constant";
import { Todo } from "../services/todoService";
import todoService from "../services/todoService";

const useTodo = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODO,
    queryFn: todoService.getAll,
    staleTime: 10 * 1000, //10s
  });
};

export default useTodo;
