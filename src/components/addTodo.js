import React, { Component } from 'react'
import { addTodo } from '../redux/actions'
import { connect } from 'react-redux'

class AddTodo extends Component {

    constructor(props) {
        super(props)
        this.state = { input: "" }
    }

    updateInput = input => { this.setState({ input }) }

    handleAddTodo = () => {
        this.props.addTodo(this.state.input)
        this.setState({ input: "" })
    }

    render() {
        return (
            <div className="addTodo-box">
                <div className="addTodo-text addTodo">Add new to do</div>
                <input className="addTodo-input addTodo form-control" type="text"
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                ></input>
                <input className="addTodo-btn addTodo btn btn-primary" type="button" value="Add"
                    onClick={this.handleAddTodo}
                ></input>
            </div>
        )
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        addTodo: (content) => dispatch(addTodo(content))
    }
}

export default connect(null, mapDispatchToProp)(AddTodo)