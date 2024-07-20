// function TodoItem({ todo }) {
//   return (
//     <div>
//       <input type="checkbox" checked={todo.completed} />
//       <span>{todo.text}</span>
//     </div>
//   );
// }

function TodoItem({ todo, completed, onComplete, onDelete }) {
    return (
        <li>
            <span
              className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
              onClick={onComplete}
            >complete</span>
            <p>{todo} |  {completed ? 'true' : 'false'} </p>
            <span
            //   className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
              onClick={onDelete}
            >delete</span>
            
        </li>
    )
  }

  export { TodoItem }