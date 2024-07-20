import React from 'react'
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

  export {useLocalStorage}