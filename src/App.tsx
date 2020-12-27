import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
type FormItem = React.FormEvent<HTMLFormElement>;
interface ITodo {
  text: string;
  complete: boolean;
}

function App(): JSX.Element {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormItem): void => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  return (
    <section className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <form onSubmit={handleSubmit}>
        <h1>TODO LIST</h1>
        <input
          name='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Things to do'
        />
        <input type='submit' value='Add todo' />
      </form>
    </section>
  );
}

export default App;
