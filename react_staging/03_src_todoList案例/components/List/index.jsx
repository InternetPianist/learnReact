import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class index extends Component {
    // 对接受的props进行，类型、必要性限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }
    render() {
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(todo => {
                        return <Item deleteTodo={deleteTodo} updateTodo={updateTodo} key={todo.id} {...todo}/>
                    })
                }
            </ul>
        )
    }
}
