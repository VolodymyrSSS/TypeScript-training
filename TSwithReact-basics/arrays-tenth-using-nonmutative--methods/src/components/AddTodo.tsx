import React, { useState } from 'react';

interface AddTodoProps {
   onAddTodo: (title: string) => void; // function that takes a string and returns void
}
  

export default function AddTodo({ onAddTodo }: AddTodoProps): React.ReactElement {
  const [title, setTitle] = useState<string>('');

  return (
    <>
      <input
        type='text'
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)} // update state when the input field changes
      />
      <button onClick={() => {
        if(title.trim() === '' ) {
            alert('Please provide a todo title'); // add validation to avoid empty todos
            return;
        }

        onAddTodo(title); // call the parent function to add the todo

        setTitle(''); // clear the input field
      }}>Add</button>
    </>
  )
}
