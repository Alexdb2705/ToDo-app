import { useState } from 'react'
import './App.css'
import ToDoItem from './components/ToDoItem.jsx'
import ToDoAdder from './components/ToDoAdder.jsx'

function App() {
  const [toDoList, setToDoList] = useState([])

  return (
    <>
      <ToDoAdder setToDoList={setToDoList} />
      <ul>
      {toDoList.map((toDoitem, index) => {
        return <li key={index}><ToDoItem item={toDoitem}/></li>
      })}
      </ul>
    </>
  )
}

export default App
