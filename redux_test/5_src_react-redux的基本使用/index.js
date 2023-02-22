import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))

// 检测redux中状态的改变,如redux的状态发生了改变,那么重新渲染App组件
store.subscribe(() => { // 订阅stoe状态，改变时触发
    // 不同担心整个页面被重新渲染，因为有DOM diff算法
    ReactDOM.render(<App/>,document.getElementById('root'))
})
