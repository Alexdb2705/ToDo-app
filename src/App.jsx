import { useEffect, useState } from 'react'
import './App.css'
import ToDoItem from './components/ToDoItem.jsx'
import ToDoAdder from './components/ToDoAdder.jsx'

function App() {
  const [toDoList, setToDoList] = useState([])

  useEffect(() => {
    localStorage.setItem('numTasks', toDoList.length)
  }, [toDoList])

  return (
    <>
      <ToDoAdder setToDoList={setToDoList} />
      {toDoList.map((toDoitem, index) => {
        return toDoitem && <ToDoItem key={index} item={toDoitem} setToDoList={setToDoList} />
      })}
    </>
  )
}

export default App
