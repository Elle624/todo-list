import React, { useState, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';
import logo from './logo.svg';
import './App.css';
import { apiCalls } from './apiCalls';

type FormItem = React.FormEvent<HTMLFormElement>;
interface ITodo {
  id: string;
  text: string;
  complete: boolean;
}

function App(): JSX.Element {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormItem): void => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  const getTodoList = () => {
    apiCalls.getTodoList().then((data) => setTodos(data.todoList));
  };

  const addTodo = (text: string): void => {
    const newTodo: ITodo = { id: nanoid(), text, complete: false };
    apiCalls.addTodoList(newTodo).then(() => getTodoList());
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (id: string): void => {
    apiCalls.removeTodoList(id).then(() => getTodoList());
  };
  // const removeTodo = (index: number): void => {
  //   const newTodos: ITodo[] = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // };

  useEffect(() => {
    getTodoList();
  }, []);

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
          ref={inputRef}
        />
        <input type='submit' value='Add todo' />
      </form>
      <section className='display-todos'>
        {todos.map((todo: ITodo, index: number) => (
          <section className='todo-card' key={todo.id}>
            <p style={{ textDecoration: todo.complete ? 'line-through' : '' }}>
              {todo.text}
            </p>
            <section className='todo-card-nav'>
              <button onClick={() => completeTodo(index)}>
                {todo.complete ? 'Incomplete' : 'Complete'}
              </button>
              <button onClick={() => removeTodo(todo.id)}>X</button>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
}

export default App;
