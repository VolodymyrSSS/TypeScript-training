import React, { useState } from 'react';
import {TodoProps } from './TaskApp';

interface TaskProps {
    todo: TodoProps;
    onChangeTodo: (updatedTodo: TodoProps) => void;
    onDeleteTodo: (todoId: number) => void;
}

export default function Task({ todo, onChangeTodo, onDeleteTodo }: TaskProps): React.ReactElement {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    let todoContent;

    if (isEditing) {
      todoContent = (
        <>
          <input
            value={todo.title}
            onChange={e => {onChangeTodo({
                ...todo,
                title: e.target.value
              });
            }} />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      );
    } else {
      todoContent = (
        <>
          {todo.title}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      );
    }

    return (
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={e => onChangeTodo({...todo, done: e.target.checked})}
        />
        {todoContent}
        <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
      </label>
    );
  }
  