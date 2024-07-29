import React from 'react'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoItem } from '../TodoItem'

import { TodoLoading } from '../TodoLoading'
import { EmptyTodo } from '../EmptyTodo'


function AppLayout({ 
        completedTodos,
        totalTodos, 
        searchValue, 
        setSearchValue, 
        searchedTodos, 
        completingTodo, 
        deletingTodo,
        loading,
        error}) 
    {
    return (
        // <React.Fragment>
        <div >
          <TodoCounter 
            class='bg-red-500'
            completed={completedTodos} 
            total={totalTodos} 
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
            {loading && <TodoLoading />}
            {!loading && !searchedTodos.length && <EmptyTodo />}
            {error && <p>There was an error: {error}</p>}
            {searchedTodos.map(todo => ( 
              <TodoItem 
                key={todo.id} 
                todo={todo.task} 
                completed={todo.completed}
                onComplete={(event) => completingTodo(event.target.checked, todo.id)}
                onDelete={() => deletingTodo(todo.id)}
              /> 
              ))}
          </TodoList>
          
          <CreateTodoButton />
        {/* </React.Fragment> */}
        </div>
      );
}

export { AppLayout };