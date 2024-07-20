import React from 'react'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoItem } from '../TodoItem'

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
            {loading && <p>Loading...</p>}
            {!loading && !searchedTodos.length && <p>There are no todos</p>}
            {error && <p>There was an error: {error}</p>}
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

export { AppLayout };