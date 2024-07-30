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
import { deepPurple, purple } from "@mui/material/colors";


function TodoItem({ todo, completed, onComplete, onDelete }) {
  let checked = completed

    return (
        <li className='flex justify-center py-2 text-xl ' >
          <Box
            className='bg-secondary border-primary text-secondary'
            sx={{
              p: 2,
              border: 1,
              borderRadius: 1,
            }}>
            <Checkbox
              checked={checked}
              onChange={onComplete}
              inputProps={{ 'aria-label': 'controlled' }}
              sx={{
                color: deepPurple[400],
                '&.Mui-checked': {
                  color: deepPurple[600],
                },
              }}
            />
            <span className='inline-flex text-secondary text-medium'> {todo} </span>
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