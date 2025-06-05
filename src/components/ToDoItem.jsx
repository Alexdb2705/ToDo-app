import { useEffect, useState } from "react"

function ToDoItem({ item }) {
    const [itemOwn, setItemOwn] = useState({})

    const handleRm = () => {
        setItemOwn({})
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
                <div className="todo-date">{itemOwn.date}</div>
                <button onClick={handleRm} className="rm-btn">Remove Item</button>
            </div>
        )
    }
}

export default ToDoItem