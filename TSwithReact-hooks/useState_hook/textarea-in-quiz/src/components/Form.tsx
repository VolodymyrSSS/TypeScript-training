import React, { useState } from 'react';
import { submitForm } from '../helpers/submitForm';

export default function Form() {
  const [answer, setAnswer] = useState<string>('');
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<'typing' | 'submitting' | 'success'>('typing');

  if (status === 'success') {
    return <h2 style={{color:'green'}}>That's right!</h2>
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();  // prevent default form behavior
    setStatus('submitting'); // update status to "submittin"
    try {
      await submitForm(answer); // call submitForm helper
      setStatus('success'); // transition to success state
    } catch (err) {
      setStatus('typing'); // go back to typing state
      setError(err as Error); // set the error
    }
  }

  function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        <b>Question: </b>In which city is there a billboard that turns air into drinkable water?
      </p>

      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />

        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>

        {error !== null &&
          <h3 style={{color:'red'}}>
            {error.message}
          </h3>
        }
      </form>
    </>
  );
}

