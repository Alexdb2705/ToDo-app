import { useEffect } from "react"

function ToDoAdder({ setToDoList }) {
    const handleAdd = () => {
        const name = document.getElementById("input-name").value
        const description = document.getElementById("input-description").value
        const date = document.getElementById("input-date").value.split('-')[2] + '-' + document.getElementById("input-date").value.split('-')[1] + '-' + document.getElementById("input-date").value.split('-')[0]
        if (name != null | description != null) {
            setToDoList((prevList) => [...prevList, { name, description, date }])
            document.querySelectorAll('input').forEach(element => element.value = null)
        }
    }

    useEffect(() => {
        document.querySelector('.add-btn').disabled = true;
    }, [])

    return (
        <div className="input-container">
            <div className="input-row">
                <label htmlFor="input-name">Task</label>
                <input type="text" id="input-name" className="todo-input" />
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