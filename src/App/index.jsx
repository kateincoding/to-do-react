import React from 'react'
import { AppLayout } from './AppLayout'
import './App.css'
import { useLocalStorage } from './useLocalStorage'

function App() {
  // const [count, setCount] = useState(0)
  // state of TodoSearch
  // const [todos, setTodos] = React.useState(Tasks); // before
  // const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchValue] = React.useState('');
  // const [clickCounter, setClickCounter] = React.useState(0);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => (todo.task.toLowerCase().includes(searchValue.toLowerCase())));

  //Effects
  console.log('log 1')
  React.useEffect(() => {
    console.log('Log 2 -> change the total')
  }, [totalTodos]);
  console.log('Log 3')

  const completingTodo = (event, id) => {
    console.log('event', event);
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    )
    newTodos[todoIndex].completed = event;
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
      loading={loading}
      error={error}
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
