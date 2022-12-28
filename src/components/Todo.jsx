import { useState } from "react"

const Todo = ({item, onUpdate, onDelete}) => {

    const [ isEdit, setIsEdit ] = useState(false)

    function FormEdit(){
        const [ newValue, setNewValue ] = useState(item.title)
        function handleSubmit(i){
            i.preventDefault();
        }

        function handleChange(i){
            const value = i.target.value 
            setNewValue(value);
        }

        function handleClickUpdateTodo(){
            onUpdate(item.id, newValue);
            setIsEdit(false)
        }

        return (
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input 
            type="text" 
            className="todoInput" 
            onChange={handleChange}
            value={newValue}/>
            <button className="button" onClick={handleClickUpdateTodo}>
                Update
            </button>
        </form>
        )
    }

    function TodoElement(){
        return (
            <div className="todoInfo">
            <span className="todoTitle">{item.title}</span>
            <button className="button" onClick={() => setIsEdit(true)}>Editar</button>
            <button className="buttonDelete" onClick={() => onDelete(item.id)}>Eliminar</button>
            </div>
        )
    }

    return (
        <div className="todo">
            {
            isEdit 
            ? 
            <FormEdit />
            : 
            <TodoElement />
            }
        </div>

    )
}


export default Todo