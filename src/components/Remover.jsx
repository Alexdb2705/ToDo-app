function Remover() {

    const rmList = () => {
        localStorage.removeItem('futList')
        document.querySelectorAll('.todo-container').forEach(element => {element.querySelectorAll('div').innerHTML=''; element.style.display = 'none'})
    }

    return (
        <button onClick={rmList} className="rmList-btn">Remove List</button>
    )
}

export default Remover