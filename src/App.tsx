import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  const sum = (num1: number, num2: number): number => num1 + num2;
  return (
    <section className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <form>
        <input name='text' placeholder='Things to do' />
        <button type='submit'> Add todo</button>
      </form>
    </section>
  );
}

export default App;
