import React, { Component } from "react";
import './App.css'
import Header from "./components/Header";
import List from "./components/List";
export default class App extends Component {
  state = {//初始化状态
    users:[], // 保存用户的数组
    isFirst: true, //是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    err: '' //存储请求错误相关信息
  } 
  // 更新App的状态
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    return (
      <div className="container">
        <Header updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    );
  }
}
