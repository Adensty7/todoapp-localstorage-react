import React from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import TodosContextProvider from './contexts/TodosContext';

function App() {
  return (
    <div className="App">
    <TodosContextProvider>
      <Navbar />
      <Todos />
      <TodoForm />
    </TodosContextProvider>
    </div>
  );
}

export default App;
