import React, { Component } from 'react'

export default class Count extends Component {
    // 初始化状态
    state = {count: 0}
    // 加
    increment = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count: count+value*1})
    }
    // 减
    decrement = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count: count-value*1})
    }
    // 奇数在加
    incrementIfOdd = () =>　{
        const {value} = this.selectNumber
        const {count} = this.state
        if(count%2!==0){
            this.setState({count: count+value*1})
        }
    }
    // 异步在加
    incrementAsync = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        setTimeout(() => {
            this.setState({count:count+value*1})
        },500)
    }
    render() {
        return (
            <div>
                <h2>当前求和为：{this.state.count}</h2>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
