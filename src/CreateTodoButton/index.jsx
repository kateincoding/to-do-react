function CreateTodoButton({setOpenModal}) {
    return (
      <button className="CreateTodoButton bg-violet-600 text-white"
      onClick={() => setOpenModal(state => !state)}>
        +
      </button>
    )
  }

    export { CreateTodoButton }