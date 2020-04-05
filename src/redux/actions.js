import { ADD_TODO, CHECK_TODO, DELETE_TODO } from "./actionTypes"

let nextTodoId = 0

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
})

export const checkTodo = id => ({
    type: CHECK_TODO,
    payload: { id }
})

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: { id }
})