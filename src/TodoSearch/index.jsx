import React from 'react';
// import './TodoSearch.css';

function TodoSearch(
    {searchValue,
    setSearchValue,}
){
    

    return(
        <input 
        placeholder="search your to do" 
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