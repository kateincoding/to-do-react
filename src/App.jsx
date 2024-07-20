import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// components
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoItem } from './TodoItem'
import './App.css'

import React from 'react'


let Tasks = [
  { id: 1, task: 'study', completed: false },
  { id: 2, task: 'workout', completed: false },
  { id: 3, task: 'work', completed: true },
  { id: 4, task: 'eat', completed: false },
  { id: 5, task: 'sleep', completed: false }
]

function useLocalStorage(itemName, initialValue){
  
  const localStorageItem = localStorage.getItem('itemName');
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem('itemName', JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const[item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedTasks = JSON.stringify(newItem);
    localStorage.setItem('itemName', stringifiedTasks);
    setItem(newItem);
  }

  return {
    tasks,
    saveItem,
  }

}

function App() {
  // const [count, setCount] = useState(0)
  // state of TodoSearch
  const [searchValue, setSearchValue] = React.useState('');
  const [clickCounter, setClickCounter] = React.useState(0);
  const [todos, setTodos] = React.useState(Tasks);
  // const [searchValue, setSearchValue] = React.useState('');
  // const [todosTotal, setTodosTotal] = React.useState(0);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => (todo.task.toLowerCase().includes(searchValue.toLowerCase())));

  const completingTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    )
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deletingTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    )
    // delete newTodos[todoIndex];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  console.log("TodoSearch - todo state " + searchValue);
  console.log("clicks", clickCounter)

  function TodoClick(){
    return(
      <div>
      <p> Diste {clickCounter} clicks</p>
      <button
        onClick={() => {setClickCounter(clickCounter + 1)}}
      >Click</button>
      </div>
    )
  }

  return (
    <React.Fragment>
    {/* <div> */}
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {/* <TodoClick /> */}
      <TodoList>
        {searchedTodos.map(todo => ( 
          <TodoItem 
            key={todo.id} 
            todo={todo.task} 
            completed={todo.completed}
            onComplete={() => completingTodo(todo.id)}
            onDelete={() => deletingTodo(todo.id)}
          /> 
          ))}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
    // </div>
  );
}


export default App
