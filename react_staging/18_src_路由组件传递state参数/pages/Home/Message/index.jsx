import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
      messageArr:[
        { id: '01',title: '消息1'},
        { id: '02',title: '消息2'},
        { id: '03',title: '消息3'},
        
      ]
    }
    render() {
      const {messageArr} = this.state
        return (
            <div>
                <ul>
                  {
                    messageArr.map(item => {
                      return (
                        <li key={item.id}>
                          {/* 向路由组件传递params参数 */}
                          {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}

                          {/* 向路由组件传递参数search参数 */}
                          {/* <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                          {/* 向路由组件传递state参数 */}
                          <Link to={{pathname: '/home/message/detail',state: {id:item.id,title:item.title}}}>{item.title}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
                {/* 声明接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}

                {/* search参数无需声明接收，正常注册路由即可 */}
                {/* <Route path="/home/message/detail" component={Detail}></Route> */}

                {/* state参数无需接收，正常注册路由即可 */}
                <Route path="/home/message/detail" component={Detail}></Route>
              </div>
        )
    }
}
