import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
      
      const [searchValue, setSearchValue] = React.useState('');  
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
      const searchedTodos = todos.filter(todo => (todo.task.toLowerCase().includes(searchValue.toLowerCase())));
    
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
      
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completingTodo,
            deletingTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };