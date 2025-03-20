import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

export interface TodoProps {
    id: number;
    title: string;
    done: boolean;
}

let nextId: number = 3;

const initialTodos: TodoProps[] = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp(): React.ReactElement {
  const [todos, setTodos] = useState<TodoProps[]>(initialTodos);

  function handleAddTodo(title: string): void {
    todos.push({
      id: nextId++,
      title: title,
      done: false
    });
  }

  function handleChangeTodo(nextTodo: TodoProps): void {
    const todo = todos.find(t => t.id === nextTodo.id);
      
    // The .find() method may not find a matching element in the array and can returns undefined
    if (todo) { // check if 'todo' exists
        todo.title = nextTodo.title;
        todo.done = nextTodo.done;
      } else {
        console.warn(`Todo with id ${nextTodo.id} not found.`);
    }
  }

  function handleDeleteTodo(todoId: number): void {
    const index = todos.findIndex(t => t.id === todoId);
    todos.splice(index, 1);
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
