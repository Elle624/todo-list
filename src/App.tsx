import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
type FormItem = React.FormEvent<HTMLFormElement>;

function App(): JSX.Element {
  const [text, setText] = useState<string>('');
  const handleSubmit = (e: FormItem): void => {
    e.preventDefault();
    setText('');
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
