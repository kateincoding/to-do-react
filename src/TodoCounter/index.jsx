// function TodoCounter(props){
// props.total
import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter(){
  const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return(
      <div className='py-5'>
        <h1 className='py-1'>
          {!totalTodos && <p>Welcome to my to-do List</p>}
          {totalTodos>0 && totalTodos != completedTodos  && <p>You finish {completedTodos} of {totalTodos} tasks</p>}
          {totalTodos>0 && totalTodos === completedTodos && <p>Congratulations!!!! <br/> you finish your day!</p>}
        </h1>
        <h2 className='py-1 font-semibold'>
          {totalTodos>0 && totalTodos === completedTodos && "Now, you are free! See you tomorrow!"}
        </h2>
      </div>
    )
}

export { TodoCounter };