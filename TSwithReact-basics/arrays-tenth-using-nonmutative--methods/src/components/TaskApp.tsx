import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';
import { getNextId } from '../helpers/getNextId'; 

export interface TodoProps {
    id: number;
    title: string;
    done: boolean;
}

const initialTodos: TodoProps[] = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp(): React.ReactElement {
  const [todos, setTodos] = useState<TodoProps[]>(initialTodos);

  function handleAddTodo(title: string): void {
    setTodos([
      ...todos,
      {
        id: getNextId(todos), // generate the next id
        title: title.trim(), // trim the input to remove extra spaces
        done: false // new todos are not done by default
      }
    ]);

    // or might be like:
    // const newTodo: TodoProps = {
    //     id: getNextId(todos),
    //     title: title.trim(),
    //     done: false
    // };
    // setTodos((prevTodos) => [...prevTodos, newTodo]); // Use functional state update for safety
  }

  function handleChangeTodo(nextTodo: TodoProps): void {
    setTodos(todos.map(t => {
        if (t.id === nextTodo.id) {
            return nextTodo; // replace the updated todo if id matches
        } else {
            return t;
        }
    }));

    // or might be like:
    // setTodos((prevTodos) =>
    //     prevTodos.map((todo) =>
    //       todo.id === nextTodo.id ? nextTodo : todo
    //     )
    //   );
  }

  function handleDeleteTodo(todoId: number): void {
    setTodos(todos.filter(t => t.id !== todoId)); // filter out the selected todo

    // or might be like:
    // setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
