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
        // console.log("event", event)
        // const newTodo = event.target[0].value;
        // console.log(newTodo);
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = (event) => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        // console.log("event2", event)
        setNewTodoValue(event.target.value);
    }
    return (
        <form 
        className='justify-center flex flex-col p-5 bg-violet-50'
        onSubmit={onSubmit}
        >
            <label 
            className='text-center py-1 text-lg font-semibold'
            placeholder="Add a new task"
            >Write your new TODO</label>
            <textarea 
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