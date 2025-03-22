import React from 'react';
import FormWithStatusArgs from './components/FormWithStatusArgs';
import Form from './components/Form';
import './App.css';

let statuses = [
  'empty',
  'typing',
  'submitting',
  'success',
  'error',
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <hr />

      <h2>React component with the states in memory using textinput field.</h2>
      <h3>Here is being utilize "declarative programming" which means describing the UI for each visual state rather than micromanaging the UI (imperative).</h3>

      <Form />
      <hr />

      <h2>Pages like this are often called “living styleguides” or “storybooks”.</h2>
      
      {statuses.map(status => (
        <section key={status}>
          <h4>Form ({status}):</h4>
          <FormWithStatusArgs status={status} />
          <hr />
        </section>
      ))}
    </div>
  );
}

export default App;
