// 引入Count的UI组件
// import CountUI from '../../components/Count'
import React, { Component } from 'react'
import {
    createIncrementAction,
    createDecrementAtion,
    createIncrementAsyncAction
} from '../../redux/count_action'

// 引入connect用于连接UI组件于redux
import {connect} from 'react-redux'

// UI组件
class Count extends Component {
    // 初始化状态
    state = {carName: '宝马X6'}
  
    // 加
    increment = () => {
        const {value} = this.selectNumber
        this.props.jia(value*1)
    }
    // 减
    decrement = () => {
        const {value} = this.selectNumber
        this.props.jian(value*1)
    }
    // 奇数在加
    incrementIfOdd = () =>　{
        const {value} = this.selectNumber
        if(this.props.count %2 !==0) {
            this.props.jia(value*1)
        }
    }
    // 异步在加
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.jiaAsync(value*1,500)
    }
    render() {
        console.log('UI组件接收到的props是',this.props)
        return (
            <div>
                <h2>当前求和为：{this.props.count}</h2>
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
// 映射状态
// function mapStateToProps(state) {
//     return {count:state}
// }
// // 映射操作状态的方法
// function mapDispatchToProps(dispatch) {
//     return {
//         jia: number => {dispatch(createIncrementAction(number))},
//         jian: number => {dispatch(createDecrementAtion(number))},
//         jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time))
//     }
// }
// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({count:state}),
    // mapDispatchToProps的一般写法
    /*
      dispatch => ({
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAtion(number)),
        jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time))
      })
    */ 
   //mapDispatchToProps的简写
    {
        jia:createIncrementAction,
        jian:createDecrementAtion,
        jiaAsync:createIncrementAsyncAction
    }
)(Count)