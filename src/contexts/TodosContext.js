import React, { createContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { todosReducer } from '../reducers/todosReducer';

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
    const [todos, dispatch] = useReducer(todosReducer, [], () => {
        const localData = localStorage.getItem("todos");
        return localData ? JSON.parse(localData) : []
    });
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    return (
        <TodosContext.Provider value={{todos, dispatch}}>
            { props.children }
        </TodosContext.Provider>   
    );
}
 
export default TodosContextProvider;