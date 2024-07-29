import React from 'react'
import { AppLayout } from './AppLayout'
import './App.css'
import { TodoProvider } from '../TodoContext'

function App() {
  return(
    <TodoProvider>
      <AppLayout />
    </TodoProvider>
  )
}


export default App
