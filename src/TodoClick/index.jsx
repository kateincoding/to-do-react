function TodoClick({clickCounter, setClickCounter}){
    return(
      <div>
      <p> Diste {clickCounter} clicks</p>
      <button
        onClick={() => {setClickCounter(clickCounter + 1)}}
      >Click</button>
      </div>
    )
  }

export { TodoClick };