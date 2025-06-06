import { useEffect, useState } from "react"

function ToDoItem({ item }) {
    const [itemOwn, setItemOwn] = useState({})

    const handleRm = () => {
        setItemOwn({})
    }

    function handleDone() {
        console.log(event.target.value)
    }

    useEffect(() => {
        setItemOwn(item)
    }, [])
    
    {
        return (
            itemOwn.name
            &&
            <div className="todo-container">
                <div className="todo-name">{itemOwn.name}</div>
                <div className="todo-description">{itemOwn.description}</div>
                {!itemOwn.date.startsWith('u') && <div className="todo-date">{itemOwn.date}</div>}
                <button onClick={(e) => {e.target.parentNode.classList.toggle('done-todo')}} className="rm-btn">Done</button>
                <button onClick={handleRm} className="rm-btn">Remove</button>
            </div>
        )
    }
}

export default ToDoItem