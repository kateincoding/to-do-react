import React from 'react';
// import './TodoSearch.css';

function TodoSearch(
    {searchValue,
    setSearchValue,}
){
    

    return(
        <input 
        placeholder="Inserte su tarea" 
        className='TodoSearch'
        value={searchValue}
        onChange={(event) =>{
            // update the state value with the input
            setSearchValue(event.target.value)
        }
        }
        />
    );
}

export { TodoSearch }