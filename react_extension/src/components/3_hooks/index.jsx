import React from 'react'
import ReactDOM from 'react-dom'

// 类式组件
// class Demo extends React.Component {
//     state = {count: 0}
//     myRef = React.createRef()
//     // 点击加1的回调
//     add = () => {
//         this.setState(state =>({count:state.count+1}))
//     } 
//     // 点击卸载的回调  
//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     // 提示输入的回调
//     show = () => {
//         alert(this.myRef.current.value)
//     }
//     // 组件挂载完毕
//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState(state => ({count:state.count+1}))
//         },1000)
//     }
//     // 组件将要卸载
//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef}/>
//                 <h2>当前求和为：{this.state.count}</h2>
//                 <button onClick={this.add}>点我加1</button>
//                 <button onClick={this.unmount}>点击卸载</button>
//                 <button onClick={this.show}>点击显示</button>
//             </div>
//         )
//     }
// }

// 函数式组件
function Demo() {
    // console.log('Demo')
    const [count,setCount] = React.useState(0);
    const myRef = React.useRef()
    React.useEffect(() => {
        let timer =  setInterval(() => {
            setCount(count => count+1)
        },1000)
        return () => {
            clearInterval(timer)
        }
    },[])
    // 加的回调
    function add() {
        // setCount(count+1) //第一种写法
        setCount(count => count+1)
    }
    // 提示输入的回调
    function show() {
        alert(myRef.current.value)
    }
    // 卸载组件的回调
    function unmount (){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我加1</button>
            <button onClick={unmount}>点击卸载</button>
            <button onClick={show}>点击显示</button>
        </div>
    )
}
export default Demo
