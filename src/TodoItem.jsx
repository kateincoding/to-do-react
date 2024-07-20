// function TodoItem({ todo }) {
//   return (
//     <div>
//       <input type="checkbox" checked={todo.completed} />
//       <span>{todo.text}</span>
//     </div>
//   );
// }
import { FcOk } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";



function TodoItem({ todo, completed, onComplete, onDelete }) {
    return (
        <li>
          {/* <FcOk/> */}
            <span             
              className={`Icon Icon-check ${completed && 'Icon FcOk--active'}`}
              onClick={onComplete}
            ><FcCheckmark /> click to complete | </span>
            <span>{todo} {completed === true && <FcOk/>} </span>
            <span
            //   className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
              onClick={onDelete}
            >| <FcFullTrash /> delete </span>
            
        </li>
    )
  }

  export { TodoItem }