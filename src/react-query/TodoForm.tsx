import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodo";
import axios from "axios";

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todosf", todo)
        .then((res) => res.data),
    onSuccess(saveTodo, newTodo) {
      // Approach : Invalidating the Cache
      // queryClient.invalidateQueries({
      //   queryKey: ['todos']
      // })

      // Approach 2 : Updating the Data in Cache
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        saveTodo,
        ...(todos || []),
      ]);
    },
  });

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value) {
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
          }
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
