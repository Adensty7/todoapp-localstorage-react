import { v4 as uuidv4 } from 'uuid';

export const todosReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, {
                todo: action.todo.todo,
                id: uuidv4()
            }]
        case 'REMOVE_TODO':
            return state.filter(todos => todos.id !== action.id)
        default:
            return state
    }
}
