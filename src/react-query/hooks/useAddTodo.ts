import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODO } from "../constant";
import { Todo } from "../services/todoService";
import todoService from "../services/todoService";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,
    onMutate(newTodo) {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODO) || [];
      // Approach : Invalidating the Cache
      // queryClient.invalidateQueries({
      //   queryKey: ['todos']
      // })

      // Approach 2 : Updating the Data in Cache
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODO, (todos = []) => [
        newTodo,
        ...todos,
      ]);
      onAdd();

      return { previousTodos };
    },
    onSuccess(saveTodo, newTodo) {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODO, (todos) =>
        todos?.map((todo) => {
          return todo === newTodo ? saveTodo : todo;
        })
      );
    },
    onError(error, Todo, context) {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODO, context.previousTodos);
    },
  });
};

export default useAddTodo;
