function ToDoAdder({ setToDoList }) {
    const handleAdd = () => {
        const name = document.getElementById("input-name").value
        const description = document.getElementById("input-description").value

        setToDoList((prevList) => [...prevList, { name, description }])
    }

    return (
        <div className="input-container">
            <div>
                <label htmlFor="input-name">Task</label>
                <input type="text" id="input-name" className="todo-input" />
            </div>
            <div>
                <label htmlFor="input-description">Description</label>
                <input type="text" id="input-description" className="todo-input" />
            </div>
            <button onClick={handleAdd} className="add-btn">Add</button>
        </div>
    )
}

export default ToDoAdder