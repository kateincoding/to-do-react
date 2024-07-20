import React from 'react'
import { AppLayout } from './AppLayout'
import './App.css'

// let Tasks = [
//   { id: 1, task: 'study', completed: false },
//   { id: 2, task: 'workout', completed: false },
//   { id: 3, task: 'work', completed: true },
//   { id: 4, task: 'eat', completed: false },
//   { id: 5, task: 'sleep', completed: false }
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(Tasks));
// localStorage.removeItem('TODOS_V1');

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  // const [count, setCount] = useState(0)
  // state of TodoSearch
  // const [todos, setTodos] = React.useState(Tasks); // before
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  // const [clickCounter, setClickCounter] = React.useState(0);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => (todo.task.toLowerCase().includes(searchValue.toLowerCase())));

  const completingTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    )
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deletingTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    )
    // delete newTodos[todoIndex];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return(
    <AppLayout 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completingTodo={completingTodo}
      deletingTodo={deletingTodo}
    />
  )
}


export default App
