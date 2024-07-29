// function TodoItem({ todo }) {
//   return (
//     <div>
//       <input type="checkbox" checked={todo.completed} />
//       <span>{todo.text}</span>
//     </div>
//   );
// }

import { Box, IconButton, Checkbox} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


function TodoItem({ todo, completed, onComplete, onDelete }) {
  let checked = completed

    return (
        <li className='flex justify-center py-2 text-xl ' >
          <Box
            className='bg-violet-400'
            sx={{
              p: 2,
              border: 1,
              borderRadius: 1,
            }}>
            <Checkbox
              checked={checked}
              onChange={onComplete}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <span className='inline-flex text-indigo-950'> {todo} </span>
            <IconButton aria-label="delete" size="large"
              onClick={onDelete}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </li>
    )
  }

  export { TodoItem }