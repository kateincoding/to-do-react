import React from 'react'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoItem } from '../TodoItem'

import { TodoLoading } from '../TodoLoading'
import { EmptyTodo } from '../EmptyTodo'
import { TodoContext } from '../TodoContext'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'

function AppLayout() {
  const {loading, 
    error, 
    searchedTodos, 
    completingTodo, 
    deletingTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
    return (
        // <React.Fragment>
        <div >
          <TodoCounter />
          <TodoSearch />
          {/* <TodoContext.Consumer> */}
            {/* {({
              loading, 
              error, 
              searchedTodos, 
              completingTodo, 
              deletingTodo}) => ( */}
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
            {/* )} */}

            
          {/* </TodoContext.Consumer> */}
          <CreateTodoButton 
            setOpenModal={setOpenModal}
          />
          {openModal && (<Modal>
            <TodoForm />
          </Modal>
          )}
        {/* </React.Fragment> */}
        </div>
      );
}

export { AppLayout };