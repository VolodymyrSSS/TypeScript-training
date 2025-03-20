import React from 'react';
import { TodoProps } from './TaskApp';
import Task from './Task';

export interface TaskListProps {
    todos: TodoProps[];
    onChangeTodo: (updatedTodo: TodoProps) => void;
    onDeleteTodo: (todoId: number) => void;
  }

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}: TaskListProps): React.ReactElement {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onChangeTodo={onChangeTodo}
            onDeleteTodo={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}
