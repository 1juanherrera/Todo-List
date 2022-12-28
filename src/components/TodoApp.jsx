import { useState } from "react"
import Todo from "./Todo";



const TodoApp = () => {
    const [ title, setTitle ] = useState('');
    const [ todos, setTodos ] = useState([]);

    function handleChange(i){
        const value = i.target.value;

        setTitle(value);
    }

    function handleSubmit(i){
        i.preventDefault();

        const newTodo = {
            title: title
        }

        const temp = [...todos];
        temp.unshift(newTodo);

         setTodos(temp);

        setTitle('')
    } 

    function handleUpdate(id, value){
        const temp = [...todos];
        const item = temp.find(item => item.id == id)
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id){
        const temp = todos.filter((item) => item.id !== id)

        setTodos(temp)
    }

    return (
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input 
                onChange={handleChange} 
                className="todoInput" 
                value={title} />
                <input 
                onClick={handleSubmit} 
                type="submit" 
                value="Todo List" 
                className="buttonCreate" />
            </form>

            <div className="todosContainer">
                {
                    todos.map(item => (
                        <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                    ))
                }
            </div>
        </div>  
    )  
}

export default TodoApp