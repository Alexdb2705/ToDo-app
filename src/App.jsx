import { useEffect, useState } from 'react'
import './App.css'
import ToDoItem from './components/ToDoItem.jsx'
import ToDoAdder from './components/ToDoAdder.jsx'
import Saver from './components/Saver.jsx'
import Remover from './components/Remover.jsx'

function App() {
  const [toDoList, setToDoList] = useState(Array())

  useEffect(() => {
      const fut = localStorage.getItem('futList') ? localStorage.getItem('futList').split(',') : ''
      for (let i = 0; i < fut.length/3; i++) {
        setToDoList(prevList => [...prevList, {
          name: fut[3*i], description: fut[3*i+1], date: fut[3*i+2]
        }])
        
      }
  }, [])

  return (
    <>
      <ToDoAdder setToDoList={setToDoList}/>
      {toDoList.map((toDoitem, index) => {
        return toDoitem && <ToDoItem key={index} item={toDoitem}/>
      })}
      <Saver />
      <Remover />
    </>
  )
}

export default App
