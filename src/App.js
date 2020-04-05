import React from 'react';
import './App.css';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App box">
        <div className="headerTodo-box">
          <header className="headerTodo">To-Do App!</header>
          <AddTodo />
        </div>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
