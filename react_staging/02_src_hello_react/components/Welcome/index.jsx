// 引入Component不是解构赋值，而是react模块中导出了成员Component
import React,{Component} from 'react'

import './index.css'
export default class Welcome extends Component {
    render() {
        return <h2 className="demo">Welcome</h2>
    }
}