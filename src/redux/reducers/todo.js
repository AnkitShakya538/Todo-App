import { ADD_TODO, DELETE_TODO, CHECK_TODO } from "../actionTypes"

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload
            if (content) {
                return {
                    ...state,
                    todos: [
                        ...state.todos,
                        { id, content, completed: false }
                    ]
                }
            }
            else return state
        }
        case DELETE_TODO: {
            const array = state.todos
            const index = array.indexOf(array.find(todo => todo.id === action.payload.id))
            if (array[index].completed) {
                array.splice(index, 1)
                return {
                    ...state,
                    todos: [...array]
                }
            }
            else return state
        }
        case CHECK_TODO: {
            const array = state.todos
            const index = array.indexOf(array.find(todo => todo.id === action.payload.id))
            array[index].completed = !array[index].completed
            return {
                ...state,
                todos: [...array]
            }
        }
        default: return state
    }
}

export default todoReducer