// function TodoCounter(props){
// props.total
import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter(){
  const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return(
      <h1>
        <p>Completaste {completedTodos} de {totalTodos} tareas</p>
      </h1>
    )
}

export { TodoCounter };