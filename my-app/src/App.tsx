import React from 'react';
import Form from './components/Form';
import Input from './components/Input';
import './App.css';

function App() {

const SendColorToLocalStorage = (e: React.FormEvent) => {
  e.preventDefault()
  console.log(e)
}

  return (
    <div className="App">
      <Form onSubmit={SendColorToLocalStorage}>
        <h1>Form</h1>
<Input type='submit' value='Wyślij'></Input>
      </Form>
    </div>
  );
}

export default App;
