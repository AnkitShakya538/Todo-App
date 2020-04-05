import React from 'react'
import { checkTodo, deleteTodo } from '../redux/actions'
import { connect } from 'react-redux'

function Todo(prop) {

    const handleCheckTodo = () => {
        prop.checkTodo(prop.todo.id)
    }

    const handleDeleteTodo = () => {
        prop.deleteTodo(prop.todo.id)
    }

    return (
        <li className="todo-row">
            <div className="todo-row-ele">
                <span className="label label-info">{prop.todo.content}</span>
            </div>
            <div className="todo-row-ele">
                <input type="checkbox"
                    onChange={handleCheckTodo}
                ></input>
            </div>
            <div className="todo-row-ele">
                <input type="button" value="Delete" className="btn btn-danger"
                    onClick={handleDeleteTodo}
                ></input>
            </div>
        </li>
    );
}

const mapDispatchToProp = dispatch => {
    return {
        checkTodo: (id) => dispatch(checkTodo(id)),
        deleteTodo: (id) => dispatch(deleteTodo(id))
    }
}

export default connect(null, mapDispatchToProp)(Todo)