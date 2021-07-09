// 引入Component不是解构赋值，而是react模块中导出了成员Component
import React,{Component} from 'react'
// 引入模块化后的样式
import hello from './index.module.css'

export default class Hello extends Component {
    render() {
        return <h2 className={hello.title}>Hello,React</h2>
    }
}