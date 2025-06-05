import { useState } from 'react'
import './App.css'
import ToDoItem from './components/ToDoItem.jsx'
import ToDoAdder from './components/ToDoAdder.jsx'

function App() {
  const [toDoList, setToDoList] = useState([])

  return (
    <>
      <ToDoAdder setToDoList={setToDoList} />
      {toDoList.map((toDoitem, index) => {
        return <ToDoItem key={index} item={toDoitem}/>
      })}
    </>
  )
}

export default App
