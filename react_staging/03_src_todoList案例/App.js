import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里
    state={todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'打代码',done:false},
        {id:'004',name:'狂街',done:true}
    ]}
    // appTodo用于添加一个todo，接收的参数是todo对象
    addTodo = (todoObj) =>{
        // 获取原理todos
        const {todos} = this.state
        // 追加一个todo
        const newTodo = [todoObj,...todos]
        // 更新状态
        this.setState({todos: newTodo})
    }
    // undateTodo用于更新一个对象
    updateTodo = (id,done) => {
        const {todos} = this.state
        // 获取改变后的数据
        const newTodos = todos.map(todoObj => {
            // 如果被改变todoOjb对象与原状态totos对象id相同，返回传入的勾选框状态
            if(todoObj.id === id) return {...todoObj,done}
            // 否则返回原有todoObj对象
            else return todoObj
        })
        // 更新状态
        this.setState({todos: newTodos})
    }
    // deleteTOdo用于删除一个todo对象
    deleteTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter(item => {
            return item.id !== id
        })
        this.setState({todos: newTodos})
    }
    // checkAllTodo用于全选
    checkAllTodo = (done) => {
        const {todos} = this.state
        const newTodos = todos.map(todoObj => {
            return {...todoObj,done:done}
        })
        this.setState({todos: newTodos})
    }
    // 清楚所有已完成
    clearAllDone = () => {
        const {todos} = this.state
        const newTodos = todos.filter(item => {
            // 返回没有完成  return item.done 返回的是所有已完成的所以！返回没有完成的
            // return !item.done
            return item.done === false
        })
        this.setState({todos: newTodos})
    }
    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} todos={todos}/>
                    <Footer clearAllDone={this.clearAllDone} checkAllTodo={this.checkAllTodo} todos={todos}/>
                </div>
          </div>
        )
    }
}
