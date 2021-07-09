import React, { Component } from "react";
import PubSub from 'pubsub-js'
import "./index.css"
export default class List extends Component {
  state = {//初始化状态
    users:[], // 保存用户的数组
    isFirst: true, //是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    err: '' //存储请求错误相关信息
  }
  // 组件挂载完毕
  componentDidMount() {
   this.token =  PubSub.subscribe('updateAppState',(_,stateObj) => {
       this.setState(stateObj)
    })
  }
  // 组件将要卸载
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  render() {
  const {isFirst,isLoading,err,users} = this.state
    return (
      <div className="row">
         {
           isFirst? <h2>Welcome, enter keywords, click search</h2>:
           isLoading? <h2>Loading......</h2>:
           err? <h2 style={{color: 'red'}}>{err}</h2>:
           users.map(userObj => {
             return (
              <div key={userObj.id} className="card">
              <a href={userObj.html_url} rel="noreferrer" target="_blank">
                <img
                  alt="head_portrait"
                  src={userObj.avatar_url}
                  style={{ width: "100px" }}
                />
              </a>
              <p className="card-text">{userObj.login}</p>
            </div>
             )
           })
         }
      </div>
    );
  }
}
