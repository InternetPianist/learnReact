import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    // 全选checked的回调 
    handleCheckAll = (evevt) =>　{
      this.props.checkAllTodo(evevt.target.checked)
    }
    // 清楚所有已完成的回调
    handleClearAllDone = () => {
      this.props.clearAllDone()
    }
    render() {
      const {todos} = this.props
      // 已完成个数
      const doneCount = todos.reduce((pre,todo) => pre+(todo.done? 1:0),0)
      // 总数
      const total = todos.length
        return (
            <div className="todo-footer">
            <label>
              <input onChange={this.handleCheckAll} checked={(total===doneCount)&&(total!==0)} type="checkbox"/>
            </label>
            <span>
              <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
          </div>
        
        )
    }
}
