function Saver() {

    const handleSaving = () => {
        const arr = document.querySelectorAll('.todo-container')
        const fut = Array()
        arr.forEach(element => {
            const name = element.querySelector('.todo-name').innerHTML
            const description = element.querySelector('.todo-description') ? element.querySelector('.todo-description').innerHTML : ';º`?'
            const date = element.querySelector('.todo-date') ? element.querySelector('.todo-date').innerHTML : 'u'
            fut.push(name, description, date)
        })

        localStorage.setItem('futList', fut)
    }
    return (
        <button className="save-btn" onClick={handleSaving}>Save List</button>
    )
}

export default Saver