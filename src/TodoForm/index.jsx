import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext'

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = (event) => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return (
        <form 
        className='justify-center flex flex-col p-5 bg-violet-50'
        onSubmit={onSubmit}
        >
            <label 
            className='text-center p-5 text-lg font-bold text-primary '
            placeholder="Add a new task"
            >Write your new TODO</label>
            <textarea 
            className='p-2'
            placeholder="Add a new task"
            value={newTodoValue}
            onChange={onChange}
            />
            {/* <input type="text" placeholder="Add a new task" /> */}
            <div className='flex flex-row justify-center py-2'>
                <button 
                className="TodoForm-button TodoForm-button--cancel"
                type='button'
                onClick={onCancel}>Cancel</button>
                <button 
                className="TodoForm-button TodoForm-button--add"
                type='submit'>Save</button>
            </div>
        </form>
    )
}

export { TodoForm };