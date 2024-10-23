// src/App.js

import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BrainTasks</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
