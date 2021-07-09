import React, { PureComponent } from 'react'

import './index.css'
export default class Demo extends PureComponent {
    state = {carName: '奔驰C63'}
    changeCar = () => {
        // this.setState({carName: '迈巴赫'})
        const obj = this.state
        obj.carName = '迈巴赫'
        console.log(obj === this.state)
        // 使用 PureComponent时 应该传入一个新的对象，此处的对象指向同一个地址，所以状态改变不会发生更新
        this.setState(obj)
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     // console.log(this.props,this.state)//目前的props和state
    //     // console.log(nextProps,nextState)//接下来变化的目标props，目标state
    //     console.log(
    //         ('state'+this.state.carName+'nextState'+nextState.carName),
    //         (this.state.carName !== nextState.carName),
    //         !(this.state.carName === nextState.carName) //取反优先级比恒等高，所有得用括号提高运算优先级
    //     )
    //     return this.state.carName !== nextState.carName//状态值相同返回false不在渲染，不相同返回true render渲染
    //     // return true
    // }
    render() {
        console.log('Parent---render')
        const {carName} = this.state
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <span>我的车名字是：{carName}</span><br/>
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName='奥拓'/>
            </div>
        )
            
    }
}

class Child extends PureComponent{
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps)
    //     console.log(this.props)
    //     console.log('子组件中',!this.props.carName === nextProps.carName)
    //     return !(this.props.carName === nextProps.carName)
    // }
    render() {
        console.log('Child---render')
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                <span>我接到的车是：{this.props.carName}</span>
            </div>
        )
    }
}