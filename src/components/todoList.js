import React from 'react'
import { getTodoList } from '../redux/selectors'
import { connect } from 'react-redux'
import Todo from './todo'

const TodoList = ({ todos }) => (
    <div>
        <div className="todo-row task-header">
            <div className="todo-row-ele">
                <span className="label label-info">Tasks</span>
            </div>
            <div className="todo-row-ele">
                <span className="label label-info">Completed?</span>
            </div>
            <div className="todo-row-ele">
                <span className="label label-info">Action</span>
            </div>
        </div>
        <ol>
            {todos && todos.length > 0 ?
                todos.map((todo) => { return <Todo key={todo.id} todo={todo} /> })
                : <p className="no-task">"No task to do!"</p>
            }
        </ol>
    </div>
)

const mapStateToProps = (state) => {
    const todos = getTodoList(state)
    return { todos }
}

export default connect(mapStateToProps)(TodoList)