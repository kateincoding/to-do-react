function CreateTodoButton({setOpenModal}) {
    return (
      <button className="CreateTodoButton bg-primary text-white"
      onClick={() => setOpenModal(state => !state)}>
        +
      </button>
    )
  }

    export { CreateTodoButton }