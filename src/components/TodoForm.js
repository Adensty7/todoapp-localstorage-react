import React, {useContext, useState} from 'react';
import { TodosContext } from '../contexts/TodosContext';

const TodoForm = () => {
    const { dispatch } = useContext(TodosContext);
    const [todo, setTodo] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', todo: {
            todo
        }});
        setTodo('');
    }
    return (

        <div className="container">
            <div class="row justify-content-center">
                    <div class="col-lg-6 m-3 p-3 border-white bg-dark text-blue">
                    <form onSubmit={handleSubmit}>
                        <label>Add New Todo: </label>
                        <input type="text" className="form-control" placeholder="Add Todo" value={todo}
                        onChange={(e) => setTodo(e.target.value)} required />
                        <div class="justify-content-center col-12 d-grid p-3">
                            <button type="submit" className="btn btn-blue my-3"><i className="bi bi-plus-lg"></i></button>
                        </div>
                   
                    </form>
                    </div>
            </div>
        </div>
    );
}
 
export default TodoForm;