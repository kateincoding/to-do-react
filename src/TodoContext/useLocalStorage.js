import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    // encapsulate because we only need to charge this info one time
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
            
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                setLoading(false)
            } catch(e) {
                setLoading(false)
                setError(e)
            }
        }, 1000);
    }, []);
  
    
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    // return [item, saveItem];
    return {
        item,
        saveItem,
        loading,
        error
    }
  }

  export {useLocalStorage}

// if you want to initialize
// let Tasks = [
//   { id: 1, task: 'study', completed: false },
//   { id: 2, task: 'workout', completed: false },
//   { id: 3, task: 'work', completed: true },
//   { id: 4, task: 'eat', completed: false },
//   { id: 5, task: 'sleep', completed: false }
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(Tasks));
//  // localStorage.removeItem('TODOS_V1');