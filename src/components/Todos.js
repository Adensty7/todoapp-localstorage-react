import React, {useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';

const Todos = () => {
    const { todos, dispatch } = useContext(TodosContext); 
    return todos.length ? (
        <div className="todos">
        <div className="container">
            <div class="row  justify-content-center">
                    <div class="col-lg-6">

                        <div class="list-group m-3 p-3" >
                            
                        { todos.map(todo => {
                            return (
                                <div class="list-group-item py-3 border-white bg-dark text-blue">
                                    <div className="row">
                                        <div class="col-10 done" onClick={() => dispatch({type: "REMOVE_TODO", id: todo.id})}>
                                            <h5 class="mb-1">{todo.todo}</h5> 
                                        </div>
                                        <div class="col-2">
                                            <span className="float-end fs-2">
                                            <i className="bi bi-trash" onClick={() => dispatch({type: "REMOVE_TODO", id: todo.id})}></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        }) }


                        </div>

                    </div>
                </div>
        </div>
        </div>
    ) : (
        <div className="container bg-gold text-blue">
            
        </div>
    );
}
 
export default Todos;