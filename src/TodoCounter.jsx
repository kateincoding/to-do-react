// function TodoCounter(props){
// props.total
import './TodoCounter.css'

function TodoCounter({ total, completed}){
    return(
      // <h1 style={
      //   {
      //     fontSize: '2em',
      //     textAlign: 'center',
      //     margin: '0',
      //     padding: '0',
      //   }
      // }>
      <h1>
        <p>Completaste {completed} de {total} tareas</p>
      </h1>
    )
}

export { TodoCounter };