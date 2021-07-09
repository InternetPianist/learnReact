import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Header extends Component {
    search = () => {
        // // 获取用户的输入(连续解构赋值+重命名)
        const {keyWordElement:{value:keyWord}} = this //keyWordElement并没有定义
        // 发送请求前通知List更新状态
        PubSub.publish('updateAppState',{isLoading:true,isFirst:false})
        // 发送网络请求
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
                // 请求成功后通知List更新状态
                PubSub.publish('updateAppState',{isLoading: false,users: response.data.items})
            },
            
            error => {
                // 请求失败后通知List更新状态
                PubSub.publish('updateAppState',{isLoading:false,err: error.message})
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />
              &nbsp;<button onClick={this.search}>Search</button>
            </div>
          </section>
        )
    }
}
