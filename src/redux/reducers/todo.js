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
            const todoList = state.todos
            const index = todoList.indexOf(todoList.find(todo => todo.id === action.payload.id))
            if (todoList[index].completed) {
                todoList.splice(index, 1)
                return {
                    ...state,
                    todos: [...todoList]
                }
            }
            else return state
        }
        case CHECK_TODO: {
            const todoList = state.todos
            const index = todoList.indexOf(todoList.find(todo => todo.id === action.payload.id))
            todoList[index].completed = !todoList[index].completed
            return {
                ...state,
                todos: [...todoList]
            }
        }
        default: return state
    }
}

export default todoReducer