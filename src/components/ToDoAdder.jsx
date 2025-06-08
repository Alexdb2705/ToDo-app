import { useEffect } from "react"

function ToDoAdder({ setToDoList }) {
    const handleAdd = () => {
        const name = document.getElementById("input-name").value
        const description = document.getElementById("input-description").value
        const date = document.getElementById("input-date").value.split('-')[2] + '-' + document.getElementById("input-date").value.split('-')[1] + '-' + document.getElementById("input-date").value.split('-')[0]
        setToDoList((prevList) => [...prevList, { name, description, date }])
        
        document.querySelectorAll('input').forEach(element => element.value = null)
        document.querySelector('.add-btn').disabled = true;
    }

    const handleChange = () => {
        if (!document.getElementById('input-name').value.startsWith(' ') & document.getElementById('input-name').value.length > 0) {
            document.querySelector('.add-btn').disabled = false;
        } else {
            document.querySelector('.add-btn').disabled = true;
        }
    }

    useEffect(() => {
        document.querySelector('.add-btn').disabled = true;
    }, [])

    return (
        <div className="input-container">
            <div className="input-row">
                <label htmlFor="input-name">Task</label>
                <input onChange={handleChange} type="text" id="input-name" className="todo-input" autoFocus />
            </div>
            <div className="input-row">
                <label htmlFor="input-description">Description</label>
                <input type="text" id="input-description" className="todo-input" />
            </div>
            <div className="input-row">
                <label htmlFor="input-date">Date</label>
                <input type="date" id="input-date" className="todo-input" />
            </div>
            <button onClick={handleAdd} className="add-btn">Add</button>
        </div>
    )
}

export default ToDoAdder