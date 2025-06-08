import { useEffect, useState } from "react"

function ToDoItem({ item }) {
    const [itemOwn, setItemOwn] = useState({ name: item.name, description: item.description, date: item.date })

    const handleRm = () => {
        setItemOwn((prevItem) => ({ ...prevItem, name: ''}))
    }

    {
        return (
            itemOwn.name
            &&
            <div className="todo-container">
                {(!itemOwn.name.startsWith(' ') & itemOwn.name.length > 0) && <div className="todo-name">{itemOwn.name}</div>}
                {(!itemOwn.description?.startsWith(' ') && itemOwn.description?.length > 0) && <div className="todo-description">{itemOwn.description}</div>}
                {!itemOwn.date?.startsWith('u') && <div className="todo-date">{itemOwn.date}</div>}
                <button onClick={(e) => { e.target.parentNode.classList.toggle('done-todo') }} className="done-btn">Done</button>
                <button onClick={handleRm} className="rm-btn">Remove</button>
            </div>
        )
    }
}

export default ToDoItem