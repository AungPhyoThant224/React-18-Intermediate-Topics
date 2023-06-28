import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODO } from "../constant";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Todo>("/todos");

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodo = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODO,
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000, //10s
  });
};

export default useTodo;
